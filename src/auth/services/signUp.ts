import { ConflictError, ControllerArgs, hashData } from "../../core";
import { User } from "../../users";


export class SignUp {

    signUp = async ({input}: ControllerArgs) => {

        const { email, firstName, lastName, otherName, password, telephone } =  input;

        const adminExist = await User.findOne({ where: { email } });
        if(adminExist) throw new ConflictError("Admin with email already exists");
        
        const hashPassword = await hashData(password);
        const data = {password: hashPassword, ...input};

        const newAdmin = await User.create(data);

        const result = newAdmin.toJSON();

        delete data.password;

        return {
            code: 201,
            message: "User registered successfully",
            data: result
        }
    }
}