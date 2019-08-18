
import { download } from '../index'
import assert from 'assert'

download('https://google.com', 'database')
download('https://google.com', `database/${(new Date()).toISOString()}`)