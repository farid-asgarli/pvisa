import path from "path";
import { writeFile } from "node:fs/promises";

export async function LogToFile(content: string) {
  const ROUTE_CACHE_PATH = path.resolve(
    path.join(process.cwd(), "public/logs/log.json")
  );

  await writeFile(ROUTE_CACHE_PATH, content, {
    flag: "w",
  });
}
