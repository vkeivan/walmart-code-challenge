import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {ProductActions} from '../actions/productactions';




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
        this.props.dispatch(ProductActions.fetch());
    }

    render() {
        console.log('render', this);
        const {data, loading} = this.props.product;
        return (
            <Row>
                <Col sm={12}>
                    
                    {data &&
                   <div className="product-card">
                       <div className="card-box">
                           <img src={data.mediumImage} />
                       </div>
                   </div>}
                    {loading &&
                        <CircularProgress className="progress" size={50} />
                    }
                </Col>
            </Row>
        );
    }
}
