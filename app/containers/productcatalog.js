import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button, ButtonToolbar, InputGroup, FormGroup, ButtonGroup} from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from 'material-ui/IconButton';
import {ProductActions} from '../actions/productactions';
import ProductCard from '../components/productcard';
import {SearchField} from '../components/searchfield';


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

    onClear = () => {
        this.field.input.value = '';
        this.props.dispatch(ProductActions.fetchAll());
    }

    onSearch = () => {
        const query = this.field.state.query;
        this.props.dispatch(ProductActions.searchByKeyword(query));
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
        const {data, loading, query} = this.props.product;
        return (
            <Fragment>
                <Row>
                    <Col sm={12} className="products-toolbar">
                            <ButtonToolbar>
                                <Col sm={12} className="search-container" style={{display: 'block'}}>
                                    <Col sm={10}>
                                        <FormGroup>
                                            <InputGroup>
                                                <SearchField
                                                    ref={(field) => {
                                                        this.field = field;
                                                    }}
                                                    name="search-link"
                                                    query={query}
                                                    onChange={() => {}}
                                                />
                                                <InputGroup.Addon>
                                                    <ButtonGroup block={true} className={'search-btns'}>

                                                        {query !== null &&
                                                        <Button
                                                            bsStyle="link"
                                                            bsSize="xsmall"
                                                            onClick={this.onClear}
                                                        >
                                                            <i class="material-icons">
                                                                clear
                                                            </i>
                                                        </Button>}

                                                    <Button
                                                        bsStyle="link"
                                                        bsSize="xsmall"
                                                        onClick={this.onSearch}
                                                    >
                                                        <i class="material-icons">
                                                            search
                                                        </i>

                                                    </Button>
                                                    </ButtonGroup>
                                                </InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Col>
                            </ButtonToolbar>
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
