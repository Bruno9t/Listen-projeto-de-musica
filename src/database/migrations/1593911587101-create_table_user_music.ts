import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class createTableUserMusic1593911587101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"user_musics_music",
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
                        name:"musicId",
                        isNullable:false,
                    },
                    {
                        type:"int",
                        unsigned:true,
                        name:"userId",
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
            'user_musics_music',
            new TableForeignKey({
                name:"user_music",
                columnNames:["userId"],
                referencedColumnNames:["id"],
                referencedTableName:"user",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
        await queryRunner.createForeignKey(
            'user_musics_music',
            new TableForeignKey({
                name:"music_user",
                columnNames:["musicId"],
                referencedColumnNames:["id"],
                referencedTableName:"music",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('user_musics_music',"user_music")
        await queryRunner.dropForeignKey('user_musics_music',"music_user")
        await queryRunner.dropTable("user_musics_music")
    }

}
