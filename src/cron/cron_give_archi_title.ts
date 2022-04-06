import { TextChannel } from "discord.js";
import { bot_running, KEY_ARCHI, queue_archi, set_status_bot } from "..";
import { CHANNEL_ID, TIME_OUT_ARCHI } from "../config";
import { give_title_hanlde } from "../services/give_title_hanlde";
import { client } from "../services/init_bot";
let time_out = 1000
export const cron_give_archi_title = async () => {
    try {
        if (queue_archi.length > 0) {
            if (!bot_running) {
                set_status_bot(true)
                await give_title_hanlde(queue_archi[0].x, queue_archi[0].y, KEY_ARCHI)
                await (client.channels.cache.get(CHANNEL_ID) as TextChannel).send(`ARCHITECT: Hey ${queue_archi[0].author}. Your turn, you have ${TIME_OUT_ARCHI/60000} minutes!`)
                queue_archi.shift()
                if (queue_archi[0]){
                    (client.channels.cache.get(CHANNEL_ID) as TextChannel).send(`ARCHITECT: Hey ${queue_archi[0].author}. The next step is you. Get ready!`)
                }
                set_status_bot(false)
                time_out = TIME_OUT_ARCHI
                return
            }
            time_out = 1000
        }else time_out = 1000
    } catch (e) {
        throw e;
    } finally {
        setTimeout(cron_give_archi_title, time_out);
    }
};
