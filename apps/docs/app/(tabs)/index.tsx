import {ScrollView, View} from 'react-native';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  H1,
  H2,
  H3,
  Input,
  Label,
  Large,
  Lead,
  P, Progress,
  Separator,
  Skeleton,
  Switch,
  Text,
  Textarea,
  Toggle,
  ToggleIcon
} from '@mono-ui/ui';
import {Bold} from 'lucide-react-native';
import {useState} from 'react';

export default function HomeScreen() {
  const [pressed, setPressed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [progress, setProgress] = useState(13);

  function onPress() {
    setProgress(Math.floor(Math.random() * 100));
  }

  return (
    <ScrollView className="flex flex-col items-center py-6">
      <View className="flex flex-col gap-6 w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Text>Card Content</Text>
          </CardContent>
          <CardFooter>
            <Text>Card Footer</Text>
          </CardFooter>
        </Card>

        <Button size="lg">
          <Text className="p-5">123</Text>
        </Button>

        <Input placeholder="Input" />

        <Textarea placeholder="Textarea" />

        <View className='flex flex-row items-center gap-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <View className='gap-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </View>
        </View>

        <View className='flex flex-row justify-center items-center gap-5'>
          <Badge>
            <Text>Default</Text>
          </Badge>
          <Badge variant={'secondary'}>
            <Text>Secondary</Text>
          </Badge>
          <Badge variant={'destructive'}>
            <Text>Destructive</Text>
          </Badge>
          <Badge variant={'outline'}>
            <Text>Outline</Text>
          </Badge>
        </View>

        <View className='flex-1 justify-center items-center p-6 gap-12'>
          <Toggle
            pressed={pressed}
            onPressedChange={setPressed}
            aria-label='Toggle bold'
            variant='outline'
          >
            <ToggleIcon icon={Bold} size={18} />
          </Toggle>
        </View>

        <View className='flex-row gap-3 items-center'>
          <Checkbox nativeID="label" checked={checked} onCheckedChange={setChecked} />
          <Label
            onPress={() => {
              setChecked((prev) => !prev);
            }}
            nativeID='label'>Checkbox label</Label>
        </View>

        <Label nativeID='label'>This is a label</Label>

        <View className='w-full max-w-xs '>
          <View className='gap-1'>
            <Text>Text</Text>
          </View>
          <Separator className='my-4' />
          <View className='flex flex-row h-5 items-center gap-4 '>
            <Text className='font-normal'>Blog</Text>
            <Separator orientation='vertical' />
            <Text className='font-normal'>Docs</Text>
            <Separator orientation='vertical' />
            <Text className='font-normal'>Source</Text>
          </View>
        </View>

        <View className='max-w-lg'>
          <H1>H1</H1>
          <View className='p-1.5' />
          <P>
            P
          </P>
          <View className='p-3' />
          <H2>H2</H2>
          <P className='font-medium'>P medium</P>
          <View className='p-4' />
          <H3>H3</H3>
          <View className='p-1.5' />
          <Lead>
            Lead
          </Lead>
          <View className='p-1.5' />
          <Large>
            Large
          </Large>
        </View>
      </View>

      <View className='flex-row items-center gap-2 mt-4'>
        <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} nativeID='airplane-mode' />
        <Label
          nativeID='airplane-mode'
          onPress={() => {
            setSwitchChecked((prev) => !prev);
          }}
        >
          Airplane Mode
        </Label>
      </View>

      <View className='w-full gap-8 items-center mt-4'>
        <Progress value={progress} className='web:w-[60%]' />
        <Button variant='ghost' onPress={onPress}>
          <Text>Randomize</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
