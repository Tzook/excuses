import { faker } from '@faker-js/faker';

import { EXCUSES } from './excusesList';

export function generateExcuse() {
    const excuseHandler = faker.helpers.arrayElement(EXCUSES);
    return excuseHandler();
}
