import { View, Text, Pressable, PressableProps } from 'react-native';

interface IProps {
	children: React.ReactNode,
	buttonProps: PressableProps & React.RefAttributes<View>
	variant?: 'none' | 'standart'
}
export const KPButton = ({ children, buttonProps, variant = 'none' }: IProps): JSX.Element => {
	const isChildrenString = typeof children === 'string'

	return (
		<Pressable
			{...buttonProps}
		>
			{isChildrenString
				? <Text>{children}</Text>
				: <>{children}</>
			}
		</Pressable>
	)
}