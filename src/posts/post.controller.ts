import { Context } from 'hono';
import { PostsService, getPostsService, createPostsService, updatePostsService, deletePostsService } from './post.services';

// List all posts
export const listposts = async (c: Context): Promise<Response> => {
  const posts = await PostsService();
  return c.json(posts);
};

// Get a single post by ID
export const getposts = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const post = await getPostsService(id);
  if (post) {
    return c.json(post);
  }
  return c.json({ message: 'Post not found' }, 404);
};

// Create a new post
export const createposts = async (c: Context): Promise<Response> => {
  const postData = await c.req.json();
  const post = await createPostsService(postData);
  return c.json(post, 201);
};

// Update a post
export const updateposts = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const postData = await c.req.json();
  const message = await updatePostsService(id, postData);
  return c.json({ message });
};

// Delete a post
export const deleteposts = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deletePostsService(id);
  return c.json({ message });
};
