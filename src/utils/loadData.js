const fs = require('fs')

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

const getOfficialDetail = () => {

}

module.exports = {
  getOfficialList
}