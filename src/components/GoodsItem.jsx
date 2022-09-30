import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={ {
          height: '100%'
        }}
      >
        <CardMedia 
          component="img"
          height="140"
          image={poster}
          alt={name}
          title={ name }
        />
        <CardContent>
          <Typography
            variant='h6'
            component='h3'
          >
            { name }
          </Typography>
          <Typography>Цена: { price } руб.</Typography>
        </CardContent>
        <Button
          variant='text'
          onClick={() =>
            setOrder({
              id: props.id,
              name: props.name,
              price: props.price,
            })
          }
        >
          Купить
        </Button>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
