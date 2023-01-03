import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

export default function MenuCard({image, name, price, description, category}) {

  //limit the description to 15 words max
  const words = description.split(' ');
  const limitedDescription = words.slice(0, 15).join(' ');

  return (
    <Card sx={{ maxWidth: 345, minHeight: 400, bgcolor: "#1A1A1A", color: "#FFFFFF"}}>
      <CardHeader 
        avatar={
            <Avatar variant="rounded" sx={{ bgcolor: "#1A1A1A" }} aria-label="price"
            style={{ borderRight: '1px solid #DDDDDD' }}>
                {`$${price}`}
            </Avatar>
        }

        title={name}
        subheader={"Hidangan " + category}
        subheaderTypographyProps={{ color: "#FFFFFF" }}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="#FFFFFF" >
          {limitedDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}