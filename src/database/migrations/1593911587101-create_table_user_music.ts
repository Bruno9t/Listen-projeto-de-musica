import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class createTableUserMusic1593911587101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"user_music",
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
                        name:"music_id",
                        isNullable:false,
                    },
                    {
                        type:"int",
                        unsigned:true,
                        name:"user_id",
                        isNullable:false,
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

        await queryRunner.createForeignKey(
            'user_music',
            new TableForeignKey({
                name:"user_music",
                columnNames:["user_id"],
                referencedColumnNames:["id"],
                referencedTableName:"user",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
        await queryRunner.createForeignKey(
            'user_music',
            new TableForeignKey({
                name:"music_user",
                columnNames:["music_id"],
                referencedColumnNames:["id"],
                referencedTableName:"music",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('music_playlist',"user_music")
        await queryRunner.dropForeignKey('music_playlist',"music_user")

        await queryRunner.dropTable("user_music")
    }

}
