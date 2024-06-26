import Socket from '@socketsupply/socket'

export default ({ app }, inject) => {
  const socket = new Socket({
    url: 'http://localhost:3000',
    options: {} 
  })

  inject('socket', socket)
}
