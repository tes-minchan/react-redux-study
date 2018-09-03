import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';

import * as actions from '../actions';


class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div >
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

Counter.propTypes = {
    number: PropTypes.number,
};

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);