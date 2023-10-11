import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	Text,
	View,
	Button,
} from 'react-native';
//@ts-ignore
import CartIcon from '../Shared/icons/ic_basket.svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home';
import { Routs } from '../Entities/Routing';
import { Hotels } from './Hotels';

const Stack = createNativeStackNavigator()

function Screens(): JSX.Element {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name={Routs.Home} component={HomeScreen}
					options={{
						header: props => <MainHeader />
					}} />
				<Stack.Screen name={Routs.Hotels} component={Hotels} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
function MainHeader() {
	return (
		<View style={{ paddingHorizontal: 12, paddingTop: 24, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
			<View style={{ borderRadius: 20, width: 40, height: 40, backgroundColor: '#D9D9D9' }}></View>
			<CartIcon width={24} height={24} />
		</View>
	)
}


export default Screens;
