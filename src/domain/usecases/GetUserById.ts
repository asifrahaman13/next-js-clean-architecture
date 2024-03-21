import UserRepository from '@/infrastructure/repositories/UserRepository';

class GetUserById {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getById(id: string) {
    console.log('GetUserById usecase');
    return this.userRepository.getById(id);
  }
}

export default GetUserById;
