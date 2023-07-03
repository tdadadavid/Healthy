import { ControllerArgs, ForbiddenError, hashData } from "../../core";
import { User } from "../../users";


export class ResetPassword {
    
    constructor(private readonly db: typeof User){}

    reset = async ({ input, query }: ControllerArgs) => {
        const { password } = input;
        const { token } = query;
    
        const user = await this.db.findOne({ where: { resetToken: token }});
        if(!user) throw new ForbiddenError("Invalid or Expired token");
    
        if(user.resetTokenHasExpired())
            throw new ForbiddenError("Invalid or Expired token");
            
        const hashedPassword = await hashData(password);
    
        await user.set({
            resetToken: null,
            resetTokenExpiresIn: null,
            password: hashedPassword,
        }).save();
    
        return {
            status: 200,
            message: "Password has been updated"
        }
    }
}