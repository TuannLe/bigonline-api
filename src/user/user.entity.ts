import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'user'
})
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: false })
    isActive: boolean;

    @Column({
        type: 'enum',
        enum: ['admin', 'customer'],
        default: 'customer'
    })
    role: string;
}