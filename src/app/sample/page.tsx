"use client";

// UserProfile.tsx

import React, { useEffect, useState } from "react";
import UserRepositoryInterface from "@/domain/interfaces/userInterfaces";
import UserRepository from "@/infrastructure/repositories/UserRepository";
import GetUserById from "@/domain/usecases/GetUserById";

const userRepository = new UserRepository();
const getUserById:UserRepositoryInterface = new GetUserById(userRepository);

const UserProfile: React.FC = () => {
  const userId = "1"; // Hardcoded userId

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById.getById(userId);
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
