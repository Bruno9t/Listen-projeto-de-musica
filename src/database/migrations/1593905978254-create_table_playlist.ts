import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class createTablePlaylist1593905978254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"playlist",
                columns:[
                    {
                        type:"int",
                        unsigned:true,
                        name:"id",
                        isPrimary:true,
                        isUnique:true,
                        isGenerated:true,
                        isNullable:false,
                        generationStrategy: 'increment',
                    },
                    {
                        type:"int",
                        unsigned:true,
                        name:"category_id",
                        isNullable:true,
                    },
                    {
                        type:"varchar",
                        length:"40",
                        name:"name",
                    },
                    {
                        type:"varchar",
                        length:"40",
                        name:"playlist_thumbnail",
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
            'playlist',
            new TableForeignKey({
                name:"playlist",
                columnNames:["category_id"],
                referencedColumnNames:["id"],
                referencedTableName:"category",
                onUpdate:"CASCADE",
                onDelete:"SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('playlist',"playlist")

        await queryRunner.dropTable("playlist")
    }

}
