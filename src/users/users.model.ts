import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'evantype@gmail.com', description: 'email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'password', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'is user banned?'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'fashion police', description: 'reason for ban'})
    @Column({type: DataType.BOOLEAN, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}