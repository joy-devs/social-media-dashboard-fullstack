import { Hono } from 'hono';
import { listmessages, getmessages, createmessages, updatemessages, deletemessages } from './messages.controller'; 
import { zValidator } from '@hono/zod-validator'; 
// import { UsersTableSchema } from '../validator';
// import { adminRoleAuth,bothRoleAuth } from '../middleware/bearAuth'; 

export const messagesRouter = new Hono();

// Get all messages
messagesRouter.get('/messages',  listmessages);

// Get a single message
messagesRouter.get('/messages/:id', getmessages);

// Create a message
messagesRouter.post(
  '/messages',
  
   createmessages
);

// Update a message
messagesRouter.put(
  '/messages/:id',
  
   updatemessages
);

// Delete a message
messagesRouter.delete('/messages/:id',  deletemessages);

export default messagesRouter;
