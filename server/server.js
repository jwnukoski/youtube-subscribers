const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios')
const youtubeApi = require('./youtube_api.js')

app.use(express.static('build'))

app.get('/channel/:channel_id', (req, res) => {
  const channelId = req.params.channel_id

  axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${youtubeApi.key}`)
    .then(response => {
      res.status(200).send(response.data.items[0].statistics)
      return response.data.items[0].statistics
    })
    .catch(error => {
      console.error(error)
      res.status(400).send('Error with fetching data from the YouTube API')
    })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
