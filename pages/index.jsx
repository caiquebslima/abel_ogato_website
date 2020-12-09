import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import ImageContainer from '../components/ImageContainer'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <script
          src="https://kit.fontawesome.com/9e6e04fb29.js"
          crossorigin="anonymous"
        ></script>
        <title>Abel, o Gato</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="first-page">
        <Header />
        <div className="first-page__image-container">
          <img src="./ep_cover.png" alt="" />
        </div>
        <div className="first-page__links">
          <a href="https://www.instagram.com/abel_ogato/">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://open.spotify.com/playlist/66GHVc4iarD86yHuhNRZ5N">
            <i className="fab fa-spotify fa-2x"></i>
          </a>
          <a href="https://www.youtube.com/user/cbslima">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a href="https://bandcamp.com/abelogato">
            <i className="fab fa-bandcamp fa-2x"></i>
          </a>
        </div>
        <div className="first-page__text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            recusandae?
          </p>
        </div>
      </div>
      <div className="slider-container">
        <Slider />
      </div>
    </div>
  )
}
