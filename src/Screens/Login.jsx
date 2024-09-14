import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from '../../Assets/Assets';
import OTPTextView from 'react-native-otp-textinput';
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';
export default function Login({navigation}) {
  const [screen, setScreen] = useState(true);
  const [cbutton, setCButton] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [screen, timeLeft]);

  useEffect(() => {
    if (screen) {
      setTimeout(() => {
        setCButton(false);
      }, 30000);
    }
  }, [screen]);

  const handleNumber = () => {
    if (number.length == 10) {
      handleClick();
    }
  };

  const handleContinue = () => {
    console.log(otp);
    navigation.navigate('Home');
  };

  const handleOTP = e => {
    setOtp(e);
  };

  const handleClick = () => {
    setScreen(!screen);
    setCButton(true);
    setTimeLeft(30);
  };

  return (
    <View className="flex-1 bg-white">
      <View className="h-1/4 bg-black">
        <Image
          source={images.petrolpump}
          className="w-full h-full opacity-50"
        />
      </View>

      {screen ? (
        <View className="flex-1 -mt-2 p-5 bg-white rounded-t-xl">
          <Text className="text-2xl font-bold tracking-widest">Login</Text>
          <View className="flex items-center justify-start py-10 space-y-5 w-full">
            <View className="flex-row w-full items-center">
              <TouchableOpacity
                className="flex-row h-full 
              items-center space-x-1 px-2 border border-r-0 rounded-l-lg">
                <Image source={images.flag} className="w-6 h-6" />
                <Text className="font-semibold">+91</Text>
              </TouchableOpacity>

              <TextInput
                onChangeText={e => setNumber(e)}
                value={number}
                placeholder="Phone"
                keyboardType="numeric"
                maxLength={10}
                className="flex-1 bg-white border rounded-r-lg p-3 font-semibold"
              />
            </View>
            <View className="w-full space-y-4">
              <Button text={'Send OTP'} onPress={handleNumber} />

              <Text className="text-center">or</Text>

              <TouchableOpacity className="bg-white border p-2 rounded-xl flex-row justify-center items-center space-x-2">
                <Image source={images.email} className="w-6 h-6" />
                <Text className="font-bold text-lg">Continue with Email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View className="flex-1 -mt-2 p-5 bg-white rounded-t-xl">
          <TouchableOpacity onPress={handleClick} className="mb-2">
            <Text className="text-lg text-lime-500">Back</Text>
          </TouchableOpacity>
          <Text className="text-2xl font-bold">OTP Verification</Text>
          <View className="py-4">
            <Text className="text-md">Check for the OTP</Text>
            <OTPTextView
              inputCount={4}
              caretHidden={true}
              handleTextChange={handleOTP}
              className="border w-12 h-12 text-center mt-5 rounded-lg"
            />
            {cbutton ? (
              <Text className="text-md mt-4 text-center">
                Resend in {timeLeft} seconds
              </Text>
            ) : (
              <Button text={'Resend'} classname={'mt-6'} />
              // <TouchableOpacity className="bg-lime-500 py-3 mt-6 rounded-xl w-full">
              //   <Text className="text-white text-center font-bold">Resend</Text>
              // </TouchableOpacity>
            )}
            <Button
              onPress={handleContinue}
              text={'Continue'}
              classname={'mt-6'}
            />
            {/* <TouchableOpacity
              onPress={handleContinue}
              className="bg-lime-500 py-3 mt-6 rounded-xl w-full">
              <Text className="text-white text-center font-bold">Continue</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
    </View>
  );
}
