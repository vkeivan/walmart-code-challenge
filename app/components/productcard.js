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
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    { /*
                    <Typography component="p">
                        {shortDescription}
                    </Typography> */ }
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
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
};

export default withStyles(styles)(ProductCard);
