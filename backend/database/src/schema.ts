import { createId } from "@paralleldrive/cuid2";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";



export const user=sqliteTable("user",{
    id:text("id").$defaultFn(()=>createId()).primaryKey().unique(),
    name:text("name").notNull(),
    email:text("email").notNull(),
})

export const virtualbox=sqliteTable("virtualbox",{
    id:text("id").$defaultFn(()=>createId()).primaryKey().unique(),
    name:text("name").notNull(),
    type:text("text",{enum:["react","node"]}).notNull(),
    userId:text("userId").notNull().references(()=>user.id)
})