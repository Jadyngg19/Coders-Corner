const {User} = require('../Models');
const UserData = [
    {
        username: "Jadyngg_19",
        github: "Jadyngg19",
        email: "jadyngg19@gmail.com",
        password: "ROYGBP2023$"
    },

    {
        username: "Alex_Gaskarth",
        github: "cupokoffi8",
        email: "alexg@gmail.com",
        password: "Monstertruck88!"
    },

    {
        username: "WinnyG",
        github: "Winny#01",
        email: "winny01@gmail.com",
        password: "HoseNose45*"
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;