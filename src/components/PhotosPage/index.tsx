// import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WithStyles from "@mui/material/styles/withStyles";
import { Typography } from "@mui/material";

const Container = styled.div`
  

  .text-about {
    line-height: 38,43px;
    padding: 10px;
  }

  /* @media screen and (max-width: 900px) {
    padding-top: 0px;
  } */

`
                       


export default function PhotosPage({ photos }) {
  return (
    <Container id='photos_page'>
      <Typography fontFamily={"century-gothic"}  variant="h3" component="h3"  style={{margin: 10}}>
          Fotos
      </Typography>
      <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={10000}
      centerMode={false}
      infinite={true}
      
      className=""
      autoPlay={true}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      
        {photos.map((photo) => (
          <div key={photo.photo_url}>
                <img src={photo.url}
                key={photo.url}
                style={{height: 400, objectFit: 'cover'}}
                title="Click for the larger version." />
          </div>

        ))}

    </Carousel>
  </Container>
  )
}