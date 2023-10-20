import * as React from 'react'

const Podcast = ({ audio }) => {
  return (
    <>
      <div className="imageFull">
        <audio controls className="audioplayer">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
      <div className="tags is-pulled-right mx-5">
        <a
          className="tag is-small is-success"
          href="https://podcasts.apple.com/us/podcast/hello-stu/id1709876510"
        >
          Apple
        </a>
        <a
          className="tag is-small is-success"
          href="https://open.spotify.com/show/21LDbQx6BlTudyfoT3oQH5"
        >
          Spotify
        </a>
        <a
          className="tag is-small is-success"
          href="https://podcasts.google.com/feed/aHR0cHM6Ly9oZWxsb3N0dS54eXovcG9kY2FzdC54bWw"
        >
          Google
        </a>
        <a
          className="tag is-small is-success"
          href="https://hellostu.xyz/podcast.xml"
        >
          Feed
        </a>
      </div>
    </>
  )
}

export default Podcast
