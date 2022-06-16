import * as React from 'react';
import { StyleSheet  } from 'react-native';
import { Card, IconButton, Button  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const NewCard = (props) => {

  const navigation = useNavigation();
  
  const Content= props.description + " written by " + props.authors +" \n publish by " + props.publishers + props.publish_date;

  return (
    <Card style={styles.container}>
      <Card.Title
        title={props.title}
        subtitle={Content}
      />
      <Card.Actions>
        <Button
          onPress={() => 
            navigation.navigate('BookDetails', {
              title: props.title,
              cover_url: props.cover_url,
              subjects: props.subjects,
            })}
        > 
          Détails
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default NewCard;

const styles = StyleSheet.create({
  container:{
    marginVertical: 10,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

