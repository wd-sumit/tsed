import { Get } from "@tsed/schema";
import { Controller, Inject } from "@tsed/di";
import { UserService } from 'src/services/User.service'
import { Context } from "@tsed/platform-params";

@Controller("/users")
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Get("/")
  getList(@Context() ctx: Context) {
    return this.userService.findAll(ctx);
  }
}