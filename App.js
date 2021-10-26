import { StatusBar } from 'expo-status-bar';
import React,
{ useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Button,
  Platform
} from 'react-native';
import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS
} from '../qlhs/constants';
import {
  Avatar,
  DataTable,
  Card
} from 'react-native-paper';
import { ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const OptionItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        margin: 5
      }}
      onPress={onPress}
    >
      <View style={{ width: 60, height: 60 }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 60,
            height: 60,
          }}
        />
      </View>
      <Text style={{
        marginTop: 5,
        color: COLORS.darkgray
      }}>{label}</Text>
    </TouchableOpacity>
  )
}
function Header() {
  return (
    <View style={{ flexDirection: 'row', height: 50, marginTop: 20, }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center'
        }}
      >
        <Image
          source={icons.menu}
          resizeMode={"contain"}
          style={{
            width: 30,
            height: 30
          }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 10, alignItems: 'flex-start', justifyContent: 'center' }}>
        <View>
          <Text style={{ fontSize: 20 }}>
            Mầm non tuổi thần tiên
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center'
        }}
      >
        <Image
          source={icons.nuti}
          resizeMode={"contain"}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>

  )

}
function ButtonOption() {
  return (
    <View style={{ justifyContent: 'center', backgroundColor: COLORS.lightGray4 }}>

      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <OptionItem
          icon={icons.gallery}
          label="Thư viện ảnh"
          onPress={() => { console.log("Thư viện ảnh") }}
        />
        <OptionItem
          icon={icons.book}
          bgColor={['#fddf90', '#fcda13']}
          label="Sổ liên lạc"
          onPress={() => { console.log("Sổ liên lạc") }}
        />
        <OptionItem
          icon={icons.eat}
          bgColor={['#e973ad', '#da5df2']}
          label="Theo dõi ăn uống"
          onPress={() => { console.log("Theo dõi ăn uống") }}
        />

      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <OptionItem
          icon={icons.toilet}
          label="Theo dõi vệ sinh"
          onPress={() => { console.log("Theo dõi vệ sinh") }}
        />
        <OptionItem
          icon={icons.news}
          bgColor={['#fddf90', '#fcda13']}
          label="Tin tức"
          onPress={() => { console.log("Tin tức") }}
        />
        <OptionItem
          icon={icons.money}
          bgColor={['#e973ad', '#da5df2']}
          label="Học phí"
          onPress={() => { console.log("học phí") }}
        />

      </View>
    </View>
  )
}
function ActivityUser() {
  return (
    <View style={{
      flexDirection: 'column',
      margin: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={icons.work}
          resizeMode="contain"
          style={{
            width: 50,
            height: 50
          }}
        />
        <View style={{
          flex: 1,
          marginLeft: 10,
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}>
          <Text style={{ fontSize: 20, }}>
            Hoạt động của bé
          </Text>
        </View>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Thời gian</DataTable.Title>
          <DataTable.Title >Nội dung</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <Text>Không có thông tin</Text>
        </DataTable.Row>
      </DataTable>
    </View>
  )
}
function FoodMenuUser() {
  return (
    <View style={{
      flexDirection: 'column',
      margin: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={icons.food}
          resizeMode="contain"
          style={{
            width: 50,
            height: 50
          }}
        />
        <View style={{
          flex: 1,
          marginLeft: 10,
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}>
          <Text style={{ fontSize: 20, }}>
            Thực đơn của bé
          </Text>
        </View>
      </View>
      <View>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Thời gian</DataTable.Title>
          <DataTable.Title >Nội dung</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <Text>Không có thông tin</Text>
        </DataTable.Row>
      </DataTable>
    </View>
  )
}

export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <SafeAreaView>
      {Header()}
      <Card.Title
        title="NGUYỄN THANH HƯNG"
        subtitle="Lớp : Test hệ thống"
        left={(props) => <Avatar.Image size={55} source={require('./assets/avatar.jpg')} />}
        right={(props) => <Button title="Hôm nay" onPress={showDatepicker} />}
      />
       {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          dateFormat='shortdate'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <ScrollView style={{ backgroundColor: COLORS.lightGray4, marginBottom: 150 }} >
        {ButtonOption()}
        {ActivityUser()}
        {FoodMenuUser()}
      </ScrollView>
    </SafeAreaView>

  );
}

