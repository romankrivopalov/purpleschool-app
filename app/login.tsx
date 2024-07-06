import { Image, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Input from '../shared/Input';
import CustomLink from '../shared/CustomLink';
import CustomButton from '../shared/CustomButton';
import ErrorNotification from '../shared/ErrorNotification/ErrorNotification';
import { Colors } from '../shared/tokens';

export default function App() {
	const [error, setError] = useState<string | undefined>();

	const alert = () => {
		setError('Неверный логин или пароль');
		setTimeout(() => setError(undefined), 4000);
	};

	return (
		<View style={styles.container}>
			<ErrorNotification message={error} />
			<View style={styles.content}>
				<Image source={require('../assets/logo.png')} style={styles.logo} resizeMode={'contain'} />
				<View style={styles.form}>
					<Input placeholder={'Email'} />
					<Input isPassword={true} placeholder={'Пароль'} />
					<CustomButton text="Войти" onPress={alert} />
				</View>
				<CustomLink href={'/restore'} text={'Восстановить пароль'} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 55,
		backgroundColor: Colors.black,
	},
	content: {
		alignItems: 'center',
		gap: 50,
	},
	form: {
		alignSelf: 'stretch',
		gap: 16,
	},
	logo: {
		width: 162,
	},
});
