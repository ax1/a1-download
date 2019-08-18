"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
index_1.download('https://google.com', 'database');
index_1.download('https://google.com', `database/${(new Date()).toISOString()}`);
