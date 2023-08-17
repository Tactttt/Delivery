import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Splash_Screen,
  HelloScreen,
  SigninScreen,
  SignupScreen,
  ForgotPasswordScreen,
  RegisterPhoneScreen,
  VerificationScreen,
  HomeScreen,
  FoodScreen,
  RestaurantScreen
} from '../screens';
import { connect } from 'react-redux';
import HomeTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const Navigators = ({ token }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!token ? (
          <>
            <Stack.Screen name="Splash" component={Splash_Screen} />
            <Stack.Screen name="HelloScreen" component={HelloScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen} />
            <Stack.Screen name="Verification" component={VerificationScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomeTabs" component={HomeTabs}/>
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Food" component={FoodScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.generalState.token,
  };
};

export default connect(mapStateToProps)(Navigators);
