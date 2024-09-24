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
  authorId: integer('author_id').references(() => users.id),  // Foreign key to users table
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Comments table
export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').references(() => posts.id),  // Foreign key to posts table
  authorId: integer('author_id').references(() => users.id),  // Foreign key to users table
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Follows table
export const follows = pgTable('follows', {
  id: serial('id').primaryKey(),
  followerId: integer('follower_id').references(() => users.id),  // Foreign key to users table
  followingId: integer('following_id').references(() => users.id),  // Foreign key to users table
  createdAt: timestamp('created_at').defaultNow(),
});


// Users table
export type TIUser = typeof users.$inferInsert;
export type TSUser = typeof users.$inferSelect;

// Posts table
export type TIPost = typeof posts.$inferInsert;
export type TSPost = typeof posts.$inferSelect;

// Comments table
export type TIComment = typeof comments.$inferInsert;
export type TSComment = typeof comments.$inferSelect;

// Follows table
export type TIFollow = typeof follows.$inferInsert;
export type TSFollow = typeof follows.$inferSelect;
