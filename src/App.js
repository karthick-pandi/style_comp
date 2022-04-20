import "./styles.css";
import { Button } from "./button";

export default function App() {
  const primary = "primary";
  const defaul = "default";
  const dash = "dash";
  const text = "text";
  const link = "link";

  return (
    <div className="App">
      <Button primary={primary}>Primary Button</Button>
      <Button defaul={defaul}>Default Button</Button>
      <Button dash={dash}>Dahsed Button</Button>
      <Button text={text}>Text Button</Button>
      <Button link={link}>Link Button</Button>
    </div>
  );
}
