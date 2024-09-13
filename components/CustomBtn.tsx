import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component, ElementType, ReactNode } from "react";
import { ButtonProps } from "@/types/type";
type Props = {
  onPress: () => void;
  title: string;
  bgVariant: string;
  textVariant: string;
  IconLeft: ElementType;
  IconRight: ElementType;
  className: string;
};

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-gray-500";
    case "success":
      return "bg-gray-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";

    default:
      return "bg-[#0286ff]";
  }
};
const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";

    default:
      return "text-white";
  }
};

const CustomBtn = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
      {...props}
      onPress={onPress}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
