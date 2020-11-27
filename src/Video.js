import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class Video extends Component {
  render() {
    return (
      <div>
        <center>
        <h1>
        Linkin 
        </h1>
        
        <ReactPlayer
          url='https://www.youtube.com/watchttps://www.youtube.com/watch?v=MEW4GczA5PM&list=PLI02DaZwudGyBQJmi0tz-KjtK_dZzRU9-&index=15h?v=rnwlWn603g4'
          className='react-player'

          width='650px'
          height='550px'
        />
        </center>
      </div>
    );
  }
}
