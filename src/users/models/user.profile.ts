import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";



export class UserProfile extends Model
<InferAttributes<UserProfile>, InferCreationAttributes<UserProfile>>{
    declare profileId: CreationOptional<string>;
    declare occupation: CreationOptional<string>;
    declare role: CreationOptional<string>;
}