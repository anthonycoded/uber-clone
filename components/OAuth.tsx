import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomBtn from "./CustomBtn";
import { icons } from "@/constants";

type Props = {};

const OAuth = (props: Props) => {
  const handleGoogleSignIn = async () => {};
  return (
    <View className="flex-1 items-center w-full mb-4">
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomBtn
        title="Login with Google"
        className="mt-5 w-full shadow-none"
        onPress={handleGoogleSignIn}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
      />
    </View>
  );
};

export default OAuth;

const styles = StyleSheet.create({});
