import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../../core";
import { MaritalStatus } from "../enums";


export class User extends Model<
    InferAttributes<User>, InferCreationAttributes<User>>{
    declare id: CreationOptional<string>;
    declare firstName: string;
    declare lastName: string;
    declare otherName: CreationOptional<string | null>;
    declare email: string;
    declare telephone: string;
    declare maritalStatus: CreationOptional<string>;
    declare profilePicPublicId: CreationOptional<string | null>;
    declare profilePicSecureUrl: CreationOptional<string | null>;
    declare password?: CreationOptional<string | null>;
    declare verifyToken: CreationOptional<string | null>;
    declare verifyTokenExpiresIn: CreationOptional<Date | null>;
    declare resetToken: CreationOptional<string | null>;
    declare resetTokenExpiresIn: CreationOptional<Date | null>;
    declare isVerified: CreationOptional<boolean>;
    declare profileIsCompleted: CreationOptional<boolean>;
    declare isMailSent: CreationOptional<boolean>;
    declare createdAt?: CreationOptional<Date>;
    declare updatedAt?: CreationOptional<Date>;

    resetTokenHasExpired = (): boolean => {
        return !this.resetTokenExpiresIn || this.resetTokenExpiresIn <= new Date(Date.now());
    }

    
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        maritalStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: MaritalStatus.SINGLE
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        profilePicPublicId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profilePicSecureUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        verifyToken: DataTypes.STRING,
        verifyTokenExpiresIn: DataTypes.DATE,
        resetToken: DataTypes.STRING,
        resetTokenExpiresIn: DataTypes.DATE,
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        profileIsCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isMailSent: {
            type: DataTypes.BOOLEAN,
            defaultValue : false
        }
    },
    {
        defaultScope: {
            attributes: {
                exclude: [
                    'password',
                    'verifyToken',
                    'verifyTokenExpiresIn',
                    'resetToken',
                    'resetTokenExpiresIn'
                ]
            }
        },
        scopes: {
            withPassword: {
                attributes: {
                    exclude: [
                        'verifyToken',
                        'verifyTokenExpiresIn',
                        'resetToken',
                        'resetTokenExpiresIn'
                    ]
                }
            },
            withTokens: {
                attributes: {
                    exclude: [
                        'password'
                    ]
                }
            }
        },
        modelName: 'user',
        sequelize,
        timestamps: true,
    },
);