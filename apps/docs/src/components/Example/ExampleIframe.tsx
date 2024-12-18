"use client";

import { useTheme } from "next-themes";

const ExampleIframe = ({ component }: { component: string }) => {
  const { theme } = useTheme();

  return (
    <iframe
      className="w-full h-[500px] rounded-md border border-muted"
      src={`${process.env.EXAMPLES_APP_URL}/${component}?theme=${theme}`}
      title={`Example of ${component} in ${theme} theme`}
    ></iframe>
  );
};

export default ExampleIframe;
