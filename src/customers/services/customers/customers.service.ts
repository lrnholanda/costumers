import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
   users= [
    {
      id: 1,
      email: 'lrnholanda@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'holanda@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'maria@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'lucas@gmail.com',
      createdAt: new Date(),
    },

   ]
  findCustomerById(id: number) {
    return this.users.find((user) =>
    user.id === id); 
  }
}
