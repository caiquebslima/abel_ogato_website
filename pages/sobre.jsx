import Header from '../components/Header'
import ImageContainer from '../components/ImageContainer'

export default function Sobre() {
  return (
    <div>
      <Header />
      <section className="secondary__container">
        <ImageContainer src={'./banda.jpg'} link={''} title={''} />
        <article className="secondary__text">
          <h2 className="secondary__text--title">Sobre</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            distinctio, praesentium necessitatibus ea delectus et ullam vero
            quod sunt reprehenderit nemo dignissimos ab veniam atque error dicta
            alias magni recusandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex
            molestiae earum tempore, aperiam tenetur sit iste nemo tempora natus
            quis magni maxime sequi deleniti corrupti dolorem dolore error
            obcaecati!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            laboriosam necessitatibus ab fugit enim deserunt porro doloribus aut
            nihil distinctio provident sed explicabo ipsam ea repellat aliquam,
            quibusdam praesentium autem!
          </p>
        </article>
      </section>
    </div>
  )
}
