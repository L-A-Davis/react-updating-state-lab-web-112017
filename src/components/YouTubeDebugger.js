// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{

  constructor () {
    super()
    this.state = {
      errors: [],
        user: null,
        settings:
           { bitrate: 8,
             video: {
               resolution: '1080p'
             }
           }
         }
  }

handleBitrateClick = () => {
  this.setState ({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }


handleResolutionClick = () => {
  this.setState ({
      settings: {
        bitrate: 8,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
         }
      },
   })
  }

  render () {
    return (
     <div>
       <button onClick={this.handleBitrateClick} className="bitrate">Bitrate</button>
       <button onClick={this.handleResolutionClick} className="resolution">Resolution</button>
     </div>
   )
 }

}

export default YouTubeDebugger;
