import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = { //Constant that is defines by several Credential values incuding users and passwords
    USERNAME: {
        VALID: process.env.VALID_USER,
        INVALID: process.env.INVALID_USER,
        LOCKED_USER: process.env.LOCKED_USER
    },
    PASSWORD: {
        VALID: process.env.VALID_PASSWORD,
        INVALID: process.env.INVALID_PASSWORD
    }
}