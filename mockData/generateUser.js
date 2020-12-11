var faker = require('faker');

var database = {users:[]};

for (let i = 0; i < 10; i++) {
    let user = {
        id: 1,
        prenom: faker.name.firstName(),
        nom: faker.name.lastName(),
        email: faker.internet.email()
    };

    database.users.push(user);
    
}

console.log(JSON.stringify(database));