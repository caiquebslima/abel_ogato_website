import Link from 'next/link'

export default function ImageContainer({ src, link, title }) {
  return (
    <article className="image-container">
      <Link href={link}>
        <a>
          <div className="image-container__image">
            <img src={src} alt="" />
          </div>
          <div className="image-container__title">{title}</div>
        </a>
      </Link>
    </article>
  )
}
