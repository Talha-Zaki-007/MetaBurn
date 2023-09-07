import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Grid } from '@mui/material'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'

export default () => {
    return (

        <Box
        style={{
          background: 'linear-gradient(to right bottom, #110026 46%, #110026 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 100%',
          backgroundSize: 'cover',
        }}> 
        <Container>
      <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src={pic1} alt="" 
        style={{width: '100%'}}
        /></SwiperSlide>
        <SwiperSlide><img src={pic2} alt="" 
        style={{width: '100%'}}
        
        /></SwiperSlide>
        <SwiperSlide><img src={pic3} alt="" 
        style={{width: '100%'}}
        /></SwiperSlide>
        <SwiperSlide><img src={pic4} alt="" 
        style={{width: '100%'}}
        
        /></SwiperSlide>
      </Swiper>
      </Container>
      </Box>
    );
  };