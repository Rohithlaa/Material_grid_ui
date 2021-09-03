import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardHeader, CardMedia, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { Mytype } from "./Content";

export default function CoffeCard(Props: Mytype) {
  const { avatarUrl, title, description, imageUrl } = Props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={<b> {title}</b>}
        subheader={title}
      />
      <CardMedia style={{ height: "150px", width: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          {" "}
          BUY NOW
        </Button>
        <Button size="small" variant="contained" color="primary">
          OFFER
        </Button>
      </CardActions>
    </Card>
  );
}
