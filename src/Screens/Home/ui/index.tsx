import { ScrollView, View, Pressable, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textsStyles } from "../../../Shared/ui/styles/texts";
import { Routs } from "../../../Entities/Routing";

interface IScreenProps {
	navigation: any //!!!!
}

export function Screen({ navigation }: IScreenProps) {

	return (
		<SafeAreaView>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic">
				<View>
					<View style={{ padding: 12, gap: 12 }}>
						<ChangeScreenButton title='Отели' onPress={() => navigation.push(Routs.Hotels)} />
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
