  const chokidar = require('chokidar')

  const log = console.log.bind(console);
  
  chokidar.watch('.')
    .on('ready', () => log('Initial scan complete, ready for change'))
    .on('all', (event, path) => {
      console.log(event, path)
    })