import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { posts, TIPost, TSPost } from "../drizzle/schema"; // 

export const PostsService = async (limit?: number): Promise<TSPost[] | null> => {
    if (limit) {
        return await db.query.posts.findMany({
            limit: limit
        });
    }
    return await db.query.posts.findMany();
}

export const getPostsService = async (id: number): Promise<TIPost | undefined> => {
    return await db.query.posts.findFirst({
        where: eq(posts.id, id), 
        with:{
            posts:true
        }
    });
}

export const createPostsService = async (post: TIPost): Promise<string> => {
    await db.insert(posts).values(post);
    return "Post created successfully";
}

export const updatePostsService = async (id: number, post: TIPost): Promise<string> => {
    await db.update(posts).set(post).where(eq(posts.id, id));
    return "Post updated successfully";
}

export const deletePostsService = async (id: number): Promise<string> => {
    await db.delete(posts).where(eq(posts.id, id));
    return "Post deleted successfully";
}
