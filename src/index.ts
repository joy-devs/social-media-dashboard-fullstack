import { serve } from "@hono/node-server";
import { Hono } from 'hono';
import "dotenv/config";
import {usersRouter} from "./users/user.router";

const app = new Hono();
app.use()

//custom route
app.route("/api", usersRouter)

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
