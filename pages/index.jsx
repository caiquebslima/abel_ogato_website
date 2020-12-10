import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Link from 'next/link'
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
      <section className="first-page">
        <Header />
        <figure className="first-page__image-container">
          <a href="https://youtu.be/MIWz-_jr96M">
            <img src="./ep_cover.png" alt="" />
          </a>
        </figure>
        <article className="first-page__links">
          <div className="text">
            <Link href="sobre">
              <a>
                <span>sobre</span>
              </a>
            </Link>
            <Link href="loja">
              <a>
                <span>loja</span>
              </a>
            </Link>
            <Link href="contato">
              <a>
                <span>contato</span>
              </a>
            </Link>

            <a href="#musicas">
              <span>músicas</span>
            </a>
          </div>
          <div className="social">
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
        </article>
      </section>
      <section className="slider-container" id="musicas">
        <Slider />
      </section>
    </div>
  )
}
