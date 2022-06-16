import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable  } from 'react-native';
import { Provider as PaperProvider, Appbar, Badge     } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function BookDetails( route, navigation) {

  console.log("baw1",route);
  console.log("baw2",route.route.params);

  const title = route.route.params.title;
  const cover_url = route.route.params.cover_url;
  const subjects = route.route.params.subjects;

  return (    
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title={title}/>
      </Appbar.Header>
      <View>
        <Image source={{uri: cover_url}} style={styles.Image}/>
        <Badge style={styles.Badge}> {subjects} </Badge>
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
  Image: {
    width: 231,
    height: 301,
    top: 100,
    left: 77,
  },
  Badge: {
    backgroundColor: '#EEEEEE',
    top: 120,
    left: -150,
  },
});
