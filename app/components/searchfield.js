import PropTypes from 'prop-types';
import React, {Component, Fragment} from'react';
import {FormControl} from 'react-bootstrap';

export class SearchField extends Component {
    static propTypes = {
        name: PropTypes.string,
        onChange: PropTypes.func,
        onSearch: PropTypes.func,
        query: PropTypes.string,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.query !== this.state.query) {
            this.setState({query: nextProps.query});
        }
    }


    state = {
        caseSensitive: true,
        className: 'filter-field',
        name: this.props.name,
        query: this.props.query,
    };

    onChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }


    render() {
        return (
            <Fragment>
                <FormControl
                    inputRef={ref => { this.input = ref; }}
                    name={'search-field'}
                    value={this.state.query}
                    placeholder="Search for a product by keyword ...."
                    onChange={this.onChange}

                />
            </Fragment>
        );
    }
}
