import {MigrationInterface, QueryRunner,TableColumn, TableForeignKey} from "typeorm";

export class addColumnUserIdAndForeignKey1594496725972 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("playlist",
            new TableColumn({
                type:'int',
                unsigned:true,
                name:"user_id",
                isNullable:true,
            })
        )

        await queryRunner.createForeignKey(
            "playlist",
            new TableForeignKey({
                name:"userKey",
                columnNames:["user_id"],
                referencedColumnNames:["id"],
                referencedTableName:"user",
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            })
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('playlist','user_id')
        await queryRunner.dropForeignKey('playlist','userKey')
    }

}
