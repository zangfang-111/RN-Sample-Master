
import React, {Component} from 'react';
import { 
  Dimensions, 
  Platform, 
  StyleSheet, 
  View, 
  Image,
  TouchableOpacity, 
  Text, 
  TextInput,
  ActivityIndicator,
  Linking,
  AsyncStorage
} from 'react-native';
import Toast from 'react-native-easy-toast';
import Cookie from 'react-native-cookie';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      loading: false,
      user_data:{},
    };
  }

  render() {
    const animating = this.state.animating;
    return (
      <View style={styles.container}>
        <Loader
          loading={this.state.loading} />
        <View style={styles.logo_img}>
          <Image style={styles.logo_icon} source={require('../images/icons/mail.png')} />
        </View>
        <View style={styles.email_div}>
          <Image style={styles.email_icon} source={require('../images/icons/mail.png')}/>
          <TextInput
            style={styles.email_text}
            placeholder={"username/email"}
            onChangeText={this.handleEmail}
          />
        </View>
        <View style={styles.password_div}>
          <Image style={styles.password_icon} source={require('../images/icons/lock.png')}/>
          <TextInput
            style={styles.password_text}
            secureTextEntry={true}
            placeholder={"password"}
            onChangeText={this.handlePassword}
          />
        </View>
        <TouchableOpacity style={styles.login_btn} activeOpacity = { 0.5 } onPress = { this.click_login }>
          <Text style = { styles.log_in }>LOGIN</Text>
        </TouchableOpacity>
        <View style ={styles.bottom_div}>
          <Text style={styles.bottom_text}>Don't have an account?</Text>
          <TouchableOpacity activeOpacity = { 0.5 } onPress = { this.click_signup }>
            <Text style={styles.sign_up}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style ={styles.social_sites}>
          <TouchableOpacity activeOpacity = { 0.5 } onPress = { () => this.social_click('f') }>
            <Image style={styles.social_icon} source={require('../images/icons/facebook_.png')}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { 0.5 } onPress = { () => this.social_click('t') }>
            <Image style={styles.social_icon} source={require('../images/icons/twitter_.png')}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { 0.5 } onPress = { () => this.social_click('g') }>
            <Image style={styles.social_icon} source={require('../images/icons/google.png')}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity = { 0.5 } onPress = { () => this.social_click('l') }>
            <Image style={styles.social_icon} source={require('../images/icons/linkedin.png')}/>
          </TouchableOpacity>
        </View>  
        
        <Toast ref="toast" position='bottom'  fadeInDuration={700} fadeOutDuration={1000} opacity={0.8}/>
      </View>
    );
  }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    alignItems:'center',
    backgroundColor:'white'
  },
  back_but:{
    position:'absolute',
    top:28,
    left:24,
  },
  logo_img: {
    marginTop: 0.25 * height,
    width:0.4 * width,
    height:0.4 * width,
  },
  logo_icon:{
    width: '100%',
    height: '100%'
  },
  email_div: {
    flexDirection:'row',
    marginTop:-5,
    alignItems:'center',
    height:0.05*height,
    width:0.6*width,
    borderBottomWidth:1,
  },
  email_icon: {
    width: 20,
  },
  password_icon: {
    width: 15,
  },
  email_text: {
    marginLeft:10,
    width:'100%',
    fontSize:14,
    padding:0
  },
  password_text: {
    marginLeft:10,
    width:'100%',
    fontSize:14,
    padding: 0
  },
  password_div: {
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
    height:0.05*height,
    width:0.6*width,
    borderBottomWidth:1,
  },
   login_btn:{
    justifyContent:'center',
    alignItems:'center',
    height:0.06*height,
    width:0.65*width,
    marginTop:15,
    borderRadius:15,
    backgroundColor:'#3f51b5',
  },
  log_in: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white'
  },
  bottom_div: {
    marginTop:10,
    flexDirection:'row',

  },
  bottom_text: {
    textAlign:'center',
  },
  sign_up: {
    marginLeft:5,
    color:'#3f51b5',
  },
  social_sites:{
    width:0.7 * width,
    height:0.06 * height,
    marginTop: 5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
  },
  social_icon:{
    height:'100%',
    aspectRatio: 1,
    marginLeft:10,
    marginRight:10
  },
});