import express,{ Application, Request, Response } from 'express';
import { Router } from 'express';
import userRoute  from './user';
import postRoute  from './post';

class WebRoute {

  public router: Router;
  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.router.use('/users',userRoute.router);
    this.router.use('/posts',postRoute.router);
    this.router.get('/', (req,res) => { res.send("In web route");});
  }
}

const webRoute = new WebRoute();

export default webRoute;