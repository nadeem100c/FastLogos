import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import Home from '../Home';
import ContactDetails from '../ContactDetails';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ContactDetails') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color}  />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={{headerShown:false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
