import { dispatch } from "../../app";
import { ControllerArgs, generateRandStr, computeExpiryDate, UnAuthorizedError } from "../../core";
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
        
        const mailOptions = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            token,
            link: `localhost:3000?token=${token}`
        }
        dispatch("auth:user:forgotpassword", mailOptions);
    
        return {
            code: 200,
            message: "Link have been sent to your email address",
        };
    }
}