import fetch from 'node-fetch'
import fs from 'fs'

export async function download(url: string, folder?: string, name?: string): Promise<void> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(res.statusText + '. ' + res.url)
  if (!folder) folder = '.'
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true }) // synchronous, but only the first time
  if (!name) name = url.substring(url.lastIndexOf('/') + 1)
  const file = fs.createWriteStream(`${folder}/${name}`)
  res.body.pipe(file)
}
