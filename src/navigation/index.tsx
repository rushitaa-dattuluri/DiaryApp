import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/onboarding'
import Welcome from '../screens/onboarding/Welcome'
import SignUp from '../screens/auth/SignUp'
import SignIn from '../screens/auth/SignIn'
import SignUpConfirmed from '../screens/auth/SignUpConfirmed'
import Home from '../screens/diary/Home'
import ViewEntry from '../screens/diary/ViewEntry'
import EditEntry from '../screens/diary/EditEntry'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="onboarding"
                screenOptions={{ headerShown: false }}
            >
                {/* Onboarding screen */}
                <Stack.Screen name="onboarding" component={Onboarding} />
                <Stack.Screen name="welcome" component={Welcome} />
                {/* Authentication screen */}
                <Stack.Screen name="signup" component={SignUp} />
                <Stack.Screen name="signin" component={SignIn} />
                <Stack.Screen
                    name="signupconfirmed"
                    component={SignUpConfirmed}
                />
                {/* Diary Screen */}
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="viewentry" component={ViewEntry} />
                <Stack.Screen name="editentry" component={EditEntry} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
