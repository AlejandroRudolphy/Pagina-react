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
          url='https://www.youtube.com/watch?v=zsCD5XCu6CM'
          className='react-player'

          width='650px'
          height='500px'
        />
        </center>
      </div>
    );
  }
}
