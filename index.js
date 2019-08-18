"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = __importDefault(require("fs"));
async function download(url, folder, name) {
    const res = await node_fetch_1.default(url);
    if (!res.ok)
        throw new Error(res.statusText + '. ' + res.url);
    if (!folder)
        folder = '.';
    if (!fs_1.default.existsSync(folder))
        fs_1.default.mkdirSync(folder, { recursive: true }); // synchronous, but only the first time
    if (!name)
        name = url.substring(url.lastIndexOf('/') + 1);
    const file = fs_1.default.createWriteStream(`${folder}/${name}`);
    res.body.pipe(file);
}
exports.download = download;
