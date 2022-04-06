import { TextChannel } from "discord.js";
import { bot_running, KEY_JUD, queue_jub, set_status_bot } from "..";
import { CHANNEL_ID, TIME_OUT_JUD } from "../config";
import { give_title_hanlde } from "../services/give_title_hanlde";
import { client } from "../services/init_bot";

let time_out = 1000
export const cron_give_jud_title = async () => {
    try {
        if (queue_jub.length > 0) {
            if (!bot_running) {
                set_status_bot(true)
                await give_title_hanlde(queue_jub[0].x, queue_jub[0].y, KEY_JUD)
                await (client.channels.cache.get(CHANNEL_ID) as TextChannel).send(`JUDGE: Hey ${queue_jub[0].author}. Your turn, you have ${TIME_OUT_JUD/60000} minutes!`)
                queue_jub.shift()
                if (queue_jub[0]){
                    (client.channels.cache.get(CHANNEL_ID) as TextChannel).send(`JUDGE: Hey ${queue_jub[0].author}. The next step is you. Get ready!`)
                }
                set_status_bot(false)
                time_out = TIME_OUT_JUD
                return
            }
            time_out = 1000
        }else time_out = 1000
    } catch (e) {
        throw e;
    } finally {
        setTimeout(cron_give_jud_title, time_out);
    }
};
