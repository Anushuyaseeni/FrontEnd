import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Card, Avatar, Badge} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [notify, setNotify] = useState(true);
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#7FC4DD'} />
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{
              flex: 2,
              paddingHorizontal: 10,
              paddingTop: 8,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Avatar
              size={49}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}>
              <Avatar.Accessory
                size={18}
                style={{backgroundColor: '#7FC4DD'}}
              />
            </Avatar>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Icon name={'bell-outline'} size={29} color={'#7FC4DD'} />
              <Badge
                status="error"
                containerStyle={{position: 'absolute', left: 18, top: 15}}
              />
            </View>
          </View>
          <View style={{flex:1}}>
            <Card
              containerStyle={{
                borderRadius: 8,
                justifyContent: 'center',
                marginTop: 20,
                margin: 10,
                marginBottom:10, elevation:18
              }}>
              <Text
                style={{fontWeight: 'bold', color: '#0B2947', marginTop: -9}}>
                Monthly Savings
              </Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
