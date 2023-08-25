import { pgTable, serial, text, varchar ,integer } from "drizzle-orm/pg-core";
import {drizzle} from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
 
export const cartTable = pgTable('cart', {
  id: serial('id').primaryKey(),
  user_id: varchar('user_id').notNull(),
  product_id: varchar('product_id', { length: 256 }).notNull(),
  quantity : integer ("quantity").notNull()
});

export const db =drizzle(sql);