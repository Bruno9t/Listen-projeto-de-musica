import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class createTableMusicPlaylist1593909797204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"playlist_musics_music",
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
                        name:"playlistId",
                        isNullable:false,
                    },
                    {
                        type:"int",
                        unsigned:true,
                        name:"musicId",
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
            'playlist_musics_music',
            new TableForeignKey({
                name:"music_playlist",
                columnNames:["musicId"],
                referencedColumnNames:["id"],
                referencedTableName:"music",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
        await queryRunner.createForeignKey(
            'playlist_musics_music',
            new TableForeignKey({
                name:"playlist_music",
                columnNames:["playlistId"],
                referencedColumnNames:["id"],
                referencedTableName:"playlist",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('playlist_musics_music',"playlist_music")
        await queryRunner.dropForeignKey('playlist_musics_music',"music_playlist")

        await queryRunner.dropTable("playlist_musics_music")

    }

}


