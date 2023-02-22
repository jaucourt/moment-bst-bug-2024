import moment from 'moment'

const m = moment('2023-03-31T23:00:00.000Z')
console.log('should be 2023-03-31T23:00:00.000Z:', m.toISOString())
m.add('P1Y')
console.log('should be 2024-03-31T23:00:00.000Z:', m.toISOString())
m.subtract(1, 'day')
console.log('should be 2024-03-30T23:00:00.000Z:', m.toISOString())
m.endOf('day')
console.log('should be 2023-03-30T23:59:59.999Z:', m.toISOString())
