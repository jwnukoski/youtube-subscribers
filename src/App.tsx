import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [channelId, setChannelId] = useState('')
  const [channelSubs, setChannelSubs] = useState(-1)
  const [channelViews, setChannelViews] = useState(-1)
  const [channelVideos, setChannelVideos] = useState(-1)

  function changeChannelId(e: any) {
    const channel: string = e.target.value
    setChannelId(channel)
  }

  function getSubscribers(e: any) {
    if (e !== null) {
      e.preventDefault()
    }
    
    axios.get(`/channel/${channelId}`).then(res => {
      const subs: number = res.data.subscriberCount || -1
      setChannelSubs(subs)
      const views: number = res.data.viewCount || -1
      setChannelViews(views)
      const videos: number = res.data.videoCount || -1
      setChannelVideos(videos)
    }).catch(err => {
      console.error(err)
    })
  }

  function watch() {
    setInterval(() => {
      getSubscribers(null)
    }, 1000)
  }

  function getFormOrSubs() {
    if (channelSubs === -1) {
      return (
        <form onSubmit={getSubscribers}>
          <input type="text" onChange={changeChannelId}/>
          <input type="submit"/>
        </form>
      )
    } else {
      watch()

      return <div className="ytchannel-wrapper">
        <div className="ytchannel-subs">Subscribers: {channelSubs}</div>
        <div className="ytchannel-views">Views: {channelViews}</div>
        <div className="ytchannel-videos">Videos: {channelVideos}</div>
      </div>
    }
  }

  return (
    <div className="App">
      { getFormOrSubs() }
    </div>
  );
}

export default App;
