const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const loadData = require('./src/utils/loadData')

// 處理跨域問題
app.use(cors())

// 设置静态文件夹路径
const staticFolderPath = path.join(__dirname, 'src/public/img');
app.use(express.static(staticFolderPath))

const officialList = loadData.getOfficialList()

app.get('/officialList', (req, res) => {
  res.send(officialList)
})

app.listen(process.env.PORT || 80, () => {
  console.log('express server running at localhost 80')
})