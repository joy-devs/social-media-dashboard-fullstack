import { serve } from "@hono/node-server";
import { Hono } from 'hono';
import "dotenv/config";
import { usersRouter } from "./users/user.router"; 
import {postsRouter} from "./posts/post.router";
import {commentsRouter} from "./comments/comment.router";
import { followersRouter } from "./follows/follow.router";


import { cors } from 'hono/cors'

const app = new Hono();
app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['POST', 'GET', 'PUT', 'DELETE']
  })
)

 



//custom route
app.route("/api", usersRouter)
app.route("/api", postsRouter)
app.route("/api", commentsRouter )
app.route("/api", followersRouter)


app.get("/", (c) => {
    return c.text('The server is running');
  });
  
  export default app;
  
  app.notFound((c) => {
    return c.text('route not found')
  })
  
  const PORT = process.env.PORT || 8000; 
  
  console.log(`Server is running on port ${PORT}`);
  
  serve({
    fetch: app.fetch.bind(app),
    port: Number(PORT)
  });
  