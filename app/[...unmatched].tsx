import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts } from '../shared/tokens';
import CustomLink from '../shared/CustomLink';

export default function UnmatchedCustom() {
	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/images/unmatched.png')}
				style={styles.image}
				resizeMode={'contain'}
			/>
			<Text style={styles.text}>
				Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения
			</Text>
			<CustomLink href={'/'} text={'На главный экран'} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 50,
		padding: 30,
	},
	image: {
		width: 204,
		height: 282,
	},
	text: {
		color: Colors.white,
		textAlign: 'center',
		fontFamily: Fonts.regular,
		fontSize: 18,
	},
});
