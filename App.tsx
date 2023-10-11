/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Button,
	Pressable
} from 'react-native';
//@ts-ignore
import CartIcon from './src/Shared/icons/ic_basket.svg';
import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { textsStyles } from './src/Shared/ui/styles/texts';

type SectionProps = PropsWithChildren<{
	title: string;
}>;
const Stack = createNativeStackNavigator()

// function Section({ children, title }: SectionProps): JSX.Element {
// 	const isDarkMode = useColorScheme() === 'dark';
// 	return (
// 		<View style={styles.sectionContainer}>
// 			<Text
// 				style={[
// 					styles.sectionTitle,
// 					{
// 						color: isDarkMode ? Colors.white : Colors.black,
// 					},
// 				]}>
// 				{title}
// 			</Text>
// 			<Text
// 				style={[
// 					styles.sectionDescription,
// 					{
// 						color: isDarkMode ? Colors.light : Colors.dark,
// 					},
// 				]}>
// 				{children}
// 			</Text>
// 		</View>
// 	);
// }

function App(): JSX.Element {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name="Home" component={HomeScreen}
					options={{
						header: props => <MainHeader />
					}} />
				<Stack.Screen name="Some" component={SecondScreen} />
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

function HomeScreen() {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: '#000',
	};
	return (
		<SafeAreaView style={backgroundStyle}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}>
				<View
					style={{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}>
					<View style={{ padding: 12, gap: 12 }}>
						<ChangeScreenButton title='Отели' />
						<View style={{ gap: 12, flexDirection: 'row', width: '100%' }}>
							<View style={{ flex: 1 }}>
								<ChangeScreenButton title='Ски-пассы. Прогулочные билеты' />
							</View>
							<View style={{ flex: 1 }}>
								<ChangeScreenButton title='Подъемники' />
							</View>
						</View>
						<View style={{ gap: 12, flexDirection: 'row' }}>
							<View style={{ flex: 1 }}>
								<ChangeScreenButton title='Карта курорта' />
							</View>
							<View style={{ flex: 1 }}>
								<ChangeScreenButton title='Камеры' />
							</View>
						</View>
						<ChangeScreenButton title='Погода' />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
interface IChangeScreenButtonProps {
	title: string,
	onPress?: () => void
}
function ChangeScreenButton({ title, onPress }: IChangeScreenButtonProps) {
	return (
		<Pressable
			style={styles.changeScreenButton}
			onPress={onPress}
		>
			<Text style={textsStyles.tiny}>
				{title}
			</Text>
		</Pressable>
	)
}
interface ISecondScreenProps {
	navigation: any //!!!!!
	route: any //!!!!
}
function SecondScreen({ navigation, route }: ISecondScreenProps): JSX.Element {
	const { itemId }: { itemId?: number } = route.params
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Text>id: {itemId}</Text>
			<Button
				title="Go to Some..."
				onPress={() =>
					navigation.push('Some', {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	changeScreenButton: {
		backgroundColor: '#DCDCDC',
		height: 120,
		borderRadius: 16,
		padding: 12,
		justifyContent: 'flex-end',
		flexGrow: 1
	}
})

export default App;
