import IStorageProvider from "../models/IStorageProvider";
import aws, { S3 } from 'aws-sdk';
import fs from 'fs';
import mime from 'mime';
import path from 'path';
import uploadConfig from '@config/upload';


class DiskStorageProvider implements IStorageProvider {
    private client: S3;

    constructor() {
        this.client = new aws.S3({
            region: 'us-east-2',

        })
    }

    public async savefile(file: string): Promise<string> {
        const originalPath = path.resolve(uploadConfig.tmpFolder, file);

        const ContentType = mime.getType(originalPath);

        if(!ContentType){
            throw new Error('File not found!');
        }

        const fileContent = await fs.promises.readFile(originalPath);

        await this.client.putObject({
            Bucket: uploadConfig.config.aws.bucket,
            Key: file,
            ACL: 'public-read',
            Body: fileContent,
            ContentType,
        }).promise();

        await fs.promises.unlink(originalPath);

        return file;
    }

    public async deleteFile(file: string): Promise<void> {
        await this.client.deleteObject({
            Bucket: uploadConfig.config.aws.bucket,
            Key: file,
        })
        .promise();
    }
}

export default DiskStorageProvider;
