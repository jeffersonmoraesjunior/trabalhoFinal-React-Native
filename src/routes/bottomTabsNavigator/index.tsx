import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Receitas } from '../../screens/receitas';
import { Favoritos } from '../../screens/favoritos';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
   return (
      <Tab.Navigator
         initialRouteName="Receitas"
         screenOptions={{
            tabBarLabelStyle: { fontSize: 15 },
            tabBarStyle: { backgroundColor: '#F2C84B', paddingBottom: 2 },
            tabBarActiveTintColor: '#f70606',
            tabBarInactiveTintColor: '#fff',
            
         }}>
         <Tab.Screen
            name="Receitas"
            component={Receitas}
            options={{
               headerShown: false,
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="food-turkey" size={30} color={color} />
               )
            }}
         />

         <Tab.Screen
            name="Favoritos"
            component={Favoritos}
            options={{
               headerShown: false,
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="star" size={30} color={color} />
               )
            }}
         />
      </Tab.Navigator>
   );
}

export default MyTabs;
