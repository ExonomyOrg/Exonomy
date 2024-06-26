<template>
  <div>
    <h1>Socket Supply with Nuxt.js</h1>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$socket.emit('message', { text: 'Hello, Socket!' })
    }
  },
  mounted() {
    this.$socket.on('message', (data) => {
      console.log('Received message:', data)
    })
  }
}
</script>
