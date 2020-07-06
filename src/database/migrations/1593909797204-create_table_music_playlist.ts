import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class createTableMusicPlaylist1593909797204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"music_playlist",
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
                        name:"playlist_id",
                        isNullable:false,
                    },
                    {
                        type:"int",
                        unsigned:true,
                        name:"music_id",
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
            'music_playlist',
            new TableForeignKey({
                name:"music_playlist",
                columnNames:["music_id"],
                referencedColumnNames:["id"],
                referencedTableName:"music",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
        await queryRunner.createForeignKey(
            'music_playlist',
            new TableForeignKey({
                name:"playlist_music",
                columnNames:["playlist_id"],
                referencedColumnNames:["id"],
                referencedTableName:"playlist",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('music_playlist',"playlist_music")
        await queryRunner.dropForeignKey('music_playlist',"music_playlist")

        await queryRunner.dropTable("music_playlist")

    }

}
