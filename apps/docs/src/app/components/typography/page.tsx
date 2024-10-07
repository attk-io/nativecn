import { CodeBlock } from "@/components/CodeBlock";
import MainContentLayout from "@/components/MainContentLayout";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Example = dynamic(() => import("@/components/Example"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Typography - nativecn",
  description: "Semantic and styled typography components.",
};

const BREADCRUMBS = [
  {
    name: "Components",
  },
  {
    name: "Typography",
    href: "/components/typography",
  },
];

export default function TypographyPage() {
  return (
    <MainContentLayout
      title="Typography"
      subtitle="Semantic and styled typography components."
      breadcrumbs={BREADCRUMBS}
    >
      <Tabs defaultValue="preview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>

          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Example component="typography" />
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock
            code={`import { H1, H2, H3, Lead, Large, P, BlockQuote } from "@/components/Typography";
import { ScrollView, View } from "react-native";

const TypographyDemo = () => {
  return (
    <ScrollView
      contentContainerClassName="p-6 items-center"
      showsVerticalScrollIndicator={false}
    >
      <View className="max-w-lg">
        <H1>The Rainbow Forest Adventure</H1>
        <View className='p-1.5' />
        <P>
          Once upon a time, in a magical forest, there lived a curious rabbit named Whiskers.
          Whiskers loved exploring and discovering new things every day.
        </P>
        <View className='p-3' />
        <H2>Whiskers' Discovery</H2>
        <P>
          One day, while hopping through the forest, Whiskers stumbled upon{' '}
          <P className='font-medium'>a mysterious rainbow-colored flower</P>. The flower had the
          power to make the forest come alive with vibrant colors and happy creatures.
        </P>
        <BlockQuote>
          "Oh, what a wonderful discovery!" exclaimed Whiskers. "I must share this magic with all my
          forest friends!"
        </BlockQuote>
        <View className='p-4' />
        <H3>The Colorful Transformation</H3>
        <View className='p-0.5' />
        <P>
          Whiskers excitedly gathered all the animals in the forest and showed them the magical
          rainbow flower. The animals were amazed and decided to plant more of these flowers to make
          their home even more magical.
        </P>
        <View className='p-1.5' />
        <P>
          As the rainbow flowers bloomed, the entire forest transformed into a kaleidoscope of
          colors. Birds chirped in harmony, butterflies danced in the air, and even the trees swayed
          to the rhythm of the wind.
        </P>
        <View className='p-3' />
        <H3>The Enchanted Celebration</H3>
        <View className='p-0.5' />
        <P>
          The animals decided to celebrate their enchanted forest with a grand feast. They gathered
          nuts, berries, and fruits from the colorful trees and shared stories of their adventures.
          The joyous laughter echoed through the Rainbow Forest.
        </P>
        <View className='p-1.5' />
        <Lead>
          And so, the Rainbow Forest became a place of wonder and happiness, where Whiskers and all
          the animals lived together in harmony.
        </Lead>
        <View className='p-3' />
        <H3>The Never-ending Magic</H3>
        <View className='p-0.5' />
        <P>
          The magic of the rainbow flowers continued to spread, reaching other parts of the world.
          Soon, forests everywhere became vibrant and alive, thanks to the discovery of Whiskers and
          the enchanted Rainbow Forest.
        </P>
        <View className='p-1.5' />
        <Large>
          The moral of the story is: embrace the magic of discovery, share joy with others, and
          watch as the world transforms into a colorful and beautiful place.
        </Large>
        <View className='p-3' />
      </View>
    </ScrollView>
  );
};

export default TypographyDemo;
`}
            language="tsx"
          />
        </TabsContent>
      </Tabs>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Installation
        </h3>

        <Separator className="my-2" />

        <CodeBlock code="npx nativecn add Typography" language="bash" />
      </section>

      <section>
        <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
          Usage
        </h3>

        <Separator className="my-2" />

        <CodeBlock
          code={`import { H1, H2, H3, Lead, Large, P, BlockQuote } from "@/components/Typography"`}
          language="tsx"
        />
      </section>
    </MainContentLayout>
  );
}
