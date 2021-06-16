// import React from 'react';
// import { render } from 'react-testing-library';
// import IntroScreen from '../screens/intro-screen';

// it('renders without crashing', () => {
//   const View = document.createElement('View');
//   ReactDOM.render(<App />, View);
// });

import React from 'react';
import { shallow } from 'enzyme';
import IntroScreen from '../screens/intro-screen';

it('renders without crashing', () => {
  shallow(<IntroScreen />);
});