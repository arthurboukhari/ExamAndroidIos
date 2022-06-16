import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable  } from 'react-native';
import { Provider as PaperProvider, Appbar, TextInput, Button    } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function WaitingLogin() {

  const navigation = useNavigation();

  const yourFunction = async () => {
    await delay(5000);
    console.log("Waited 5s");
  
    await delay(5000);
    console.log("Waited an additional 5s");
  };


  return (    
    <PaperProvider>
      <Appbar.Header>
      </Appbar.Header>
      <View>
        <Text>Waiting for login</Text>
        <Text>(j'ai pas eu le temps)</Text>
      </View>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#F6F6EF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  navbar: {
    marginTop: 30,
    backgroundColor: '#FF6600',
    fontSize: 15,
  },
  navbartitle: {
    flexDirection: 'row',
    fontSize: 20,
  },
  description: {
    fontSize: 10,
    marginLeft: 15,
  },
  footer_search:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 20,
    width: 200,
    borderWidth: 1,
    marginLeft: 10,
  },
});
