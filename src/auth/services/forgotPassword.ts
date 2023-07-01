import { ControllerArgs, generateRandStr, computeExpiryDate, UnAuthorizedError, mail } from "../../core";
import { User } from "../../users";



export class ForgotPassword<T extends ControllerArgs = ControllerArgs> {

    forgotPassword = async ({ input }: T) => {
        const { email } = input;
    
        const user = await User.findOne({ where: { email } });
        if (!user) throw new UnAuthorizedError('Email not found');
    
        const token = generateRandStr(64);
    
        user.set({
            resetToken: token,
            resetTokenExpiresIn: computeExpiryDate(1800)
        });
        await user.save();
    
        mail.send({
            fileName: "../views/user.forgot.password.ejs",
            email: user.email,
            subject: "Forgot password",
            data: {
                surname: user.lastName,
                firstname: user.firstName,
                link: "www.google.com?/" + token  //TODO: work on the links
            },
        })
    
        return {
            code: 200,
            message: "Link have been sent to your email address",
        };
    }
}