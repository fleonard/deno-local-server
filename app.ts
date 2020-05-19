import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {
  addManga,
  getManga,
  getMangas,
  removeManga,
  updateMangaAuthor,
  updateMangaTitle,
} from "./api.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 8008;
const HOST = env.HOST || "127.0.0.1";

const router = new Router();
router
  .get("/mangas", getMangas)
  .get("/mangas/:title", getManga)
  .post("/mangas", addManga)
  .put("/mangas/:title", updateMangaTitle)
  .put("/mangas/:author", updateMangaAuthor)
  .delete("/mangas/:title", removeManga);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
