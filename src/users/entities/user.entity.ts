import { Column, Entity, PrimaryGeneratedColumn,  } from 'typeorm'
import { MaxLength, MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';
@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique:true})
    @MinLength(6)
    username:string;
    
    @Column()
    @Exclude({ toPlainOnly: true })
    password:string;
}
