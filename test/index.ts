
import { download } from '../index'
import assert from 'assert'

download('https://google.com', 'database').catch(err => console.error(err))
download('https://google.com', `database/${(new Date()).toISOString()}`).catch(err => console.error(err))