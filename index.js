"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = __importDefault(require("fs"));
/**
 *
 * @param url url to get resource
 * @param folder? local folders to store the file, if path to folder not foud, all the subfolders are created
 * @param name? name of the file to be stored. Default name is the last path of the URL
 * @param options? node-fetch options for the request
 */
async function download(url, folder, name, options) {
    // prepare folder
    if (!folder)
        folder = '.';
    if (folder.endsWith(''))
        folder.substring(0, folder.length - 1);
    if (!fs_1.default.existsSync(folder))
        fs_1.default.mkdirSync(folder, { recursive: true }); // synchronous, but only the first time
    // prepare name
    if (!name) {
        let preUrl = url.endsWith('/') ? url.substring(0, url.lastIndexOf('/')) : url;
        name = preUrl.substring(preUrl.lastIndexOf('/') + 1);
    }
    // fetch resource
    const res = await node_fetch_1.default(url, options);
    if (!res.ok)
        throw new Error(res.statusText + '. ' + res.url);
    // save content to file
    const file = fs_1.default.createWriteStream(`${folder}/${name}`);
    res.body.pipe(file);
}
exports.download = download;
//# sourceMappingURL=index.js.map