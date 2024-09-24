import { Hono } from 'hono';
import { listfollowers, getfollowers, createfollowers, updatefollowers, deletefollowers } from './follow.controller'; 
import { zValidator } from '@hono/zod-validator'; 
// import { UsersTableSchema } from '../validator';
// import { adminRoleAuth,bothRoleAuth } from '../middleware/bearAuth'; 

export const followersRouter = new Hono();

// Get all followers
followersRouter.get('/followers',  listfollowers);

// Get a single follower
followersRouter.get('/followers/:id', getfollowers);

// Create a follower
followersRouter.post(
  '/followers',
  
   createfollowers
);

// Update a follower
followersRouter.put(
  '/followers/:id',
  
   updatefollowers
);

// Delete a follower
followersRouter.delete('/followers/:id',  deletefollowers);

export default followersRouter;
