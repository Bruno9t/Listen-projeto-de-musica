import {MigrationInterface, QueryRunner,getRepository, MoreThan} from "typeorm";
import Category from '../../entities/Category'

export class insertUsers1594483234244 implements MigrationInterface {

    public async up(_: QueryRunner): Promise<void> {
        await getRepository(Category,'seed').save(
          [
            {
              name: "Eletrônica",
              created_at: new Date(),
              updated_at: new Date()
            },
            {
              name: "Rock and roll",
              created_at: new Date(),
              updated_at: new Date()
            },
            {
              name: "Sertanejo",
              created_at: new Date(),
              updated_at: new Date(),
            },
            {
              name: "Pop",
              created_at: new Date(),
              updated_at: new Date()
            },
            {
                name:"Rap",
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name:"Funk",
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name:"Hip-Hop",
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name:"Clássica",
                created_at: new Date(),
                updated_at: new Date()
            },
          ]
        )
    }

    public async down(_: QueryRunner): Promise<void> {
        await getRepository(Category,'seed').delete({
            id:MoreThan(0)
        })

    }

}
