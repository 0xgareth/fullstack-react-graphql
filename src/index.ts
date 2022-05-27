import { MikroORM } from "@mikro-orm/core"
import { __prod___ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    const data = {title: 'test'};
    const post = orm.em.create(Post, data);
    await orm.em.persistAndFlush(post);
}

main().catch(err => {
    console.log(err);
});