import {Text, View, Image, TouchableOpacity} from 'react-native';
import {MediaItemWithOwner} from '../types/DBtypes';

const MediaListItem = ({item}: {item: MediaItemWithOwner}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('pressed', item.title);
      }}
    >
      <Image style={{height: 300}} source={{uri: item.thumbnail}} />
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default MediaListItem;
