import { pgTable, serial, text, timestamp, integer, varchar } from 'drizzle-orm/pg-core';

// Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull().unique(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  profilePicture: text('profile_picture').default(''),
  bio: text('bio'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Posts table
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  authorId: integer('author_id').references(() => users.id),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Comments table
export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').references(() => posts.id),
  authorId: integer('author_id').references(() => users.id),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Follows table
export const follows = pgTable('follows', {
  id: serial('id').primaryKey(),
  followerId: integer('follower_id').references(() => users.id),
  followingId: integer('following_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

//users table
export type TIUser = typeof users.$inferInsert;
export type TSUser = typeof users.$inferSelect;

// posts table
export type TIPost = typeof users.$inferInsert;
export type TSPost = typeof users.$inferSelect;


