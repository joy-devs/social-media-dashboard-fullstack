import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { likes, TILike, TSLike } from "../drizzle/schema"; // 

export const likesService = async (limit?: number): Promise<TSLike[] | null> => {
    if (limit) {
        return await db.query.likes.findMany({
            limit: limit
        });
    }
    return await db.query.likes.findMany();
}

export const getlikesService = async (id: number): Promise<TILike | undefined> => {
    return await db.query.likes.findFirst({
        where: eq(likes.id, id), 
        with:{
            likes:true
        }
    });
}

export const createlikesService = async (like: TILike): Promise<string> => {
    await db.insert(likes).values(like);
    return "Like created successfully";
}

export const updatelikesService = async (id: number, like: TILike): Promise<string> => {
    await db.update(likes).set(like).where(eq(likes.id, id));
    return "Like updated successfully";
}

export const deletelikesService = async (id: number): Promise<string> => {
    await db.delete(likes).where(eq(likes.id, id));
    return "Like deleted successfully";
}

