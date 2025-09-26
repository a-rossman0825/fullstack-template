// Logger.ts
const dev = Boolean(import.meta.env.DEV)

type ConsoleMethod = 'log' | 'error' | 'warn' | 'trace' | 'groupCollapsed' | 'groupEnd'

function log(type: ConsoleMethod, ...args: unknown[]) {
  const timestamp = new Date().toLocaleTimeString()
  if (dev) {
    console[type](`[${type}] ${timestamp}`, ...args)
  } else {
    // TODO: send logs to external service
    console[type](`[${type}] ${timestamp}`, ...args)
  }
}

// Separate handling for assert
function logAssert(...args: unknown[]) {
  const timestamp = new Date().toLocaleTimeString()
  if (dev) {
    console.assert(true, `[assert] ${timestamp}`, ...args) // first argument must be boolean
  } else {
    // TODO: send logs to external service
    console.assert(true, `[assert] ${timestamp}`, ...args)
  }
}

export const logger = {
  log: (...args: unknown[]) => log('log', ...args),
  error: (...args: unknown[]) => log('error', ...args),
  warn: (...args: unknown[]) => log('warn', ...args),
  trace: (...args: unknown[]) => log('trace', ...args),
  groupCollapsed: (...args: unknown[]) => log('groupCollapsed', ...args),
  groupEnd: (...args: unknown[]) => log('groupEnd', ...args),
  assert: (...args: unknown[]) => logAssert(...args),
}