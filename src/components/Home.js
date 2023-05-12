import React, {useState, useRef} from 'react';
import {View, Text, StatusBar, Animated, TouchableOpacity} from 'react-native';
import {Card, Avatar, Badge} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {appColors} from '../theme/appColors';

const Home = () => {
  const [notify, setNotify] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.loop(
      // runs the animation array in sequence
      Animated.sequence([
        // shift element to the left by 2 units
        Animated.timing(fadeAnim, {
          toValue: -2,
          duration: 50,
          useNativeDriver: true,
        }),
        // shift element to the right by 2 units
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 50,
          useNativeDriver: true,
        }),
        // bring the element back to its original position
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]),
      // loops the above animation config 2 times
      {iterations: 3},
    ).start();
  };
  //State variable for switch from expenses to Income or vice-versa
  const [selectedType, setSelectedType] = useState('expenses');

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.primary}
      />
      <ScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
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

          <View
            style={{
              marginVertical: 20,
              borderRadius: 100,
              height: 35,
              width: 240,
              marginLeft: 80,
              borderColor: appColors.borderColor,
              borderWidth: 1,
              // elevation:18,
              backgroundColor: appColors.toggleLightPrimary,
              flexDirection: 'row', justifyContent:'space-around'
            }}>
              <TouchableOpacity
                onPress={() => setSelectedType('expenses')}
                style={{
                  backgroundColor: appColors.primary,
                  borderColor: appColors.primary,
                  width: 125,
                  height: 35,
                  borderRadius: 100, marginLeft:-18
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: appColors.secondary,
                    textAlign: 'center',
                    justifyContent: 'center',
                    margin: 6,
                  }}>
                  Expenses
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{backgroundColor: appColors.toggleLightPrimary}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: appColors.secondary,
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginTop:6, marginRight:15
                  }}>
                  Income
                </Text>
              </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => setSelectedType('Income')}
              style={{
                backgroundColor: appColors.primary,
                borderColor: appColors.primary,
                width: 125,
                height: 35, borderRadius: 100,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: appColors.secondary,
                  textAlign: 'center',
                  justifyContent: 'center',
                  margin: 6,
                }}>
                Expenses
              </Text>
            </TouchableOpacity> */}
          </View>

          {/* <View style={{flex: 1}}> */}
          <Card
            containerStyle={{
              borderRadius: 8,
              justifyContent: 'center',
              marginTop: 20,
              margin: 10,
              marginBottom: 10,
              elevation: 18, // For android only
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: appColors.secondary,
                marginTop: -9,
              }}>
              Monthly Savings
            </Text>
          </Card>
          {/* </View> */}

          <View>
            <Card
              containerStyle={{
                borderRadius: 8,
                justifyContent: 'center',
                margin: 15,
                elevation: 18,
              }}></Card>
          </View>

          {/* <Animated.View style={{transform: [{translateX: fadeAnim}]}}>
            <Icon
              name="home"
              size={25}
              style={{
                borderRadius: 90,
                height: 60,
                width: 60,
                backgroundColor: '#7FC4DD',
                textAlign: 'center',
                marginBottom: 50,
                paddingTop: 16,
                shadowColor: 'black',
                borderWidth: 8,
                borderColor: '#ffffff',
                position: 'relative',
              }}
              onPress={fadeIn}
            />
          </Animated.View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
