import { config } from "dotenv"

config()

if (!process.env.BOT_TOKEN) throw new Error('BOT_TOKEN must be provided')
export const BOT_TOKEN = process.env.BOT_TOKEN
if (!process.env.CHANNEL_ID) throw new Error('CHANNEL_ID must be provided')
export const CHANNEL_ID = process.env.CHANNEL_ID
if (!process.env.ADMIN_ID) throw new Error('ADMIN_ID must be provided')
export const ADMIN_ID = process.env.ADMIN_ID