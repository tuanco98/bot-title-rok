const ks = require('node-key-sender');
import { KEYS_BOARD } from "../config";

export const give_title_hanlde = async (x: string[], y: string[],key_title: string) => {
    try {
        const delay = 1000
        const keys_board = KEYS_BOARD.split(',')
        // await ks.sendKey(keys_board[0], delay);
        // await ks.sendKey(keys_board[1], delay);
        // await ks.sendKeys(x, delay);
        // await ks.sendKey('enter', delay);
        // await ks.sendKey(keys_board[2], delay);
        // await ks.sendKey(y, delay);
        // await ks.sendKey('enter', delay);
        // await ks.sendKey(keys_board[3], delay);
        // await ks.sendKey(keys_board[4], delay);
        // await ks.sendKey(keys_board[5], delay);
        // await ks.sendKey(keys_board[6], delay);
        // await ks.sendKey(key_title, delay);
        // await ks.sendKey(keys_board[7], delay);
        console.log('done')
    } catch (e) {
        throw e
    }
}
