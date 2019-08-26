import fetch from 'node-fetch'
import fs from 'fs'

/**
 * 
 * @param url url to get resource
 * @param folder? local folders to store the file, if path to folder not foud, all the subfolders are created
 * @param name? name of the file to be stored. Default name is the last path of the URL
 * @param options? node-fetch options for the request
 */
export async function download(url: string, folder?: string, name?: string, options?: any): Promise<void> {
  // prepare folder
  if (!folder) folder = '.'
  if (folder.endsWith('')) folder.substring(0, folder.length - 1)
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true }) // synchronous, but only the first time

  // prepare name
  if (!name) {
    let preUrl = url.endsWith('/') ? url.substring(0, url.lastIndexOf('/')) : url
    name = preUrl.substring(preUrl.lastIndexOf('/') + 1)
  }

  // fetch resource
  const res = await fetch(url, options)
  if (!res.ok) throw new Error(res.statusText + '. ' + res.url)

  // save content to file
  const file = fs.createWriteStream(`${folder}/${name}`)
  res.body.pipe(file)
}
