import React from "react";
import moment from "moment";

import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Link
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    textAlign: "left"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function NewsItem({ data }) {
  const classes = useStyles();
  return (
    <Grid className={classes.fixedHeight} item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardHeader title={data.title} />
        <CardMedia
          className={classes.media}
          image={data.urlToImage}
          title="Paella dish"
        />
        <CardContent>
          <Typography
            paragraph
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {data.description}
          </Typography>
          <Typography paragraph>
            <Link href={data.url} variant="body2">
              {"Source"}
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(data.publishedAt).format("D/MMM/YYYY - h:mma")}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
