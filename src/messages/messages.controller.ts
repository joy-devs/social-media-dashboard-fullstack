
import { Context } from 'hono';
import {messagesService, getmessagesService, createmessagesService, updatemessagesService, deletemessagesService } from './messages.services';
import { messages } from '../drizzle/schema';

// List all messages
export const listmessages = async (c: Context): Promise<Response> => {
  const users = await messagesService();
  return c.json(messages);
};

// Get a single message by ID
export const getmessages = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await getmessagesService(id);
  if (message) {
    return c.json(message);
  }
  return c.json({ message: 'Message not found' }, 404);
};

// Create a new message
export const createmessages = async (c: Context): Promise<Response> => {
  const messageData = await c.req.json();
  const message = await createmessagesService(messageData);
  return c.json(message, 201);
};

// Update a message
export const updatemessages = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const messageData = await c.req.json();
  const message = await updatemessagesService(id, messageData);
  return c.json({ message });
};

// Delete a message
export const deletemessages = async (c: Context): Promise<Response> => {
  const id = Number(c.req.param('id'));
  const message = await deletemessagesService(id);
  return c.json({ message });
};
