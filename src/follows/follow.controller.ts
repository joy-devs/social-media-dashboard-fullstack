
import { Context } from 'hono';
import {followersService, getfollowersService, createfollowersService, updatefollowersService, deletefollowersService } from './follow.services';

// List all followers
export const listfollowers = async (c: Context): Promise<Response> => {
  const follows = await followersService();
  return c.json(follows);
};

// Get a single follower by ID
export const getfollowers = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const follow = await getfollowersService(id);
  if (follow) {
    return c.json(follow);
  }
  return c.json({ message: 'follower not found' }, 404);
};

// Create a new follower
export const createfollowers = async (c: Context): Promise<Response> => {
  const followerData = await c.req.json();
  const follower = await createfollowersService(followerData);
  return c.json(follower, 201);
};

// Update a follower
export const updatefollowers = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const followerData = await c.req.json();
  const message = await updatefollowersService(id, followerData);
  return c.json({ message });
};

// Delete a follower
export const deletefollowers = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deletefollowersService(id);
  return c.json({ message });
};
