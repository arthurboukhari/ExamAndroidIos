import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable  } from 'react-native';
import { Provider as PaperProvider, Appbar, TextInput, Button    } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




export default function Login() {

  const navigation = useNavigation();

  return (    
    <PaperProvider>
      <Appbar.Header>
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Username"
        />
        <TextInput
          mode="outlined"
          label="Password"
        />
        <View style={styles.Button}>
          <Button mode="Text" >
            Reset
          </Button>
          <Button icon="key" mode="contained" onPress={() =>  navigation.navigate('WaitingLogin')}>
            Login
          </Button>
        </View>
        
      </View>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

  Button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container:{
    marginHorizontal: 20,
  }
});
