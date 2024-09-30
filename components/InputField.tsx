import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  labelStyle,
  placeHolder,
  icon,
  iconStyle,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  inputStyle,
  className,
  placeholderTextColor,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-3 w-full">
          <Text className={`text-lg font-JakartaSemiBold ${labelStyle}`}>
            {label}
          </Text>

          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-xl border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              onChangeText={onChangeText}
              className={`rounded-full p-4 font-JakartaSemiBold bg-gray-100 text-[15px] flex-1 text-left ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              placeholder={placeHolder}
              placeholderTextColor={placeholderTextColor ?? "gray"}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;

const styles = StyleSheet.create({});
