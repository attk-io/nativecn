import { Label, RadioGroup, RadioGroupItem } from "@nativecn/ui";
import * as React from "react";
import { View } from "react-native";

export default function RadioGroupScreen() {
  const [value, setValue] = React.useState("Comfortable");

  function onLabelPress(label: string) {
    return () => {
      setValue(label);
    };
  }
  return (
    <View className="flex-1 justify-center items-center p-6">
      <RadioGroup value={value} onValueChange={setValue} className="gap-3">
        <RadioGroupItemWithLabel
          value="Default"
          onLabelPress={onLabelPress("Default")}
        />
        <RadioGroupItemWithLabel
          value="Comfortable"
          onLabelPress={onLabelPress("Comfortable")}
        />
        <RadioGroupItemWithLabel
          value="Compact"
          onLabelPress={onLabelPress("Compact")}
        />
      </RadioGroup>
    </View>
  );
}

function RadioGroupItemWithLabel({
  value,
  onLabelPress,
}: Readonly<{
  value: string;
  onLabelPress: () => void;
}>) {
  return (
    <View className={"flex-row gap-2 items-center"}>
      <RadioGroupItem aria-labelledby={`label-for-${value}`} value={value} />
      <Label nativeID={`label-for-${value}`} onPress={onLabelPress}>
        {value}
      </Label>
    </View>
  );
}