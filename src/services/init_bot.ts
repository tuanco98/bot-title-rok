import { Client, Intents } from 'discord.js';
import { deploy } from './deploy';

export const initBot = async () => {
    try {
        const { BOT_TOKEN } = process.env
        const client = new Client({
            intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_INTEGRATIONS,
          ],
        });
        client.on('ready', () => {
          console.log(`> Bot is on ready`);
        });
        await client.login(BOT_TOKEN)
        deploy(client)
    } catch (e) {
        throw e
    }
}