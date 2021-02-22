import { PrimaryGeneratedColumnType } from "typeorm/driver/types/ColumnTypes";

export default interface IMailProvider {
    sendMail(to: string, body:string): Promise<void>;
}
