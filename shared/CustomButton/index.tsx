import {
	Pressable,
	StyleSheet,
	PressableProps,
	Text,
	Animated,
	GestureResponderEvent, ActivityIndicator,
} from 'react-native';
import { Colors, Fonts } from '../tokens';

export default function CustomButton({
	text,
	isLoading,
	...props
}: PressableProps & { text: string; isLoading?: boolean }) {
	const animatedValue = new Animated.Value(100);
	const backgroundColor = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});

	const onPressButtonIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();

		props.onPressIn && props.onPressIn(e);
	};

	const onPressButtonOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();

		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...props} onPressIn={onPressButtonIn} onPressOut={onPressButtonOut}>
			<Animated.View style={{ ...styles.button, backgroundColor: backgroundColor }}>
				{!isLoading && <Text style={styles.text}>{text}</Text>}
				{isLoading && <ActivityIndicator size={'large'} color={Colors.white} />}
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 18,
		color: Colors.white,
		borderRadius: 10,
	},
	text: {
		fontFamily: Fonts.regular,
		color: Colors.white,
		textAlign: 'center',
	},
});
