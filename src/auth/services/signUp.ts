import { ConflictError, ControllerArgs, hashData } from "../../core";
import { User } from "../../users";


export class SignUp {

    signUp = async ({input}: ControllerArgs) => {

        const { email,password } =  input;

        const userExists = await User.findOne({ where: { email } });
        if(userExists) throw new ConflictError("Admin with email already exists");
        
        const hashPassword = await hashData(password);
        const data = {password: hashPassword, ...input};

        const user = await User.create(data);

        const result = user.toJSON();
        delete result.password;

        return {
            code: 201,
            message: "User registered successfully",
            data: result
        }
    }
}