import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Pressable  } from 'react-native';
import { Provider as PaperProvider, Appbar, TextInput, Button    } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import NewCard from '../components/newcard';

const NEWS_LIST = [
  {
    key: "ISBN:9780980200447",
    cover_url: "https://covers.openlibrary.org/b/id/5546156-L.jpg",
    details: {
      number_of_pages: 92,
      title: "Slow reading",
      subjects: [
        "Books and reading",
        "Reading"
      ],
      publishers: [
        "Litwin Books"
      ],
      description: "A study of voluntary slow reading from diverse angles",
      authors: [
        {
          key: "/authors/OL6548935A",
          name: "John Miedema"
        }
      ],
      publish_date: "March 2009"
    }
  },
  {
    key: "ISBN:0385472579",
    cover_url: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    details: {
      number_of_pages: 159,
      title: "Zen speaks",
      subjects: [
        "Zen Buddhism -- Caricatures and cartoons"
      ],
      publishers: [
        "Anchor Books"
      ],
      description: "shouts of nothingness",
      authors: [
        {
          key: "/authors/OL223368A",
          name: "Zhizhong Cai"
        }
      ],
      publish_date: "1994"
    }
  },
  {
    key: "ISBN:0201558025",
    cover_url: "https://covers.openlibrary.org/b/id/135182-L.jpg",
    details: {
      number_of_pages: 657,
      title: "Concrete mathematics",
      subjects: [
        "Mathematics",
        "Computer science"
      ],
      publishers: [
        "Addison-Wesley"
      ],
      description: "a foundation for computer science", 
      authors: [
        {
          key: "/authors/OL720958A",
          name: "Ronald L. Graham"
        },
        {
          key: "/authors/YU827398B",
          name: "Ken Thompson"
        }
      ],
      publish_date: "1994"
    }
  }
];


export default function BookList() {

  const navigation = useNavigation();

  return (    
    <PaperProvider>
      <Appbar.Header>
      </Appbar.Header>
      <View style={styles.container}>
        {NEWS_LIST.map((prop) => {
          return (
            <NewCard 
              title={prop.details.title} 
              description={prop.details.description}
              authors={prop.details.authors[0].name} 
              publishers={prop.details.publishers}
              publish_date={prop.details.publish_date}
              cover_url={prop.cover_url}
              subjects={prop.details.subjects[0]}
            />
          );
        })}
        
      </View>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    marginVertical: 20,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
