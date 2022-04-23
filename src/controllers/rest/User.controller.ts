import { Get } from "@tsed/schema";
import { Controller, Inject } from "@tsed/di";
import { UserService } from 'src/services/User.service'

@Controller("/users")
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Get("/")
  getList() {
    return this.userService.findAll();
  }
}