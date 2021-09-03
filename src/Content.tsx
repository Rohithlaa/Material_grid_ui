import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import CoffeMaker from "./Constants";


export interface Mytype {
  title: string;
  price: string;
  description: string;
  avatarUrl: string;
  imageUrl: string;
}

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj: Mytype) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={4}>
      {CoffeMaker.map((coffeMakerObj: Mytype) =>
        getCoffeMakerCard(coffeMakerObj)
      )}
    </Grid>
  );
};

export default Content;
