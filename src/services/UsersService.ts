import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";

class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository)
    // verificar se o usuário existe
    const UserExists = await usersRepository.findOne({
      email
    });
    // se existir, retornar user
    if (UserExists) {
      return UserExists;
    }
    const user = usersRepository.create({
      email
    });
    await usersRepository.save(user);
    // se não existir, salvar no DB
    return user;
  }
}

export { UsersService };