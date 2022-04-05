import { Client } from "discord.js";
import { queue_archi, queue_duke, queue_jub, queue_scient } from "..";
import { CHANNEL_ID } from "../config";
import { TitleType } from "../models/common";

export const deploy = (client: Client): void => {
    client.on("messageCreate", async (message) => {
        if (message.channelId === CHANNEL_ID) {
            const msg = message.content.trim().split(" ");
            try {
                if (msg.length === 3) {
                    console.log(msg);
                    switch (msg[0]) {
                        case TitleType.duke:
                            await message.reply("You are in line for DUKE title. please wait for your turn!");
                            queue_duke.push({ x: msg[1].split(""), y: msg[2].split("") });
                            break;
                        case TitleType.scient:
                            await message.reply("You are in line for SCIENTIST title. please wait for your turn!");
                            queue_scient.push({ x: msg[1].split(""), y: msg[2].split("") });
                            break;
                        case TitleType.archi:
                            await message.reply("You are in line for ARCHITECT title. please wait for your turn!");
                            queue_archi.push({ x: msg[1].split(""), y: msg[2].split("") });
                            break;
                        case TitleType.jub:
                            await message.reply("You are in line for JUDGE title. please wait for your turn!");
                            queue_jub.push({ x: msg[1].split(""), y: msg[2].split("") });
                            break;
                    }
                }
            } catch (e) {
                message.reply("Fail");
            }
        }
    });
};
