import * as React from "react";
import './cardComp.css'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ImgMediaCard = ({ imgSrc, Heading, Text, showButton,link }) => {
  return (
    <Card sx={{ maxWidth: 350,minHeight:450 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={imgSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {Heading}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {Text}
        </Typography>
      </CardContent>
      {showButton && (
        <CardActions>
          <Button size="small"><a href={link} target="blank" alt="barko-dev" style={{fontSize:"1.6rem",textDecoration:"none"}}>Demo</a></Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ImgMediaCard;
