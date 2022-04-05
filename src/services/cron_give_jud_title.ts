import { bot_running, set_status_bot } from "..";

export const cron_give_jud_title = async () => {
    try {
        if (bot_running){
            console.log('jud waiting')
            return
        }
        set_status_bot(true)
        setTimeout(() => {
            set_status_bot(false)
        }, 10000);
        console.log("jub running");
    } catch (e) {
        throw e;
    } finally {
        setTimeout(cron_give_jud_title, 1000);
    }
};
