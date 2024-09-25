import { Hono } from 'hono';
import { listnotifications, getnotifications, createnotifications, updatenotifications, deletenotifications } from './notify.controller'; 
import { zValidator } from '@hono/zod-validator'; 
// import { UsersTableSchema } from '../validator';
// import { adminRoleAuth,bothRoleAuth } from '../middleware/bearAuth'; 

export const notificationsRouter = new Hono();

// Get all notifications
notificationsRouter.get('/notifications',  listnotifications);

// Get a single notification
notificationsRouter.get('/notifications/:id', getnotifications);

// Create a notification
notificationsRouter.post(
  '/notifications',
  
   createnotifications
);

// Update a notification
notificationsRouter.put(
  '/notifications/:id',
  
   updatenotifications
);

// Delete a notification
notificationsRouter.delete('/notifications/:id',  deletenotifications);

export default notificationsRouter;
