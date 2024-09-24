import { serve } from "@hono/node-server";
import { Hono } from 'hono';
import "dotenv/config";
import {usersRouter} from "./users/user.router";
import{postsRouter} from "./posts/post.router";
import {followersRouter} from "./follows/follow.router";
import {commentsRouter} from "./comments/comment.router";

const app = new Hono();
app.use()

//custom route
app.route("/api", usersRouter)
app.route("/api", postsRouter)
app.route("/api", followersRouter)
app.route("/api", commentsRouter)

app.get("/" , (c) => {
    return c.text("The server is running")
});


app.notFound((c) => {
    return c.text('route not found')
})

const PORT = process.env.PORT || 8000;
console.log(`server is running on port ${PORT}`);

serve({
    fetch:app.fetch.bind(app),
    port: Number(PORT)
});

export default app;
