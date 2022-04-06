import { Client, TextChannel } from "discord.js";
import { queue_archi, queue_duke, queue_jub, queue_scient } from "..";
import { CHANNEL_ID } from "../config";
import { TitleType } from "../models/common";

export const deploy = (client: Client): void => {
    client.on("messageCreate", async (message) => {
        if (message.channelId === CHANNEL_ID) {
            const msg = message.content.trim().split(" ");
            try {
                if (msg.length === 3) {
                    switch (msg[0]) {
                        case TitleType.duke:
                            await message.reply("You are in line for DUKE title. please wait for your turn!");
                            queue_duke.push({author: message.author, x: msg[1].split(""), y: msg[2].split("") });
                            break;
                        case TitleType.scient:
                            await message.reply("You are in line for SCIENTIST title. please wait for your turn!");
                            queue_scient.push({author: message.author, x: msg[1].split(""), y: msg[2].split("") });
                            break;
                        case TitleType.archi:
                            await message.reply("You are in line for ARCHITECT title. please wait for your turn!");
                            queue_archi.push({author: message.author, x: msg[1].split(""), y: msg[2].split("") });
                            break;
                        case TitleType.jub:
                            await message.reply("You are in line for JUDGE title. please wait for your turn!");
                            queue_jub.push({author: message.author, x: msg[1].split(""), y: msg[2].split("") });
                            break;
                    }
                } else if(msg[0] === TitleType.help) {
                    await message.reply(`
                        Tutorial
- To request titles, pls write exactly these content:                 
(“Title you need”, your coordinates: X “space” Y. Bot refuses to give you titles if you write incorrect content or your city’s coordinates).                
- Each person has 2 minutes to use the titles, if you need longer, please ask again and queue.                      
+, !duke X Y
+, !scient X Y
+, !archi X Y
+, !jud X Y
+,!help // To view instructions
                        
Example:
To request Duke: !duke 456 1034`);
                }
            } catch (e) {
                message.reply("Fail");
            }
        }
    });
};
