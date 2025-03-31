import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function Infobox({info}){
   let coldimg="https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
   let hotimg="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU="
   let rainimg="https://images.unsplash.com/photo-1611511450282-af4421e9e05d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"

   

    return (
        <div className="infobox">
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rainimg : info.temp > 15 ? hotimg : coldimg}
        title="waether icon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{info.humidity > 80 ? <ThunderstormIcon/>  : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <div>Temperature = {info.temp}&deg;C</div>
          <div>humidity = {info.humidity}%</div>
          <div>maxtemp = {info.tempmax}&deg;C</div>
          <div>mintemp = {info.tempmin}&deg;C</div>
          <div>feelslike = {info.feelslike}&deg;C</div>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}