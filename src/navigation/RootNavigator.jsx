import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="HomeTab" component={HomeNavigator} options={{ headerShown: false }} />
            <Tabs.Screen name="CartTab" component={CartNavigator} options={{ headerShown: false }} />
            <Tabs.Screen name="Info" component={InfoScreen} />
        </Tabs.Navigator>
    );
}