import { Client, Intents, TextChannel } from "discord.js"
import { CHANNEL_ID } from "../config"
import { deploy } from "./deploy"

export let client: Client
export const initBot = async () => {
    try {
        const { BOT_TOKEN } = process.env
        client = new Client({
            intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS],
        })
        client.on("ready", (client) => {
            console.log(`> Bot is on ready`);
            (client.channels.cache.get(CHANNEL_ID) as TextChannel).send("Hi guys!. Anything you need to title, just order me!")
        })
        await client.login(BOT_TOKEN);
        deploy(client)
    } catch (e) {
        throw e
    }
}
