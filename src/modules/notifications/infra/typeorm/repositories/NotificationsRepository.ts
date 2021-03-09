import {  getMongoRepository, MongoRepository } from 'typeorm';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreatedNotificationDTO from '@modules/notifications/dtos/ICreatedNotificationDTO';

import Notification from '../schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
    private ormRepository: MongoRepository<Notification>

    constructor() {
        this.ormRepository = getMongoRepository(Notification, 'mongo');
    }


    public async create({ content, recipient_id }: ICreatedNotificationDTO): Promise<Notification> {
        const notification = this.ormRepository.create({
            content,
            recipient_id
        });

        await this.ormRepository.save(notification);

        return notification;
    }


}

export default NotificationsRepository;
