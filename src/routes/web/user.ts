import { Router } from 'express';
//import { UserController } from '../controllers/user.controller';

class UserRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', (req,res) => { res.send("In web user route");});
  }
}

const userRoute = new UserRoute();

export default userRoute;