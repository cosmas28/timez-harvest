import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Project } from './interface';

@Injectable()
export class ProjectService {
  private readonly projects: Project[] = [...Array(10).keys()].map(() => {
    return {
      department: faker.commerce.department(),
      name: faker.commerce.productName(), // 'Incredible Soft Gloves'
      industry: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({
        min: 10000,
        max: 100000,
        dec: 0,
        symbol: '$',
      }),
    };
  });

  findAll(): Project[] {
    return this.projects;
  }
}
