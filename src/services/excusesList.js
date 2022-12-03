import { faker } from '@faker-js/faker';

const r = faker.helpers.arrayElement;

const relatives = [
    "father",
    "mother",
    "son",
    "daughter",
    "brother",
    "sister",
    "partner",
    "aunt",
    "cousin",
    "nephew",
    "grandma",
    "grandpa",
];

const req = ["need to", "have to", "forgot to", "am supposed to"];

export const EXCUSES = [
    () => `I ${r(req)} ${faker.word.verb()} my ${r(relatives)}`,
    () => `I ${r(req)} ${faker.word.verb()} my ${faker.word.adjective()} ${faker.animal.type()}`,
    () => `${faker.word.interjection()}, I ${r(req)} ${faker.word.verb()} my ${faker.word.noun()} `,
];
