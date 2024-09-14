import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
function Button({onPress, text, classname}) {
  return (
    <View className="w-full h-fit">
      <TouchableOpacity
        onPress={onPress}
        className={`bg-lime-500 py-3 rounded-xl w-full ${classname}`}>
        <Text className="text-white text-center font-bold">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
