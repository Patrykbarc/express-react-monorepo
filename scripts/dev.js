import { spawn } from 'child_process'
import waitOn from 'wait-on'

const logger = (message) => {
  console.log('\x1b[36m%s\x1b[0m', message)
}

spawn('pnpm', ['run', 'backend'], {
  stdio: 'inherit',
  shell: true
})

spawn('pnpm', ['run', 'frontend'], {
  stdio: 'inherit',
  shell: true
})

waitOn({ resources: ['http://localhost:5173'] })
  .then(waitOn({ resources: ['http://localhost:3333'] }))
  .then(() => {
    console.log('\n')
    logger('✨ Development environment is ready! ✨')
    logger(' ➜  [Server]: http://localhost:3333')
    logger(' ➜  [Client]: http://localhost:5173')
    console.log('\n')
  })
