import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Receitas } from '../../screens/receitas';
import { FavoritosScreen } from '../../screens/favoritos';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Login from '../../screens/login';




const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Receitas"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: '#aaa',
        
      }}
    >

       <Tab.Screen
        name="Receitas"
        component={Receitas}
        options={{
           
             headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-turkey" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="FavoritosScreen"
        component={FavoritosScreen}
        options={{
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star" size={24} color={color} />
          ),
        }}
      />
     
 
    </Tab.Navigator>
  );
}

export default MyTabs;