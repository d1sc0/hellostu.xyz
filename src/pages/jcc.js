import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles.scss'

const JccPage = () => {
  return (
    <Layout>
      <Seo
        description="Jurassic Coast Challenge for Mind"
        title="My Jurassic Coast Challenge for Mind"
      />
      <h1 className="title is-size-4">
        My Jurassic Coast Ultra Challenge 2024
      </h1>
      <div className="content is-medium py-5">
        <StaticImage
          alt="an image of the jurassic coast"
          title="_d1sc0 goes ultra"
          src="../images/page-images/jcc_page_image.jpg"
          className="imageFull"
        />
        <p>
          On 18th May 20024 I'll be attempting to complete a{' '}
          <strong>56km hike (36 miles)</strong> along the Jurassic Coast from
          Corfe Castle to Weymouth. The route includes 1700m of elevation and is
          the first half of the full{' '}
          <a href="https://www.ultrachallenge.com/jurassic-coast-challenge/">
            Jurassic Coast Ultra Challenge
          </a>{' '}
          of 100km. I'm taking part to challenge myself physically and to raise
          funds for the charity <a href="https://www.mind.org.uk/">Mind</a>.
        </p>
        <h3>Why I'm fundraising for Mind</h3>
        <p>
          Over the last couple of years, I have suffered through long periods of
          acute anxiety. I've also spent time caring for a close family member
          who has suffered from severe depression and reached several points of
          crisis. This journey has involved navigating the best and the worst of
          our national health service, hospital stays, and a mix of self-funded
          care and therapy. Dealing with these things has at times been complex
          and the information provided by Mind has been extremely helpful and a
          great source of support.{' '}
        </p>
        <p>
          The work of Mind is important. I'm fundraising to help them in their
          work which involves;
          <ul>
            <li>
              publishing useful, accessible information about mental health
              illness
            </li>
            <li>
              campaigning and lobbying to improve leglislation and services
            </li>
            <li>raising public awareness and understanding of issues</li>
            <li>
              running a network of mental health support services up and down
              the country
            </li>
          </ul>
        </p>
        <p>
          <strong>
            Poor mental health can impact anybody and the work of MIND can
            benefit everybody. Please support me in my challenge and donate to
            MIND using the JustGiving page linked below.{' '}
          </strong>
        </p>
        <p className="has-text-centered">
          <a href="https://www.justgiving.com/page/disco-jurassic-challenge">
            <button class="button is-primary is-medium">
              Donate to Mind using my JustGiving page
            </button>
          </a>
        </p>
        <p>Every donation, however small helps. Thank you!</p>
        <p>Stuart x o x</p>

        {/* <p className="vidcontainer169">
          <iframe
            className="responsive-vid-full"
            src="https://www.youtube.com/embed/eITTnU0WJfQ?si=yZJS4vaSUbMRn5DL"
            title="Video placeholder"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p> */}
        <p></p>
      </div>
    </Layout>
  )
}

export default JccPage
