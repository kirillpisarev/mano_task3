# Mano React-Native assignment Task 3

## Solution comments

`Button` can be separated alongside with the `Input` as a common reusable component.

`useState` will trigger the re-render of the entire screen. If there were any parts of the screen that don't rely on the input state, I would separate the input and the button to a separate component (e.g. `<NameForm />`). As a result only that part would re-render on every state change.

If we don't even need to react on the user input during typing (we don't need to show a validation errors / intermediate search results etc), we can make the Input "uncontrolled". This way nothing will be re-rendered at all:

```
const Screen: React.FC = ({navigation}) => {
  const nameRef = useRef('');
  return (
    <View style={styles.container}>
      <Input onChangeText={text => (nameRef.current = text)} />
      <Button
        label={'DONE'}
        onPress={() =>
          navigation.navigate('AnotherScreen', {name: nameRef.current})
        }
      />
    </View>
  );
};

```