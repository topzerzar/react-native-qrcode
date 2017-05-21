import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  Navigator,
  VibrationIOS,
  Linking,
  Animated,
  Easing,
  View,
  Alert,
} from 'react-native';
import Camera from 'react-native-camera';

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      showCamera: true,
    }
  }

  onBarCodeRead = (e) => {
    this.setState({showCamera: false});
    Alert.alert(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
  };


  render() {
    var cancelButton = null;
    this.barCodeFlag = true;
    if(this.state.showCamera) {
      return (
        <Camera onBarCodeRead={this.onBarCodeRead} style={styles.camera}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
          </View>
          {cancelButton}
        </Camera>
      )
    } else {
      return (
        <View></View>
      );
    }
  }
}

var styles = StyleSheet.create({

  camera: {
    height: 568,
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
    bottom: 10,
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
});
