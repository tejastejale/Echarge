import React from 'react';
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import {useState} from 'react';
import {images} from '../Assets/Assets';
import {Dropdown} from 'react-native-element-dropdown';

const Home = () => {
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const [value, setValue] = useState(null);

  return (
    <View className="w-full h-full">
      <View className="h-2/3 w-full flex">
        {/* top with background section  */}
        <View className="w-full h-full bg-black">
          <ImageBackground
            source={images.petrolpump}
            className="w-full h-full flex items-center justify-center opacity-50"
            resizeMode="cover"></ImageBackground>
          <View className="absolute top-0 h-full w-full p-8">
            <View className="flex w-full h-full items-center justify-center gap-y-5">
              <Text className="text-white text-5xl font-bold tracking-widest">
                E-Charge
              </Text>
              <Text className="text-white text-center text-xl">
                Discover the
                <Text className="italic font-semibold underline">
                  best&nbsp;
                </Text>
                and
                <Text className="italic font-semibold underline">
                  affordable
                </Text>
                EV stations near you !
              </Text>
              <Dropdown
                renderLeftIcon={() => (
                  <ImageBackground
                    source={images.pin}
                    className="h-6 w-6 px-4"
                  />
                )}
                data={data}
                maxHeight={300}
                className="w-full m-0 h-10 bg-white rounded-lg p-2"
                labelField="label"
                valueField="value"
                placeholder="Select Location"
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
              />
              <View className="flex flex-row justify-center w-full h-fit bg-white rounded-lg items-center">
                <Image source={images.search} className="w-6 h-6 bg-white" />
                <TextInput
                  placeholder="Let's Find it"
                  className="w-5/6 h-10 bg-white rounded-lg p-2"
                />
              </View>
            </View>
          </View>
        </View>
        <View className="p-4">
          <View className="overflow-auto">
            <View className="border rounded-lg w-40 h-48">
              <View className="h-3/5 w-full bg-black rounded-lg">
                <Image
                  source={images.petrolpump}
                  className="w-full h-full rounded-lg"
                />
              </View>
              <View className="h-2/5 w-full px-2 overflow-scroll flex">
                <Text className="font-semibold text-lg tracking-widest overflow-scroll">
                  Name Name Name Name aName Name Name Name Name Name
                </Text>
                <View className="flex flex-row">
                  <Image source={images.star} className="w-4 h-4" />
                </View>
                <View className="flex flex-row">
                  <Image source={images.star} className="w-4 h-4" />
                </View>
                <View className="flex flex-row">
                  <Image source={images.star} className="w-4 h-4" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
