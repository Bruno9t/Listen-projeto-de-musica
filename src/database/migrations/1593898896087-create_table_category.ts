import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createTableCategory1593898896087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"category",
                columns:[
                    {
                        type:"int",
                        unsigned:true,
                        name:"id",
                        isPrimary:true,
                        isUnique:true,
                        isNullable:false,
                        isGenerated:true,
                        generationStrategy: 'increment',
                    },
                    {
                        type:"varchar",
                        length:"30",
                        name:"name",
                        isNullable:false,
                        isUnique:true,
                    },
                    {
                        type:"timestamp",
                        name:"created_at",
                        default:"now()"
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
        await queryRunner.dropTable("category")
    }

}
