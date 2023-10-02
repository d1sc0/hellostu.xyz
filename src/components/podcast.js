import * as React from 'react'

const Podcast = ({ audio }) => {
  return (
    <div className="imageFull">
      <audio controls className="audioplayer">
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <small>
        Subscribe in your podcast player:{' '}
        <a href="https://podcasts.apple.com/us/podcast/hello-stu/id1709876510">
          Apple
        </a>{' '}
        |{' '}
        <a href="https://open.spotify.com/show/21LDbQx6BlTudyfoT3oQH5">
          Spotify
        </a>{' '}
        | <a href="#">Google (TBC)</a> |{' '}
        <a href="https://hellostu.xyz/podcast.xml">Other (RSS)</a>
      </small>
    </div>
  )
}

export default Podcast
