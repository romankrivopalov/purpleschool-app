import { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Pressable } from 'react-native';
import { Colors, Fonts } from '../tokens';
import EyeClosedIcon from '../../assets/icons/eye-closed';
import EyeOpenedIcon from '../../assets/icons/eye-opened';

export default function Input({ ...props }: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

	const onTogglePasswordVisible = () => setIsPasswordVisible(!isPasswordVisible);

	return (
		// View for position icon
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={props.isPassword && isPasswordVisible}
				placeholderTextColor={Colors.gray}
				{...props}
			/>
			{props.isPassword && (
				<Pressable style={styles.eyeIcon} onPress={onTogglePasswordVisible}>
					{isPasswordVisible ? <EyeClosedIcon /> : <EyeOpenedIcon />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		paddingHorizontal: 24,
		borderRadius: 10,
		fontSize: 16,
		color: Colors.gray,
		backgroundColor: Colors.violetDark,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingVertical: 17,
		paddingHorizontal: 24,
	},
});
