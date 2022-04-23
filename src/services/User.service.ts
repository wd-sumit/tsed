import { Inject, Injectable } from "@tsed/di";
import { User } from "../entities/User.entity";
import { USER_REPOSITORY } from '../repositories/User.repository'

@Injectable()
export class UserService {
  @Inject(USER_REPOSITORY)
  private readonly repository: USER_REPOSITORY;

  async create(user: User): Promise<User> {
    return await this.repository.save(user)
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }
}