import useReactRouter from "use-react-router";

function RouterHook() {
  const { history, location, match } = useReactRouter();
  console.log({ history, location, match });
  return null;
}

export default RouterHook;
