import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home';
import { Routs } from '../Entities/Routing';
import { Hotels } from './Hotels';
import { MainHeader } from '../Widgets/MainHeader';
import { SafeAreaView, ScrollView } from 'react-native';

const Stack = createNativeStackNavigator()

function Screens(): JSX.Element {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name={Routs.Home} component={HomeScreen}
					options={{
						header: () => <MainHeader />
					}} />
				<Stack.Screen name={Routs.Hotels} component={Hotels} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}


export default Screens;
