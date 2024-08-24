import { Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Input from '../shared/Input';
import CustomLink from '../shared/CustomLink';
import CustomButton from '../shared/CustomButton';
import ErrorNotification from '../shared/ErrorNotification/ErrorNotification';
import { Colors } from '../shared/tokens';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function App() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);

	const onSubmit = () => {
		if (!email) {
			setLocalError('Не введён email');
			return;
		}

		if (!password) {
			setLocalError('Не введён пароль');
			return;
		}

		login({ email, password });
	};

	useEffect(() => {
		if (error) setLocalError(error);
	}, [error]);

	useEffect(() => {
		if (accessToken) router.replace('/(app)'); // the same with '/'
	}, [accessToken]);

	return (
		<View style={styles.container}>
			<ErrorNotification message={localError} />
			<View style={styles.content}>
				<Image source={require('../assets/logo.png')} style={styles.logo} resizeMode={'contain'} />
				<View style={styles.form}>
					<Input placeholder={'Email'} onChangeText={setEmail} />
					<Input isPassword={true} placeholder={'Пароль'} onChangeText={setPassword} />
					<CustomButton text="Войти" isLoading={isLoading} onPress={onSubmit} />
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
