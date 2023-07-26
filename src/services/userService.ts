import { UserRepository } from '../repository/userRepository';

export class UserService {
  private userRepository: UserRepository;

  public constructor() {
    this.userRepository = new UserRepository();
  }
  public async getAllUsers(){
    const users = await this.userRepository.getAllUsers();
    return users;
  }

  //public async createUser(userDto: CreateUserDto): Promise<User> {}
}