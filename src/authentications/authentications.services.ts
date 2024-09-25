import { tokens, users, TIToken, TSToken } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";

// Create new token for authentication
export const createAuthUserService = async (user: TIToken): Promise<string | null> => {
    await db.insert(tokens).values(user);
    return "User created successfully";
}

// User login service
export const userLoginService = async (user: TSToken) => {
    const { username, password } = user; // Adjust this if necessary for password hash comparison

    return await db.query.users.findFirst({
        columns: {
            id: true,
            username: true,
            email: true,
            passwordHash: true, // Check for hashed password
            bio: true,
        },
        where: sql`${users.username} = ${username}`, // Using the correct field from your schema
    });
};
