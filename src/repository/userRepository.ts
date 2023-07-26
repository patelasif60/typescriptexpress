import { User } from '../models/user';

export class UserRepository {
    public async getAllUsers(): Promise<User[]> {
        const users = await User.findAll();
        return users;
    }
        
}