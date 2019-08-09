import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import ReviewsScreen from './screens/ReviewsScreen';

const navigator = createStackNavigator(
  {
    home: HomeScreen,
    reviews:ReviewsScreen
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      title: 'eat IT'
    }
  }
);

export default createAppContainer(navigator);