import { SignUp, SignIn, ForgotPassword, ResetPassword } from "./services";
import { User } from "../users";


export const signUp = new SignUp(User);
export const signIn = new SignIn(User);
export const forgotPassword = new ForgotPassword(User);
export const resetPassword = new ResetPassword(User);