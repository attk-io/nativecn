import { Label, Switch } from "@nativecn/ui";
import { useGlobalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { View } from "react-native";

const SwitchScreen = () => {
  const [checked, setChecked] = useState(false);
  const { setColorScheme } = useColorScheme();
  const { theme } = useGlobalSearchParams();

  useEffect(() => {
    setColorScheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <View className="flex-1 justify-center items-center p-6 gap-12">
      <View className="flex-row items-center gap-2">
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          nativeID="airplane-mode"
        />
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}
        >
          Airplane Mode
        </Label>
      </View>
    </View>
  );
};

export default SwitchScreen;