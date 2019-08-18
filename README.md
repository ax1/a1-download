# a1-download

Get a web page and save into a folder

## Usage

> Typescript is also available

```javascript
const {download} = require('a1-download')

download('https://google.com','./database')
.catch(err=>console.error(err))
```

## API

async function download(url: string, folder?: string, name?: string): Promise<void>
