import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps, Text } from
	'react-native'

type InputProps = {
} & TextInputProps;

const Input: React.FC<InputProps> = props => {
	return (
		<TextInput
			{...props}
		/>
	);
}

type ButtonProps = {
  label: string;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({label, ...buttonProps}) => {
  return (
    <TouchableOpacity {...buttonProps}>
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

const Screen: React.FC = ({
	navigation,
}) => {
	const [name, setName] = useState('')
	const submitName = () => {
		navigation.navigate('AnotherScreen', { name });
	}
	return (
		<View style={styles.container}>
			<Input
				value={name}
				onChangeText={(text) => setName(text)}
			/>
      <Button label={"DONE"} onPress={() => submitName()} />
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		color: 'red',
	}
});