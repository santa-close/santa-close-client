const execSync = require('child_process').execSync

const arg = process.argv[2] || 'map'
const cmd = `concurrently \"yarn dev:watch\" \"yarn dev:${arg}\" \"yarn dev:frame\"`
const option = {stdio: [0, 1, 2]}

execSync(cmd, option)
