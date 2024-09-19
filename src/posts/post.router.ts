import { Hono } from 'hono';
import { listposts, getposts, createposts, updateposts, deleteposts } from './post.controller';
import { zValidator } from '@hono/zod-validator'; 
// import { PostsTableSchema } from '../validator';
// import { adminRoleAuth,bothRoleAuth } from '../middleware/bearAuth'; 

export const postsRouter = new Hono();

// Get all posts
postsRouter.get('/posts', listposts);

// Get a single post
postsRouter.get('/posts/:id', getposts);

// Create a post
postsRouter.post(
  '/posts',
  
  createposts
);

// Update a post
postsRouter.put(
  '/posts/:id',
  
  updateposts
);

// Delete a post
postsRouter.delete('/posts/:id', deleteposts);

export default postsRouter;
