import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { users, TIUser, TSUser } from "../drizzle/schema"; // 

export const usersService = async (limit?: number): Promise<TSUser[] | null> => {
    if (limit) {
        return await db.query.users.findMany({
            limit: limit
        });
    }
    return await db.query.users.findMany();
}

export const getusersService = async (id: number): Promise<TIUser | undefined> => {
    return await db.query.users.findFirst({
        where: eq(users.id, id), 
        with:{
            users:true
        }
    });
}

export const createusersService = async (user: TIUser): Promise<string> => {
    await db.insert(users).values(user);
    return "User created successfully";
}

export const updateusersService = async (id: number, user: TIUser): Promise<string> => {
    await db.update(users).set(user).where(eq(users.id, id));
    return "User updated successfully";
}

export const deleteusersService = async (id: number): Promise<string> => {
    await db.delete(users).where(eq(users.id, id));
    return "User deleted successfully";
}
