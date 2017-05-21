import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';


export default class Test extends Component {

    constructor(props) {
        super(props)

        this.state = {
            appendText: 'Hello'
        };
    }

    setValue() {
        this.setState({
            text: ' React Native!'
        })
    }

    render() {
        return (
            <View style={ {marginTop: 60}}>
                <Text onPress={this.setValue.bind(this)}>
                    {this.state.appendText + this.state.text}
                </Text>
            </View>
        );
    }
}