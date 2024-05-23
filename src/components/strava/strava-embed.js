import * as React from 'react'

const Strava = ({ mapClass, stravaID }) => {
  return (
    <>
      <div
        className="strava-embed-placeholder"
        data-embed-type="activity"
        data-embed-id={stravaID}
        data-style="standard"
      ></div>
      <script src="https://strava-embeds.com/embed.js"></script>
    </>
  )
}

export default Strava
