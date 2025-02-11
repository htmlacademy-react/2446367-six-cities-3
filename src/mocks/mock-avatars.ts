import { faker } from '@faker-js/faker';

export const avatars = Array.from({ length: 8 }, () => faker.image.avatar());
