import {MigrationInterface, QueryRunner,getRepository, MoreThan} from "typeorm";

import {CategorySeed} from '../seeds/category.seed'
import Category from '../../entities/Category'

export class createCategorySeed1593999823392 implements MigrationInterface {

    public async up(_: QueryRunner): Promise<void> {
        await getRepository(Category).save(
            CategorySeed
        )
    }

    public async down(_: QueryRunner): Promise<void> {
        await getRepository(Category).delete({
            id:MoreThan(0)
        })

    }

}