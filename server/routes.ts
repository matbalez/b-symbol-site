import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import OpenAI, { toFile } from "openai";
import path from "path";
import fs from "fs";
import { storage } from "./storage";

const upload = multer({ storage: multer.memoryStorage() });

const EDIT_PROMPT = `i want you to do a "surgical edit" to the uploaded image. it is a screenshot of a bitcoin wallet. the desire is to have all quantities shown in the screenshot represented in a consistent fashion. - any quantity you see in integer form that you see represented as "sats" should be instead prefaced with the ₿ symbol (and "sats" removed entirely). for example "34,222 sats" should instead be shown in the image as "₿34,222") - any quantity you see in decimal form prefaced with BTC or post-fixed with BTC should instead be shown prefixed with ₿ with the decimal moved 8 positions to the right, resulting in an integer quantity. for example "BTC 0.00001234" should be shown as ₿1,234 and "0.00001234BTC" should also be shown as ₿1,234. one final case to consider is the screenshot _incorrectly_ using the ₿ symbol and requiring an update—if you find an instance of the ₿ symbol annotating a decimal number you should treat that as an error and correct it by moving the decimal to the right exactly 8 positions rendering the resulting integer quantity with the ₿ symbol, for example if you find ₿0.00056789 you should render it as ₿56,789. if converting from decimals to integers, make sure you do the math correctly and double-check the numbers are consistent. you must detect and change all instances of bitcoin quantities in the screenshot—but only bitcoin quantities. other quantities (such as amounts shown in dollars or other currencies) must remain untouched. you should adjust the positioning of the updated quantities so that alignment is preserved and font styling preserved. you must not change any other details of the screenshot at all. overall, the resulting screenshot should look like it was precisely and minimally edited to have all of its bitcoin quantities represented in this new ₿-prefixed convention.`;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/skill.md", (_req: Request, res: Response) => {
    const candidates = [
      path.resolve(process.cwd(), "client/public/skill.md"),
      path.resolve(process.cwd(), "dist/public/skill.md"),
      path.resolve(process.cwd(), "skill.md"),
    ];
    const file = candidates.find((p) => fs.existsSync(p));
    if (!file) return res.status(404).send("skill.md not found");
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.sendFile(file);
  });

  app.post(
    "/api/edit-image",
    upload.single("image"),
    async (req: Request, res: Response) => {
      try {
        if (!req.file) {
          return res.status(400).json({ message: "No image provided" });
        }
        if (!process.env.OPENAI_API_KEY) {
          return res.status(500).json({ message: "OPENAI_API_KEY not configured" });
        }

        const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        const file = await toFile(req.file.buffer, req.file.originalname || "screenshot.png", {
          type: req.file.mimetype || "image/png",
        });

        const result = await client.images.edit({
          model: "gpt-image-2",
          image: file,
          prompt: EDIT_PROMPT,
        });

        const b64 = result.data?.[0]?.b64_json;
        if (!b64) {
          return res.status(500).json({ message: "No image returned from API" });
        }

        return res.json({ image: `data:image/png;base64,${b64}` });
      } catch (err: any) {
        console.error("edit-image error:", err);
        const message = err?.error?.message || err?.message || "Image edit failed";
        return res.status(500).json({ message });
      }
    }
  );

  return httpServer;
}
