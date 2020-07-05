import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class createTableMusic1593900036580 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"music",
                columns:[
                    {
                        type:"int",
                        unsigned:true,
                        name:"id",
                        isPrimary:true,
                        isUnique:true,
                        isGenerated:true,
                        isNullable:false
                    },
                    {
                        type:"int",
                        unsigned:true,
                        name:"category_id",
                        isNullable:false,
                    },
                    {
                        type:"varchar",
                        length:"50",
                        name:"name",
                        isNullable:false,
                    },
                    {
                        type:"int",
                        unsigned:true,
                        name:"duration",
                        isNullable:false,
                    },
                    {
                        type:"varchar",
                        length:"50",
                        name:"artist",
                        isNullable:false,
                    },
                    {
                        type:"varchar",
                        length:"50",
                        name:"music_file",
                        isNullable:false,
                    },
                    {
                        type:"varchar",
                        length:"50",
                        name:"music_thumbnail",
                    },
                    {
                        type:"boolean",
                        name:"public",
                        isNullable:false,
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

        await queryRunner.createForeignKey(
            'music',
            new TableForeignKey({
                name:"music",
                columnNames:["category_id"],
                referencedColumnNames:["id"],
                referencedTableName:"category",
                onUpdate:"CASCADE",
                onDelete:"SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropForeignKey('music',"music")

        await queryRunner.dropTable("music")
    }

}
