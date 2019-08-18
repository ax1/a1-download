"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = __importDefault(require("fs"));
async function download(url, folder) {
    try {
        const res = await node_fetch_1.default(url);
        if (!res.ok)
            throw new Error(res.statusText + '. ' + res.url);
        const folder = `./database`;
        if (!fs_1.default.existsSync(folder))
            fs_1.default.mkdirSync(folder, { recursive: true }); // synchronous, but only the first time
        const file = fs_1.default.createWriteStream(`${folder}/${(new Date()).toISOString()}.html`);
        res.body.pipe(file);
    }
    catch (err) {
        console.error(err);
    }
}
exports.download = download;
