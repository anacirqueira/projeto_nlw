import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";

class UsersService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {
    // verificar se o usuário existe
    const UserExists = await this.usersRepository.findOne({
      email
    });
    // se existir, retornar user
    if (UserExists) {
      return UserExists;
    }
    const user = this.usersRepository.create({
      email
    });
    await this.usersRepository.save(user);
    // se não existir, salvar no DB
    return user;
  }
}

export { UsersService };