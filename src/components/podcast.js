import * as React from 'react'

const Podcast = ({ audio }) => {
  return (
    <div className="imageFull">
      <audio controls className="audioplayer">
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

export default Podcast
