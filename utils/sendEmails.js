import nodemailer from "nodemailer"
import {google} from "googleapis"
import {activateEmailTemplate} from "../emails/activateEmailTemplate";


const {OAuth2} = google.auth

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground"

const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRETE,
    MAILING_SERVICE_CLIENT_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRETE,
    MAILING_SERVICE_CLIENT_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
)

export const sendEmail = async (to, url, txt, subject, template) => {
    oauth2Client.setCredentials(
        {
            refresh_token: MAILING_SERVICE_CLIENT_REFRESH_TOKEN
        }
    )

    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport(
        {
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: SENDER_EMAIL_ADDRESS,
                clientId: MAILING_SERVICE_CLIENT_ID,
                clientSecret: MAILING_SERVICE_CLIENT_SECRETE,
                refreshToken: MAILING_SERVICE_CLIENT_REFRESH_TOKEN,
                accessToken
            }
        }
    )
    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: "Ecommerce email validation",
        html: activateEmailTemplate(to, url)
    }

    await smtpTransport.sendMail(mailOptions, (err, info) => {
        if (err) return err
        return info
    })


}