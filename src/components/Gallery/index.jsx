import React, {useState} from 'react';
import "./style.scss";
import tumba from '../../images/47070699_2022908804445284_3217445942894141289_n.jpeg';

const images = [
    {
      src: tumba,
      title: "Late winter storms",
      subtitle: "Film photography",
      category: "Personal project / 2009",
    },
    {
      src:
        "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
      title: "Cereus Penuvianus",
      subtitle: "Live the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      src:
        "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
      title: "Calliope",
      subtitle: "Live the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      src:
        "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
      title: "Golden Pothos",
      subtitle: "Living Room",
      category: "Shooting / Adv.Campaing",
    },
  ];

  function GalleryItem ({src, category, subtitle, title, updateActiveImage, index}) {
    return (
      <div className='gallery-item-wrapper'>
        <div/>
        <div className="gallery-item">
          <div className="gallery-item__info">
            <h1 className="gallery-item__info--title">{title}</h1>
            <h2 className="gallery-item__info--subtitle">{subtitle}</h2>
            <p className="gallery-item__info--category">{category}</p>
          </div>
          <div className="gallery-item__image" style={{ backgroundImage: `url(${src})`}}>
          </div>
        </div>
        <div/>
      </div>
    )
  }

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

    return (
        <section className="gallery-section gallery-wrap">
            <div className="gallery">

              <div className="gallery-counter">
                <span>{activeImage}</span>
                <span className='divider'/>
                <span>{images.length}</span>
                </div>
                {images.map((image, index) => {
                  return(
                    <GalleryItem
                    key={image.src}
                    index={index}
                    {...image}
                    updateActiveImage={(index) => setActiveImage(index+1)}
                    />
                  )
                })}
              

            </div>
        </section>
    )
}