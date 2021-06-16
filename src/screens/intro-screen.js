import React, { Component } from 'react';
import {
  View,
  // StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP
} from 'react-native-responsive-screen';
import styles from '../styles/intro-screen-styles';
import RNSnapCarousel, { Pagination } from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import { Actions as NavigationActions } from 'react-native-router-flux';

import Background1 from '../images/screen-images/wisean-1.jpg';
import Background2 from '../images/screen-images/wisean-2.png';
import Background3 from '../images/screen-images/wisean-3.jpg';
import Background4 from '../images/screen-images/wisean-4.jpg';

import { Actions } from "react-native-router-flux";

const { width, height } = Dimensions.get( 'screen' );

const INTRO_DATA = [
  {
    title: 'Intro 1',
    instruction: 'Historically, surnames evolved as a way',
    background: Background1
  },
  {
    title: 'Intro 2',
    instruction: 'to sort people into groups - by occupation',
    background: Background2
  },
  {
    title: 'Intro 3',
    instruction: 'place of origin, clan affiliation, patronage',
    background: Background3
  },
  {
    title: 'Intro 4',
    instruction: 'even physical characteristics (like red hair)',
    background: Background4
  },
];

class IntroScreen extends Component {
  state = {
    activeSlideIndex: 0,
    carouselRef: {}
  };

  onPressNextButton = async () => {
    if( this.state.activeSlideIndex === INTRO_DATA.length - 1 ) {
      await this.props.onFinish && this.props.onFinish()
      Actions.componentCamera()
    } else {
      this._sliderGameRulesRef.snapToNext();
    }
  }

  renderNextButton( thisCarousel ) {
    return (
      <TouchableOpacity
        style={{ marginLeft: 'auto', marginRight: 40 }}
        onPress={ () => this.onPressNextButton( thisCarousel ) }>
        <Text style={ styles.nextButton }>
          {
            this.state.activeSlideIndex === INTRO_DATA.length - 1
              ? 'Finish'
              : 'Next'
          }
        </Text>
      </TouchableOpacity>
    )
  }

  renderItem( data ) {
    return (
      <View
        style={styles.renderitem}>
        <Image source={ data.item.background } style={styles.renderimage} />
        <View
          style={{
            paddingLeft: 40,
            paddingRight: 40
          }}>
          <Text style={ styles.title }>{ data.item.title }</Text>
          <Text style={ styles.instruction }>{ data.item.instruction }</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{ paddingBottom: 25 }}>
        <RNSnapCarousel
          ref={ c => { this._sliderGameRulesRef = c } }
          renderItem={ data => this.renderItem( data ) }
          sliderWidth={ widthPercentageToDP( '100%' ) }
          sliderHeight={ heightPercentageToDP( '100%' ) }
          itemWidth={ widthPercentageToDP( '100%' ) }
          data={ INTRO_DATA }
          onSnapToItem={ index => this.setState({ activeSlideIndex: index }) } />
        <View
          style={styles.carousel}>
          <Pagination
            dotsLength={ INTRO_DATA.length }
            activeDotIndex={ this.state.activeSlideIndex }
            dotColor="#3bc5ed"
            inactiveDotColor="#cdcdcd"
            inactiveDotOpacity={ 0.4 }
            inactiveDotScale={ 1 }
            carouselRef={ this._sliderGameRulesRef }
            tappableDots={ !!this._sliderGameRulesRef }
          />
          { this.renderNextButton() }
        </View>
      </View>
    )
  }
}

export default IntroScreen;