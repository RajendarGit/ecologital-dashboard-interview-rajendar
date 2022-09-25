import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const OfferSummery = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

  return (
    <Box sx={{padding: '1rem'}}>
        <Box sx={{marginBottom: '1rem'}}>
            <Box sx={{display: 'flex'}}>
                <Box>
                    <CardMedia
                        sx={{width: '120px', marginRight: '1rem'}}
                        component="img"
                        height="auto"
                        image="https://picsum.photos/200/200"
                        alt="Random Image"
                    />
                </Box>
                <Box sx={{position: 'relative'}}>
                    <Box>
                        <Typography variant="body1" component="p">Offer Details</Typography>
                        <Typography variant="body2" component="p">Offer Details Offer Details Offer Details</Typography>
                    </Box>
                    <Box sx={{position: 'absolute', bottom: '1rem'}}>
                        <Typography variant="h4" component="p">$ 148</Typography>
                        <Typography variant="body2" component="p" sx={{textTransform: 'uppercase'}}>Offer Price</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box sx={{padding: '2rem'}}>
            <Slider {...settings}>
                <Card>
                  <CardMedia
                    component="img"
                    height="auto"
                    image="https://picsum.photos/200/200"
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="h3" component="p">$ 148</Typography>
                    </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="auto"
                    image="https://picsum.photos/200/200"
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="h3" component="p">$ 148</Typography>
                    </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="auto"
                    image="https://picsum.photos/200/200"
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="h3" component="p">$ 148</Typography>
                    </CardContent>
                </Card>
                <Card>
                  <CardMedia
                    component="img"
                    height="auto"
                    image="https://picsum.photos/200/200"
                    alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="body1" component="p">Some text here</Typography>
                        <Typography variant="h3" component="p">$ 148</Typography>
                    </CardContent>
                </Card>
            </Slider>
        </Box>
    </Box>
  )
}
