const { User } = require('../Models');

const userData = [
    {
        username: "TechGuru89",
        github: "techguru89",
        email: "techguru89@gmail.com",
        password: "Pa$$w0rd123"
    },
    {
        username: "CodeNinja42",
        github: "codeninja42",
        email: "codeninja42b@gmail.com",
        password: "Ninja@123"
    },
    {
        username: "GeekMaster77",
        github: "geekMaster77",
        email: "GeekMaster77@gmail.com",
        password: "geekmaster77*"
    },
    {
        username: "ByteWizard21",
        github: "bytewizard21",
        email: "bytewizard21@gmail.com",
        password: "W1zard@Pass"
    },
    {
        username: "TechExplorer12",
        github: "techexplorer12",
        email: "techexplorer12@gmail.com",
        password: "Expl0reTech!"
    },
    {
        username: "DevGuru12",
        github: "devguru12",
        email: "devguru12@gmail.com",
        password: "GuruDev@2023"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;