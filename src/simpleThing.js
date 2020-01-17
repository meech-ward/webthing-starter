import {
  Property,
  SingleThing,
  Thing,
  Value,
  WebThingServer,
} from 'webthing'

function makeSimpleThing() {
  const thing = new Thing('urn:dev:ops:my-actuator-1234',
                          'ActuatorExample',
                          ['OnOffSwitch'],
                          'An actuator example that just log')

  thing.addProperty(
    new Property(thing,
                 'on',
                 new Value(true, (update) => console.log(`change: ${update}`)),
                 {
                   '@type': 'OnOffProperty',
                   title: 'On/Off',
                   type: 'boolean',
                   description: 'Whether the output is changed',
                 }))
  return thing
}

export default makeSimpleThing
