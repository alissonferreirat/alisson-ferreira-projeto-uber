import IMG from './images'

export const places = [
  { name: 'Infinity House', addr: '30 Ilupeju Byepass, Onipanu 102215...' }
]

export const history = Array.from({ length: 10 }, () => ({
  name: 'No 36 Balarabe Musa Cres',
  addr: 'Victoria Island 106104, Lagos'
}))

export const rides = [
  { id: 'x', img: IMG.uberx, name: 'UberX', seats: 4, time: '10:24', away: 12, price: '9,100.00' },
  { id: 's', img: IMG.share, name: 'UberX Share', time: '10:25 - 10:31', away: 13, price: '8,250.00', save: 'Save up to 30% if shared' },
  { id: 'c', img: IMG.connect, name: 'Connect', time: '10:22', away: 10, price: '5,600.00' }
]

export const trips = [
  { month: 'Feb 2023', price: 'N0', cancelled: true, cat: 'Personal' },
  { month: 'Nov 2022', price: 'N1700', cat: 'Work' },
  { month: 'Nov 2022', price: 'N2600', cat: 'Personal' },
  { month: 'Oct 2022', price: 'N900', cat: 'Work' },
  { month: 'Oct 2022', price: 'N4600', cat: 'Personal' },
  { month: 'Oct 2022', price: 'N0', cancelled: true, cat: 'Work' }
].map(t => ({ ...t, to: 'Oniru Private Beach,...', date: '4 Feb, 17:19' }))
