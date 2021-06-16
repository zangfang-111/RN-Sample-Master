import React from "react";
import IntroScreen from "../screens/intro-screen";
import { View, Text, AsyncStorage } from "react-native";
import { Actions, Router, Scene, Stack } from "react-native-router-flux";

// expose for dev
window.Actions = Actions;

const firstTimeChecker = {
  check: () => AsyncStorage.getItem('isFirstTimeUser').then( i => i === 'TRUE' ),
  finishIntro: () => AsyncStorage.setItem( 'isFirstTimeUser', 'TRUE' ),
}

const getSceneStyle = () => ({
  backgroundColor: "white",
  elevation: 0,
  shadowOpacity: 0,
  borderBottomWidth: 0
});

class NavigationRouter extends React.PureComponent {
  render() {
    return (
      <Router
        // navBar={CustomNavBar}
        // titleStyle={Styles.title}
        getSceneStyle={getSceneStyle}
      >
        <Stack
          // transitionConfig={require("./transitionConfig").default}
          key="root"
        >
          <Scene
            hideNavBar
            hideTabBar
            key="introScreen"
            component={ IntroScreen }
            onFinish={ firstTimeChecker.finishIntro }
            initial={ AsyncStorage.getItem('isFirstTimeUser').then( result => {
              return result === null;
            })} />
        </Stack>
      </Router>
    );
  }
}

export default NavigationRouter;
