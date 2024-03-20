
"use client"

import React, { useEffect, useState } from 'react';
import UserRepository from '@/infrastructure/repositories/UserRepository';
import GetUserById from '@/domain/usecases/GetUserById';

const userRepo = new UserRepository();
const getUserById = new GetUserById(userRepo);

const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById.execute(userId);
      console.log(userData)
      setUser(userData);
    };

    fetchUser();
  }, [userId]);

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

