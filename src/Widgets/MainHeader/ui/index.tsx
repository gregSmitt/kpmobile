//@ts-ignore
import CartIcon from '../../../Shared/icons/ic_basket.svg';
import { View } from 'react-native';
export function Header() {
	return (
		<View style={{ paddingHorizontal: 12, paddingTop: 24, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff' }}>
			<View style={{ borderRadius: 20, width: 40, height: 40, backgroundColor: '#D9D9D9' }}></View>
			<CartIcon width={24} height={24} />
		</View>
	)
}