
import Slider from "react-slick";
import Styles from './testimonials.module.scss'
const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <div className={Styles.testimonials__page}>
        <div className={Styles.testimonials__title}>
            <h1>Testimonials</h1>
            <p>Empowering people in new a digital journey with my super services</p>
        </div>
   =
        <div className={Styles.testimonials}>
      <Slider {...settings}>
        <div className={Styles.slider}>
          <h3>1</h3>
        </div>
        <div className={Styles.slider}>
          <h3>2</h3>
        </div>
        <div className={Styles.slider}>
          <h3>3</h3>
        </div>
        <div className={Styles.slider}>
          <h3>4</h3>
        </div>
        <div className={Styles.slider}>
          <h3>5</h3>
        </div>
        <div className={Styles.slider}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>

    </div>
  )
}

export default Testimonials