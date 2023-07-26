import express,{ Application, Request, Response } from 'express';
import { Router } from 'express';
import userRoute  from './user';

class ApiRoute {

  public router: Router;
  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.router.use('/users',userRoute.router);
    this.router.get('/', (req,res) => { res.send("In api route");});
  }
}

const apiRoute = new ApiRoute();

export default apiRoute;