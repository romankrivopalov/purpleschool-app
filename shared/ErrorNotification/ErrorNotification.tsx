import { Text, View, StyleSheet } from 'react-native';
import { ErrorNotificationProps } from './ErrorNotification.props';
import { ReactElement, useEffect, useState } from 'react';
import { Colors, Fonts, Window } from '../tokens';

export default function ErrorNotification({ message }: ErrorNotificationProps): ReactElement {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		if (!message) return;
		setIsShown(true);
		const timerId = setTimeout(() => setIsShown(false), 3000);
		return () => clearTimeout(timerId);
	}, [message]);

	if (!isShown) return <></>;

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{message}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 50,
		padding: 15,
		width: Window.width,
		backgroundColor: Colors.red,
	},
	text: {
		color: Colors.white,
		fontFamily: Fonts.regular,
		fontSize: 16,
		textAlign: 'center',
	},
});
