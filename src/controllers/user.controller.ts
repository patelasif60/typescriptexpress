import { Request, Response } from 'express';
import { UserService } from '../services/userService'

export class UserController {
    private userService: UserService;

    public constructor() {
        this.userService = new UserService();
    }
    public async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }
    
}