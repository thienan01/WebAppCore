import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, InternalServerErrorException } from "@nestjs/common";
@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }
    async createUser(createUser: CreateUserDto): Promise<void> {
        try {
            var user = this.create(createUser);
            await this.save(user);
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }

    }
    async getByUserName(username: string): Promise<User> {
        try {
            return this.findOneBy({ username });
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }

    }
}