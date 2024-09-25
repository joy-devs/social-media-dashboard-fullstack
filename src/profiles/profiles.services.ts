import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { profiles, TIProfile, TSProfile } from "../drizzle/schema"; // 

export const profilesService = async (limit?: number): Promise<TSProfile[] | null> => {
    if (limit) {
        return await db.query.profiles.findMany({
            limit: limit
        });
    }
    return await db.query.profiles.findMany();
}

export const getprofilesService = async (id: number): Promise<TIProfile | undefined> => {
    return await db.query.profiles.findFirst({
        where: eq(profiles.id, id), 
        with:{
            profiles:true
        }
    });
}

export const createprofilesService = async (profile: TIProfile): Promise<string> => {
    await db.insert(profiles).values(profile);
    return "Profile created successfully";
}

export const updateprofilesService = async (id: number, profile: TIProfile): Promise<string> => {
    await db.update(profiles).set(profile).where(eq(profiles.id, id));
    return "Profile updated successfully";
}

export const deleteprofilesService = async (id: number): Promise<string> => {
    await db.delete(profiles).where(eq(profiles.id, id));
    return "Profile deleted successfully";
}
