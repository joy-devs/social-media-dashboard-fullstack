import { Hono } from 'hono';
import { listprofiles, getprofiles, createprofiles, updateprofiles, deleteprofiles } from './profiles.controller'; 
import { zValidator } from '@hono/zod-validator'; 
// import { UsersTableSchema } from '../validator';
// import { adminRoleAuth,bothRoleAuth } from '../middleware/bearAuth'; 

export const profilesRouter = new Hono();

// Get all profiles
profilesRouter.get('/profiles',  listprofiles);

// Get a single profile
profilesRouter.get('/profiles/:id', getprofiles);

// Create a profile
profilesRouter.post(
  '/profiles',
  
   createprofiles
);

// Update a profile
profilesRouter.put(
  '/profiles/:id',
  
   updateprofiles
);

// Delete a profile
profilesRouter.delete('/profiles/:id',  deleteprofiles);

export default profilesRouter;
