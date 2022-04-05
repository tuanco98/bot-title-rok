import { QueueTitle } from "./models/common";
import { cron_give_archi_title } from "./services/cron_give_archi_title";
import { cron_give_duke_title } from "./services/cron_give_duke_title";
import { cron_give_jud_title } from "./services/cron_give_jud_title";
import { cron_give_scient_title } from "./services/cron_give_scient_title";
import { initBot } from "./services/init_bot";

export const queue_duke: QueueTitle[] = [];
export const queue_scient: QueueTitle[] = [];
export const queue_archi: QueueTitle[] = [];
export const queue_jub: QueueTitle[] = [];
export let bot_running = false;

(async () => {
    try {
        await initBot();
        await Promise.all([
            cron_give_duke_title(),
            cron_give_archi_title(),
            cron_give_scient_title(),
            cron_give_jud_title(),
        ]);
    } catch (e) {
        throw e;
    }
})();
export const set_status_bot = (status: boolean)=>{
    bot_running = status
}