
import { download } from '../index'
import assert from 'assert'

download('https://google.com', 'database').catch(console.error)
download('https://google.com', `database/${(new Date()).toISOString()}`).catch(console.error)