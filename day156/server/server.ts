import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PostModel } from "./models/post.models";

dotenv.config();

const app: express.Express = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

  app.post('/send-post', async (req, res) => {
    try {
      const post = new PostModel({ doc: req.body });
      await post.save();
    } catch (err) {
      res.status({ code:500 }).json({ body: { message: "Not send info" } });
    }
  });

app.get("/", (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ body: { message: "create successfully!" } });
  } catch (err) {
    res.status(500).json({ body: { message: (err as Error).message } });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});