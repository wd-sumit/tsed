import { Inject, Injectable } from "@tsed/di";
import { Context } from "@tsed/platform-params";
import { User } from "../entities/User.entity";
import { USER_REPOSITORY } from '../repositories/User.repository'
import { LogService } from "./common/Logger.service";

@Injectable()
export class UserService {
  @Inject(USER_REPOSITORY)
  private readonly repository: USER_REPOSITORY;

  @Inject()
  private readonly logService: LogService;

  async create(user: User): Promise<User> {
    return await this.repository.save(user)
  }

  async findAll(ctx: Context): Promise<User[]> {
    this.logService.info(ctx, 'Inside User Service')
    return await this.repository.find();
  }
}