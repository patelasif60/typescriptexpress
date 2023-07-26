import { Router } from 'express';
//import { UserController } from '../controllers/user.controller';

class PostRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', (req,res) => { res.send("In web post route");});
    this.router.get('/list', (req,res) => { res.send("In web post list route");});
  }
}

const postRoute = new PostRoute();

export default postRoute;