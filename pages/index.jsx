import Projects from "../components/Projects";
import Context from "../components/Context";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Context />
      <Spacer y={2} />
      <Projects />
    </>
  );
}
