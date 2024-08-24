import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../shared/tokens';
import CustomButton from '../../shared/CustomButton';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../entities/auth/model/auth.state';

export default function MyCourses() {
	const logout = useSetAtom(logoutAtom);

	return (
		<View style={styles.container}>
			<Text>Мои курсы</Text>
			<CustomButton text={'Выйти'} onPress={logout} />
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
