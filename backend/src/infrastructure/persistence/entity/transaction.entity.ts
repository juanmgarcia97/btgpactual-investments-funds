import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export default class TransactionEntity {

    @ObjectIdColumn()
    _id!: string;

    @Column({ nullable: false })
    type!: string;

    @Column({ nullable: false })
    fund!: string;

    @Column({ nullable: false, default: new Date().toUTCString() })
    date!: string;
}