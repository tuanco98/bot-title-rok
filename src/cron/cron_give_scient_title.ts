import { TextChannel } from "discord.js";
import { bot_running, KEY_SCIENT, queue_scient, set_status_bot } from "..";
import { CHANNEL_ID, TIME_OUT_SCIENT } from "../config";
import { give_title_hanlde } from "../services/give_title_hanlde";
import { client } from "../services/init_bot";

let time_out = 1000
export const cron_give_scient_title = async () => {
    try {
        if (queue_scient.length > 0) {
            if (!bot_running) {
                set_status_bot(true)
                await give_title_hanlde(queue_scient[0].x, queue_scient[0].y, KEY_SCIENT)
                await (client.channels.cache.get(CHANNEL_ID) as TextChannel).send(`SCIENTIST: Hey ${queue_scient[0].author}. Your turn, you have ${TIME_OUT_SCIENT/60000} minutes!`)
                queue_scient.shift()
                if (queue_scient[0]){
                    (client.channels.cache.get(CHANNEL_ID) as TextChannel).send(`SCIENTIST: Hey ${queue_scient[0].author}. The next step is you. Get ready!`)
                }
                set_status_bot(false)
                time_out = TIME_OUT_SCIENT
                return
            }
            time_out = 1000
        }else time_out = 1000
    } catch (e) {
        throw e;
    } finally {
        setTimeout(cron_give_scient_title, time_out);
    }
};
