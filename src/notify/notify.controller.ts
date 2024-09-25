
import { Context } from 'hono';
import {notificationsService, getnotificationsService, createnotificationsService, updatenotificationsService, deletenotificationsService } from './notify.services';

// List all notifications
export const listnotifications = async (c: Context): Promise<Response> => {
  const notifications = await notificationsService();
  return c.json(notifications);
};

// Get a single notification by ID
export const getnotifications = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const notification = await getnotificationsService(id);
  if (notification) {
    return c.json(notification);
  }
  return c.json({ message: 'User not found' }, 404);
};

// Create a new notification
export const createnotifications = async (c: Context): Promise<Response> => {
  const notificationData = await c.req.json();
  const notification = await createnotificationsService(notificationData);
  return c.json(notification, 201);
};

// Update a notification
export const updatenotifications = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const notificationData = await c.req.json();
  const message = await updatenotificationsService(id, notificationData);
  return c.json({ message });
};

// Delete a notification
export const deletenotifications = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deletenotificationsService(id);
  return c.json({ message });
};
