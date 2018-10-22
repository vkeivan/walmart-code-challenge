import PropTypes from 'prop-types';
import React, {Component, Fragment} from'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import {ProductActions} from "../actions/productactions";


export class SearchField extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        name: PropTypes.string,
        onChange: PropTypes.func,
        onSearch: PropTypes.func,
        onSelect: PropTypes.func,
        value: PropTypes.string,
        title: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ])
    };


    state = {
        caseSensitive: true,
        className: 'filter-field',
        allowNew: false,
        minLength: 1,
        multiple: false,
        options: [],
        name: this.props.name,
        query: this.props.value,
        isLoading: false,
        className: 'filter-field',
        selected: [],
    };

    onChange = (query) => {
        this.setState({query});
    }

    onSearch = () => {
        const {onSearch} = this.props;
        const typeahead = this.typeahead.getInstance();
        const {text} = typeahead.state;
        if (onSearch) {
            onSearch(text);
        }
        typeahead.clear();
    }


    onAsyncSearch = (query) => {
        return this.props.dispatch(ProductActions.searchByKeyword(query))
            .then((options) => {
                console.log(options);
                this.setState({
                    options
                });
                return options;
            });
    }

    renderMenuItem = (item) => {
        return (
            <div className="md-dirty-blue" onClick={() => this.props.onSelect(item)}>
                <bold>{item}</bold>
            </div>
        );
    }


    render() {
        return (
            <Fragment>
                <AsyncTypeahead
                    ref={(typeahead) => {
                        this.typeahead = typeahead;
                    }}
                    {...this.state}
                    minLength={3}
                    onSearch={this.onAsyncSearch}
                    onChange={this.onChange}
                    onEnter={this.onSearch}
                    placeholder="Search for a product by keyword ...."
                    renderMenuItemChildren={this.renderMenuItem}
                />
            </Fragment>
        );
    }
}
