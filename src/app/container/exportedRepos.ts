import UserRepository from "@/infrastructure/repositories/UserRepository";
import GetUserById from "@/domain/usecases/GetUserById";

const userRepo = new UserRepository();
const getUserById = new GetUserById(userRepo);

export { userRepo, getUserById };
