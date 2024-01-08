// ¿Como importar un JSON?
// 1era forma: usar FileSystem
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// 2da forma: crear una función similar a require('movies.json')
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require(path)