# a1-download

Get a web page and save into a folder

## Usage

> Typescript is also available

```javascript
const {download} = require('a1-download')

download('https://google.com')
.catch(err=>console.error(err))

download('https://google.com','./database')
.catch(err=>console.error(err))
```

## API

`async function download(url: string, folder?: string, name?: string): Promise<void>`

## Notes

This is a package to download only the requested file, not related ones (images, etc) or child pages. The dependency graph is also kept small (intentionally).

If you need full web page save or crawling, search for other packages as [website-scraper](https://www.npmjs.com/package/website-scraper) or [puppeteer](https://www.npmjs.com/package/puppeteer)
