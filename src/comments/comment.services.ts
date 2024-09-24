import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { comments, TIComment, TSComment } from "../drizzle/schema"; // 

export const commentsService = async (limit?: number): Promise<TSComment[] | null> => {
    if (limit) {
        return await db.query.comments.findMany({
            limit: limit
        });
    }
    return await db.query.comments.findMany();
}

export const getcommentsService = async (id: number): Promise<TIComment | undefined> => {
    return await db.query.comments.findFirst({
        where: eq(comments.id, id), 
        with:{
            comments:true
        }
    });
}

export const createcommentsService = async (comment: TIComment): Promise<string> => {
    await db.insert(comments).values(comment);
    return "Comment created successfully";
}

export const updatecommentsService = async (id: number, comment: TIComment): Promise<string> => {
    await db.update(comments).set(comment).where(eq(comments.id, id));
    return "Comment updated successfully";
}

export const deletecommentsService = async (id: number): Promise<string> => {
    await db.delete(comments).where(eq(comments.id, id));
    return "Comment deleted successfully";
}
