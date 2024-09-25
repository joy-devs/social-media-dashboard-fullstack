
import { Context } from 'hono';
import {profilesService, getprofilesService, createprofilesService, updateprofilesService, deleteprofilesService } from './profiles.services';

// List all profiles
export const listprofiles = async (c: Context): Promise<Response> => {
  const profiles = await profilesService();
  return c.json(profiles);
};

// Get a profile user by ID
export const getprofiles = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const profile = await getprofilesService(id);
  if (profile) {
    return c.json(profile);
  }
  return c.json({ message: 'Profile not found' }, 404);
};

// Create a new profile
export const createprofiles = async (c: Context): Promise<Response> => {
  const profileData = await c.req.json();
  const profile = await createprofilesService(profileData);
  return c.json(profile, 201);
};

// Update a profile
export const updateprofiles = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const profileData = await c.req.json();
  const message = await updateprofilesService(id, profileData);
  return c.json({ message });
};

// Delete a profile
export const deleteprofiles = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deleteprofilesService(id);
  return c.json({ message });
};
