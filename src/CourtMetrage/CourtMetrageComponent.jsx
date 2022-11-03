import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./todo.css";
import { todoService } from "../../services/todo.Service";

const CourtMetrageComponent = ({courtMetrages}) => {
  
    const renderList = tasks.map((courtMetrage) => {
        const { Acteur, SociétéDeProduction, DateSortie, Genre,Réalisateur, Producteur, Court_Métrage } = courtMetrage;
        return (
            <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"gainsboro",marginLeft:"13px",marginTop:"13px"}} key={_id}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Court métrage name : {Court_Métrage}
        </Typography>
      </CardContent>
    </Card>
        );
    });

    return renderList;
};
export default CourtMetrageComponent;