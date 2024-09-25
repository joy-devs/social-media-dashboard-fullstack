import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { messages, TIMessage, TSMessage} from "../drizzle/schema"; // 

export const messagesService = async (limit?: number): Promise<TSMessage[] | null> => {
    if (limit) {
        return await db.query.messages.findMany({
            limit: limit
        });
    }
    return await db.query.messages.findMany();
}

export const getmessagesService = async (id: number): Promise<TIMessage | undefined> => {
    return await db.query.messages.findFirst({
        where: eq(messages.id, id), 
        with:{
            messages:true
        }
    });
}

export const createmessagesService = async (message: TIMessage): Promise<string> => {
    await db.insert(messages).values(message);
    return "Message created successfully";
}

export const updatemessagesService = async (id: number, message: TIMessage): Promise<string> => {
    await db.update(messages).set(message).where(eq(messages.id, id));
    return "Message updated successfully";
}

export const deletemessagesService = async (id: number): Promise<string> => {
    await db.delete(messages).where(eq(messages.id, id));
    return "User deleted successfully";
}
