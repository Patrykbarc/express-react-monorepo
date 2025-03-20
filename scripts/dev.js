import { spawn } from 'child_process'
import waitOn from 'wait-on'

const logger = (message) => {
  console.log('\x1b[36m%s\x1b[0m', message)
}
// Function to check if all services are ready
const checkAllReady = () => {
  console.log('\n')
  logger('✨ Development environment is ready! ✨')
  logger('Server: http://localhost:3333')
  logger('Client: http://localhost:5173')
}

const server = spawn('pnpm', ['run', 'backend'], {
  stdio: 'inherit',
  shell: true
})

const client = spawn('pnpm', ['run', 'frontend'], {
  stdio: 'inherit',
  shell: true
})

// Wait for server to be ready
waitOn({ resources: ['http://localhost:5173'] }).then(() => {
  // console.error('Server running at http://localhost:3333')
  // services.backend = true
  checkAllReady()
})

// setTimeout(() => {
//   const client = spawn('pnpm', ['run', 'frontend'], {
//     stdio: 'inherit',
//     shell: true
//   })

//   process.on('SIGINT', () => {
//     server.kill()
//     client.kill()
//     process.exit()
//   })
// }, 1000)
