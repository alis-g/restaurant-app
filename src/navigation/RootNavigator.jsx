import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import { Ionicons } from "@expo/vector-icons";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <Ionicons name="restaurant" color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <Ionicons name="cart" color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarIcon: ({color, size}) => <Ionicons name="information-circle" color={color} size={size} />
                }}
            />
        </Tabs.Navigator>
    );
}