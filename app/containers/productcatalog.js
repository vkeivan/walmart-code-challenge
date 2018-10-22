import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button, ButtonToolbar, InputGroup, FormGroup} from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from 'material-ui/IconButton';
import {ProductActions} from '../actions/productactions';
import ProductCard from '../components/productcard';
import {SearchField} from '../components/searchfield';


const iconStyle = {
    color: '#A9A9A9'
};

const iconStyleActive = {
    color: 'rgb(0, 188, 212)'
};



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
            <Fragment>
                <Row>
                    <Col sm={12} className="products-toolbar">
                        <Col sm={9}>
                            <ButtonToolbar>
                                <Col sm={12} className="no-padding search-container" style={{display: 'block'}}>
                                    <Col sm={10}>
                                        <FormGroup>
                                            <InputGroup>
                                                <SearchField
                                                    name="search-link"
                                                    dispatch={this.props.dispatch}
                                                    onSelect={() => {}}
                                                    onChange={() => {}}
                                                />
                                                <InputGroup.Addon>
                                                    <Button
                                                        bsStyle="link"
                                                        bsSize="xsmall"
                                                        onClick={() => {}}
                                                    >
                                                        <i class="material-icons">
                                                            search
                                                        </i>

                                                    </Button>
                                                </InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>



                                    </Col>
                                    {/*<Col sm={2} style={{display: 'inline-block', position: 'relative'}}>*/}
                                        {/*<IconButton*/}
                                            {/*iconStyle={iconStyle}*/}
                                            {/*iconClassName="material-icons"*/}
                                            {/*onClick={() => {}}*/}
                                        {/*>*/}
                                            {/*search*/}
                                        {/*</IconButton>*/}
                                    {/*</Col>*/}
                                </Col>
                            </ButtonToolbar>
                        </Col>
                        <Col sm={3} />
                    </Col>
                </Row>
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
            </Fragment>

        );
    }
}
