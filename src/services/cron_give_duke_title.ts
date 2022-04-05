import { bot_running, set_status_bot } from "..";

export const cron_give_duke_title = async () => {
    try {
        if (bot_running){
            console.log('duke waiting')
            return
        }
        set_status_bot(true)
        setTimeout(() => {
            set_status_bot(false)
        }, 10000);
        console.log("duke running");
    } catch (e) {
        throw e;
    } finally {
        setTimeout(cron_give_duke_title, 1000);
    }
};
