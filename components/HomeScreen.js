//import liraries
import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {
  BELL,
  BLACK_STRIP,
  CIRCLE,
  DEALS,
  DESIGN,
  FRAME,
  HOME,
  INNER_LOGO,
  LOCATION,
  LOGO,
  MASK_GROUP,
  ONGOING_DEALS,
  RECTANGLE,
  RECTANGLE_BIG,
  RECTANGLE_BOTTOM,
  RECTANGLE_SMALL,
  RENTED_PROPERTY,
  RENT_LOGO,
  R_SCORE_LOGO,
  SCALE_BAR,
  TEXT_MESSAGE,
  TEXT_MESSAGE_2,
} from '../src/images';
import BottomNavigator from '../BottomNavigator';

// create a component
const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
          marginHorizontal: 25,
        }}>
        <Image
          source={LOGO}
          style={{height: 32, width: 97}}
          resizeMode="contain"
        />

        <Image
          source={BELL}
          style={{height: 22, width: 22, borderColor: '#000000'}}
          resizeMode="contain"
        />
      </View>
      <View style={{flexDirection: 'row-reverse', marginHorizontal: 25}}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 10,
            lineHeight: 10,
            marginTop: 5,
          }}>
          SLIDE TO <Text style={{color: 'red'}}>ADD COMMERCIAL</Text>
        </Text>
      </View>
      <View>
        <Image
          source={FRAME}
          style={{
            height: 195,
            width: 410,
            marginTop: 15,
            position: 'absolute',
            zIndex: 0,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontWeight: 500,
            fontSize: 10,
            marginHorizontal: 25,
            paddingHorizontal: 13,
            color: '#E9E9E9',
            paddingTop: 40,
          }}>
          GAURAV SHRIVASTAVA
        </Text>

        <Image
          source={INNER_LOGO}
          style={{
            height: 34,
            width: 29,
            marginLeft: 46,
            marginTop: 45,
            position: 'relative',
            zIndex: 1,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontWeight: 500,
            fontSize: 16,
            marginTop: -26,
            marginLeft: 72,
            color: '#E9E9E9',
            position: 'relative',
            zIndex: 1,
          }}>
          entainance
        </Text>
        <Image
          source={MASK_GROUP}
          style={{
            height: 41,
            width: 52,
            marginLeft: 30,
            marginTop: 35,
            position: 'relative',
            zIndex: 1,
          }}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 10,
              marginTop: -26,
              marginLeft: 90,
              color: '#E9E9E9',
              position: 'relative',
              zIndex: 1,
            }}>
            R SCORE <Text style={{fontWeight: 700, fontSize: 11}}>450</Text>
          </Text>
          <Text
            style={{
              marginHorizontal: 50,
              fontWeight: 500,
              fontSize: 9,
              marginTop: -15,
              color: '#E9E9E9',
              lineHeight: 10,
            }}>
            RESIDENTIAL TENANT
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row-reverse', marginHorizontal: 25}}>
        <Text
          style={{
            fontWeight: 600,
            fontFamily: 'inter',
            color: '#000000',
            fontSize: 10,
            lineHeight: 10,
            marginTop: 26,
          }}>
          COMPLETE YOUR <Text style={{color: 'red'}}>PROFILE</Text>
        </Text>
      </View>
      <Image
        source={R_SCORE_LOGO}
        style={{height: 23, width: 62, marginLeft: 28}}
        resizeMode="contain"
      />
      <Image
        source={RECTANGLE}
        style={{height: 83, width: 400, marginTop: 8, borderRadius: 5}}
        resizeMode="contain"
      />
      <Image
        source={SCALE_BAR}
        style={{height: 45, width: 400, marginTop: -60, marginLeft: 10}}
        resizeMode="contain"
      />
      <View style={{flexDirection: 'row', marginHorizontal: 25}}>
        <Image
          source={RECTANGLE_SMALL}
          style={{
            height: 90,
            width: 150,
            borderRadius: 4,
            marginTop: 35,
            marginRight: 22,
          }}
          resizeMode="contain"
        />

        <Image
          source={RENT_LOGO}
          style={{height: 38, width: 48, marginLeft: -80, marginTop: 60}}
          resizeMode="contain"
        />
        <Image
          source={RECTANGLE_SMALL}
          style={{
            height: 90,
            width: 200,
            borderRadius: 4,
            marginLeft: 22,
            marginTop: 35,
          }}
          resizeMode="contain"
        />

        <Image
          source={HOME}
          style={{height: 23, width: 23, marginLeft: -65, marginTop: 65}}
          resizeMode="contain"
        />

        <Image
          source={DEALS}
          style={{height: 23, width: 23, marginLeft: -43, marginTop: 76}}
          resizeMode="contain"
        />
        <Image
          source={ONGOING_DEALS}
          style={{height: 55, width: 55, marginLeft: -95, marginTop: 50}}
          resizeMode="contain"
        />
        <Image
          source={RENTED_PROPERTY}
          style={{height: 70, width: 70, marginLeft: -240, marginTop: 43}}
          resizeMode="contain"
        />
      </View>
      <Image
        source={RECTANGLE_BIG}
        style={{marginTop: 15, width: '100%'}}
        resizeMode="stretch"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={LOCATION}
          style={{
            marginTop: -191,
            width: 90,
            height: 190,
            marginHorizontal: 16,
          }}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'column', marginTop: -130}}>
          <Text style={{fontSize: 18, fontWeight: 400, color: '#000000'}}>
            DEAL
          </Text>
          <Text style={{fontSize: 19, fontWeight: 700, color: '#212121'}}>
            MANGER
          </Text>
          {/* <Image
            source={LINE}
            style={{height:30,marginTop:-17}}
            resizeMode="contain"
          />  */}
          <Text>JS DFJKA DJKFA</Text>
        </View>
        <Image
          source={DESIGN}
          style={{marginTop: -272, width: 200, height: 400}}
          resizeMode="contain"
        />
      </View>
      <Image
        source={CIRCLE}
        style={{marginTop: -47, width: 15, height: 15, marginLeft: -25}}
        resizeMode="contain"
      />
      <View>
        <Image
          source={BLACK_STRIP}
          style={{marginTop: -140, width: 230, height: 24, marginLeft: 182}}
          resizeMode="contain"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={RECTANGLE_BOTTOM}
          style={{marginTop: -80, marginHorizontal: 25}}
          resizeMode="contain"
        />

        <Image
          source={RECTANGLE_BOTTOM}
          style={{marginTop: -80, marginHorizontal: 25, marginBottom: 50}}
          resizeMode="contain"
        />
      </View>
      <Image
        source={TEXT_MESSAGE}
        style={{marginTop: -80, marginLeft: 245}}
        resizeMode="contain"
      />
      <Image
        source={TEXT_MESSAGE_2}
        style={{marginTop: -30, marginLeft: 45}}
        resizeMode="contain"
      />

      <BottomNavigator />
    </SafeAreaView>
  );
};
export default HomeScreen;
