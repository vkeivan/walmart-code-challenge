import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import React, {Component} from 'react';
import {ProductActions} from '../actions/productactions';


@connect(state => ({
    products: state.products
}))
export class ProductCatalog extends Component {
    static propTypes = {
        products: PropTypes.object,
        dispatch: PropTypes.func
    };

    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount() {
        this.props.dispatch(ProductActions.fetch());
    }

    render() {
        return (
            <Row>
                <Col sm={12}>
                   <h2>PRODUCT CATALOG</h2>
                </Col>
            </Row>
        );
    }
}
