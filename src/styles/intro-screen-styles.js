import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP
} from 'react-native-responsive-screen';

const colorPool = {
  blue01: '#3bc5ed',
  grey01: '#cdcdcd',
  black01: '#000'
};

export default StyleSheet.create({
  basketballIcon: {
    position: 'absolute',
    top: heightPercentageToDP( '17%' ),
    left: widthPercentageToDP( '9%' )
  },
  shadowIcon: {
    position: 'absolute',
    top: heightPercentageToDP( '47%' ),
    left: widthPercentageToDP( '9%' )
  },
  nextButton: {
    fontSize: 17,
    lineHeight: 22,
    color: colorPool.blue01,
    fontWeight: '600'
  },
  title: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 42,
    color: colorPool.blue01,
    marginBottom: 10
  },
  instruction: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 30,
    color: colorPool.black01
  },
  carousel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  renderitem: {
    height: heightPercentageToDP( '83%' ),
    width: widthPercentageToDP( '100%' )
  },
  renderimage: {
    width: widthPercentageToDP( '100%' ), 
    height: 400
  }
});
