import { QueueTitle } from "./models/common"
import { initBot } from "./services/init_bot"
import { cron_give_archi_title } from "./cron/cron_give_archi_title"
import { cron_give_duke_title } from "./cron/cron_give_duke_title"
import { cron_give_scient_title } from "./cron/cron_give_scient_title"
import { cron_give_jud_title } from "./cron/cron_give_jud_title"
import { KEYS_BOARD_TITLE } from "./config"

export const queue_duke: QueueTitle[] = []
export const queue_scient: QueueTitle[] = []
export const queue_archi: QueueTitle[] = []
export const queue_jub: QueueTitle[] = []
export let bot_running = false
export let KEY_DUKE: string
export let KEY_SCIENT: string
export let KEY_ARCHI: string
export let KEY_JUD: string

;(async () => {
    try {
        const keys_board_title = KEYS_BOARD_TITLE.split(",")
        KEY_JUD = keys_board_title[0]
        KEY_DUKE = keys_board_title[1]
        KEY_SCIENT = keys_board_title[2]
        KEY_ARCHI = keys_board_title[3]
        await initBot()
        await Promise.all([
            cron_give_duke_title(),
            cron_give_archi_title(),
            cron_give_scient_title(),
            cron_give_jud_title(),
        ])
    } catch (e) {
        throw e
    }
})()
export const set_status_bot = (status: boolean) => {
    bot_running = status
}
