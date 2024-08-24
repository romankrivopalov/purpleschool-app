import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CoursePage() {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Text>{id}</Text>
		</View>
	);
}
