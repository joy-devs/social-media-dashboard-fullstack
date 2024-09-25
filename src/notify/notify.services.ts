import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { notifications, TINotification, TSNotification } from "../drizzle/schema"; // 

export const notificationsService = async (limit?: number): Promise<TSNotification[] | null> => {
    if (limit) {
        return await db.query.notifications.findMany({
            limit: limit
        });
    }
    return await db.query.notifications.findMany();
}

export const getnotificationsService = async (id: number): Promise<TINotification | undefined> => {
    return await db.query.notifications.findFirst({
        where: eq(notifications.id, id), 
        with:{
            notifications:true
        }
    });
}

export const createnotificationsService = async (user: TINotification): Promise<string> => {
    await db.insert(notifications).values(user);
    return "Notification created successfully";
}

export const updatenotificationsService = async (id: number, notification: TINotification): Promise<string> => {
    await db.update(notifications).set(notification).where(eq(notifications.id, id));
    return "Notification updated successfully";
}

export const deletenotificationsService = async (id: number): Promise<string> => {
    await db.delete(notifications).where(eq(notifications.id, id));
    return "Notification deleted successfully";
}
