import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ProductActions} from '../actions/productactions';
import ProductCard from '../components/productcard';




@connect(state => ({
    product: state.product
}))
export class ProductCatalog extends Component {
    static propTypes = {
        product: PropTypes.object,
        dispatch: PropTypes.func
    };

    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount() {
        this.props.dispatch(ProductActions.fetchAll());
    }

    renderProducts(data) {
        return data.map(product => {
                return (
                    <div className="product-card">
                        <div className="card-box">
                            <ProductCard {...product} />
                        </div>
                    </div>
                );
            });
    }


    render() {
        console.log('render', this);
        const {data, loading} = this.props.product;
        return (
            <Row>
                <Col sm={12}>
                    <div className="grid-container">
                    {data && this.renderProducts(data)}
                    {loading &&
                        <CircularProgress className="progress" size={50} />
                    }
                    </div>
                </Col>
            </Row>
        );
    }
}
