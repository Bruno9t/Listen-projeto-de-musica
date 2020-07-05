import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUserTable1593882656007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"user",
                columns:[
                    {
                        type:"int",
                        name:"id",
                        unsigned:true,
                        isPrimary:true,
                        isUnique:true,
                        isNullable:false,
                        isGenerated:true,
                    },
                    {
                        type:"varchar",
                        length:"30",
                        name:"name",
                        isNullable:false
                    },
                    {
                        type:"varchar",
                        length:"30",
                        name:"surname",
                    },
                    {
                        type:"varchar",
                        length:"30",
                        name:"username",
                        isUnique:true,
                        isNullable:false,
                    },
                    {
                        type:"varchar",
                        length:"50",
                        name:"password",
                        isNullable:false
                    },
                    {
                        type:"varchar",
                        length:"50",
                        name:"email",
                        isUnique:true,
                        isNullable:false,
                    },
                    {
                        type:"varchar",
                        length:"40",
                        name:"user_thumbnail",
                        isUnique:true
                    },
                    {
                        type:"timestamp",
                        name:"created_at",
                        default:"now()",
                    },
                    {
                        type:"timestamp",
                        name:"updated_at",
                        default:"now()"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("user")
    }

}

