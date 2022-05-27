import { MikroORM } from "@mikro-orm/core"
import { __prod___ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'lireddit',
        user: 'postgres',
        password: 'postgres',
        type: 'postgresql',
        debug: !__prod___
    });

    const data = {title: 'test'}

    const post = orm.em.create(Post, data);

    orm.em.persistAndFlush(post);
}

main();