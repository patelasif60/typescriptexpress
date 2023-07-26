import { Router } from 'express';
import { UserController } from '../../controllers/user.controller';

class UserRoute {
  public router: Router;
  public controller : UserController;

  constructor() {
    this.router = Router();
    this.initRoutes();
    this.controller = new UserController();
  }

  private initRoutes(): void {
    //this.router.get('/', (req,res) => { res.send("In api user route");});
    console.log('-------------------------------------------')
    this.router.get('/', (req, res) => this.controller.getAllUsers(req, res));
  //  this.router.get('/list', (req,res) => { res.send("In web post list route");});
  }
}

const userRoute = new UserRoute();

export default userRoute;