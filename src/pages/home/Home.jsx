import React, { Component } from 'react';
import Colors from '../../components/colors/Colors';

class Home extends Component {
    render() {
        return (
            <Colors {...this.props} />
        );
    }
}

export default Home;