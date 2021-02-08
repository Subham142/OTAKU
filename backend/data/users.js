import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        //this library is for random passwords (key ,length)
        password:bcrypt.hashSync('12345',10),
        isAdmin:true,
    },
    {
        name:'Ram Turi',
        email:'ram@example.com',
        password:bcrypt.hashSync('12345',10),
    },
    {
        name:'Sam Turi',
        email:'sam@example.com',
        password:bcrypt.hashSync('12345',10),
    },
]

export default users;