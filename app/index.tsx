import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../shared/tokens';
import { Link } from 'expo-router';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Мои курсы</Text>
			<Link href={'/login'} style={{ color: Colors.link }}>
				<Text>Авторизация</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.black,
	},
});
