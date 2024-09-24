import { Hono } from 'hono';
import { listcomments, getcomments, createcomments, updatecomments, deletecomments } from './comment.controller'; 
import { zValidator } from '@hono/zod-validator'; 
// import { UsersTableSchema } from '../validator';
// import { adminRoleAuth,bothRoleAuth } from '../middleware/bearAuth'; 

export const commentsRouter = new Hono();

// Get all comments
commentsRouter.get('/comments',  listcomments);

// Get a single comment
commentsRouter.get('/comments/:id', getcomments);

// Create a comment
commentsRouter.post(
  '/comments',
  
   createcomments
);

// Update a comment
commentsRouter.put(
  '/comments/:id',
  
   updatecomments
);

// Delete a comment
commentsRouter.delete('/comments/:id',  deletecomments);

export default commentsRouter;
