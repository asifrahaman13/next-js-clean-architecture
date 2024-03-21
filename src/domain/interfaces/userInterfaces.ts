import User from "../entities/User";
interface UserRepositoryInterface {
  getById(id: string): Promise<User>;
}

export default UserRepositoryInterface;
