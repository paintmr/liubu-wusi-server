const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');

app.use(cors())

// 设置静态文件夹路径
const staticFolderPath = path.join(__dirname, 'src/public/img');
app.use(express.static(staticFolderPath))
console.log(staticFolderPath)

const getOfficialList = () => {
  try {
    const dataBuffer = fs.readFileSync('src/public/data/official-list.json')
    const dataString = dataBuffer.toString()
    const data = JSON.parse(dataString)
    // console.log(data)
    return data
  } catch (error) {
    // console.log(chalk.red.inverse(error))
    return []
  }
}
const officialList = getOfficialList()

app.get('/', (req, res) => {
  res.send(officialList)
})

app.listen(process.env.PORT || 80, () => {
  console.log('express server running at localhost 80')
})