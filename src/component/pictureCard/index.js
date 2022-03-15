import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./styles.css"

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={0} id="card_root">
      <CardActionArea className='card_content'>
        <CardMedia
          component="img"
          height= "50%"
          image= {props.url}
        />
        <CardContent style={{height: "50%", backgroundColor: props.color, color: "white"}}>
          <Typography gutterBottom component="div" style={{fontWeight: 500, fontSize: 27, margin: 0, paddingBottom: 8}}>
            {props.title}
          </Typography>
          <Typography style={{fontWeight: 400, fontSize: 15}}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}