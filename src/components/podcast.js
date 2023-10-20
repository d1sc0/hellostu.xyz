import * as React from 'react'

const Podcast = ({ audio }) => {
  return (
    <>
      <div className="imageFull">
        <audio controls className="audioplayer">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <div className="tags">
          <span className="tag is-light is-rounded">
            Subscribe to <strong>&nbsp;HelloStu&nbsp;</strong> podcast:
          </span>
          <a
            className="tag is-light is-rounded"
            href="https://podcasts.apple.com/us/podcast/hello-stu/id1709876510"
          >
            Apple Podcasts
          </a>
          <a
            className="tag is-light is-rounded"
            href="https://open.spotify.com/show/21LDbQx6BlTudyfoT3oQH5"
          >
            Spotify
          </a>
          <a
            className="tag is-light is-rounded"
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9oZWxsb3N0dS54eXovcG9kY2FzdC54bWw"
          >
            Google Podcasts
          </a>
          <a
            className="tag is-light is-rounded"
            href="https://hellostu.xyz/podcast.xml"
          >
            Podcast Feed
          </a>
        </div>
      </div>
    </>
  )
}

export default Podcast
