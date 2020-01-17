import request from 'supertest'

import makeSimpleThing from '../src/simpleThing'
import singleThingServer from '../src/singleThingServer'

const port = 55555

const thingServer = singleThingServer(makeSimpleThing(), port)

describe("server", () => {
  let testServer
  beforeAll(async () => {
    await thingServer.start()
    testServer = request('http://localhost:'+port)
  })
  afterAll(async () => await thingServer.stop())

  describe('/', () => {
    test('It should responde witb a 200 status code', async () => {
        const response = await testServer.get('/')
        expect(response.statusCode).toBe(200)
    })
  })

  describe('/properties', () => {
    test('On should default to true', async () => {
        const response = await testServer.get('/properties')
        expect(response.statusCode).toBe(200)
        expect(response.body.on).toBe(true)
    })

    describe('PUT {"on": false }', () => {
      beforeAll( async () => {
        await testServer.put('/properties/on')
        .send({on: false})
      })
      test('On should be false', async () => {
          const response = await testServer.get('/properties')
          expect(response.statusCode).toBe(200)
          expect(response.body.on).toBe(false)
      })
    })
  })

})
