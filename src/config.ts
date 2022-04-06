import { config } from "dotenv"

config()

if (!process.env.BOT_TOKEN) throw new Error('BOT_TOKEN must be provided')
export const BOT_TOKEN = process.env.BOT_TOKEN
if (!process.env.CHANNEL_ID) throw new Error('CHANNEL_ID must be provided')
export const CHANNEL_ID = process.env.CHANNEL_ID
if (!process.env.ADMIN_ID) throw new Error('ADMIN_ID must be provided')
export const ADMIN_ID = process.env.ADMIN_ID
if (!process.env.TIME_OUT_DUKE) throw new Error('TIME_OUT_DUKE must be provided')
export const TIME_OUT_DUKE = Number(process.env.TIME_OUT_DUKE)
if (!process.env.TIME_OUT_SCIENT) throw new Error('TIME_OUT_SCIENT must be provided')
export const TIME_OUT_SCIENT = Number(process.env.TIME_OUT_SCIENT)
if (!process.env.TIME_OUT_ARCHI) throw new Error('TIME_OUT_ARCHI must be provided')
export const TIME_OUT_ARCHI = Number(process.env.TIME_OUT_ARCHI)
if (!process.env.TIME_OUT_JUD) throw new Error('TIME_OUT_JUD must be provided')
export const TIME_OUT_JUD = Number(process.env.TIME_OUT_JUD)
if (!process.env.KEYS_BOARD) throw new Error('KEYS_BOARD must be provided')
export const KEYS_BOARD = process.env.KEYS_BOARD
if (!process.env.KEYS_BOARD_TITLE) throw new Error('KEYS_BOARD_TITLE must be provided')
export const KEYS_BOARD_TITLE = process.env.KEYS_BOARD_TITLE