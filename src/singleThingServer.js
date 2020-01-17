import {
  SingleThing,
  WebThingServer,
} from 'webthing'

export default function singleThingServer(thing, port) {
  const server = new WebThingServer(new SingleThing(thing), port)

  process.on('SIGINT', () => {
    server.stop().then(() => process.exit()).catch(() => process.exit())
  })
  
  return server
}

