import jwt from 'jsonwebtoken'

export default function createActivationToken(payload) {

    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRETE, {
        expiresIn: "2 days",
    })
}