// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function ImgMediaCard(props) {
//   return (
//     <Card elevation={0} style={styles.root}>
//       <div style={{position: "relative"}}>
//         <CardMedia
//           component="img"
//           height="100%"
//           width="100%"
//           image= {props.url}
//         />
//         <div style={{display: "flex", flexDirection: "column", padding: 40, alignItems: "flex-start"}}>
//           <Typography variant='h2' style={{top: 20, left: 20, position: "absolute", color: "black"}}> Ask a superhost</Typography>
//         </div>
//       </div>
//     </Card>
//   );
// }

// const styles= {
//     root:{
//         borderRadius: 12,
//         width: "100%",
//         height: "100%",
//     }
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={0} style={styles.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height= "100%"
          image= {props.url}
        />
        <CardContent style={{height: 160, backgroundColor: props.color, color: "white"}}>
          <Typography gutterBottom variant="h4" component="div" style={{fontWeight: 500}}>
            {props.title}
          </Typography>
          <Typography variant="h6" style={{fontWeight: 400}}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const styles= {
    root:{
        borderRadius: 12,
        width: "100%",
        height: "100%",
    }
}