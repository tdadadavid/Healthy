import { mail } from "../../core";


class SendForgotPasswordMail {

    handle = async (options: {
        email: string,
        firstName: string,
        lastName: string,
        link: string,
        token: string,
    }): Promise<void> => {
        Promise.resolve(
            mail.send({
            fileName: "../views/user.forgot.password.ejs",
            email: options.email,
            subject: "Forgot password",
            data: {
                surname: options.lastName,
                firstname: options.firstName,
                link: options.link
            },
            })
        );
    }
}

export default new SendForgotPasswordMail;