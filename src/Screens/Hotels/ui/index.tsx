
import { View, Button, Text } from 'react-native';
interface ISecondScreenProps {
	navigation: any //!!!!!
	route: any //!!!!
}
export function Screen({ navigation, route }: ISecondScreenProps): JSX.Element {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Some..."
			/>
		</View>
	);
}