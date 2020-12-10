import React, { useState } from 'react'
import Link from 'next/link'

import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
// import ImageContainer from '../components/ImageContainer'

export default function Slider() {
  const threshold = 30
  const [animating, setAnimating] = useState(false)
  const [{ x }, set] = useSpring(() => ({
    x: [0],
  }))
  const [activeItem, setActiveItem] = useState(0)

  const bind = useDrag(({ movement: [mx, my] }) => {
    if (animating) {
      return
    }

    let moveX = (mx / window.innerWidth) * 100

    if (moveX > 0 && activeItem === 0) {
      return
    }
    if (moveX < 0 && activeItem === 4) {
      return
    }

    if (moveX < -threshold) {
      moveX = -100
      animateNextSlide('left')
    } else if (moveX > threshold) {
      moveX = 100
      animateNextSlide('right')
    }

    moveX = moveX - 100 * activeItem

    set({
      x: [moveX],
    })
  })

  const animateNextSlide = direction => {
    setAnimating(true)
    const value = direction === 'left' ? 1 : -1
    setActiveItem(activeItem + value)
    setTimeout(() => {
      setAnimating(false)
    }, 500)
  }

  return (
    <animated.div className="slider" {...bind()}>
      <animated.div
        className="slider-item"
        style={{
          transform: x.interpolate(value => `translateX(${value}%)`),
        }}
      >
        {' '}
        <Link href="/correndo-atras">
          <a>
            <img src="./correndo_atras_dos_sonhos.jpeg" alt="" />
            <span>Ato I</span>
          </a>
        </Link>
      </animated.div>
      <animated.div
        className="slider-item"
        style={{
          transform: x.interpolate(value => `translateX(${value}%)`),
        }}
      >
        <Link href="/clareira">
          <a>
            <img src="./clareira.jpeg" alt="" />
            <span>Ato II</span>
          </a>
        </Link>
      </animated.div>
      <animated.div
        className="slider-item"
        style={{
          transform: x.interpolate(value => `translateX(${value}%)`),
        }}
      >
        <Link href="/arena">
          <a>
            <img src="./arena.jpeg" alt="" />
            <span>Ato III</span>
          </a>
        </Link>
      </animated.div>
      <animated.div
        className="slider-item"
        style={{
          transform: x.interpolate(value => `translateX(${value}%)`),
        }}
      >
        <Link href="/reminiscencias">
          <a>
            <img src="./reminiscencias.jpeg" alt="" />
            <span>Ato IV</span>
          </a>
        </Link>
      </animated.div>
      <animated.div
        className="slider-item"
        style={{
          transform: x.interpolate(value => `translateX(${value}%)`),
        }}
      >
        <Link href="/pterodactilo">
          <a>
            <img src="./pterodactilo.jpeg" alt="" />
            <span>Ato V</span>
          </a>
        </Link>
      </animated.div>
    </animated.div>
  )
}
