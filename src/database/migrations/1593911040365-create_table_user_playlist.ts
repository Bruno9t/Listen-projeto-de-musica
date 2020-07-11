import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createTableUserPlaylist1593911040365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"user_playlists_playlist",
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
            'user_playlists_playlist',
            new TableForeignKey({
                name:"user_playlist",
                columnNames:["userId"],
                referencedColumnNames:["id"],
                referencedTableName:"user",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
        await queryRunner.createForeignKey(
            'user_playlists_playlist',
            new TableForeignKey({
                name:"playlist_user",
                columnNames:["playlistId"],
                referencedColumnNames:["id"],
                referencedTableName:"playlist",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('user_playlists_playlist',"user_playlist")
        await queryRunner.dropForeignKey('user_playlists_playlist',"playlist_user")

        await queryRunner.dropTable("user_playlists_playlist")
    }

}
