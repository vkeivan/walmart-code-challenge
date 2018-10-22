import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'contain',
    },
};

const ProductCard = props => {
    const { classes, shortDescription, name } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.media}
                    height="230"
                    image={props.mediumImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h4" className="product-title">
                        {name}
                    </Typography>
                    <Typography component="p">

                        <img src={props.customerRatingImage} />
                        <span>&nbsp;({props.numReviews})</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="xsmall" color="primary" onClick={() => window.location = props.productUrl}>
                    Detail
                </Button>
            </CardActions>
        </Card>
    );
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    itemId: PropTypes.string,
    name: PropTypes.string,
    categoryPath: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    thumbnailImage: PropTypes.string,
    largeImage: PropTypes.string,
    mediumImage: PropTypes.string,
    numReviews: PropTypes.number,
    customerRatingImage: PropTypes.string,
    productUrl: PropTypes.string,
    productTrackingUrl: PropTypes.string,
};

export default withStyles(styles)(ProductCard);
