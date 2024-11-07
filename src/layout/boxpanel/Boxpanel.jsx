import { useSelector } from "react-redux";
import Boxrange from "./Boxrange";
import Boxcolorpicker from "./Boxcolorpicker";

export default function Boxpanel() {

  const boxstate = useSelector(state => state.boxProperties);
  const boxInput = boxstate.map((box) => {
    return box.input.map((input) => {
      console.log(input, "hedha el input dyel input");
      if (input.type === "range") {
        return <Boxrange key={input.inputNumber} inputData={input} />;
      } else if (input.type === "color") {
        return <Boxcolorpicker key={input.inputNumber} inputData={input} />;
      }
      return null; 
    });
  });
  return (
    <div className="bg-gray-50 px-6 py-4 border-b">
      <p className="font-bold text-lg my-2">Propriétés de la boîte</p>
     <div>{boxInput}</div>
    </div>
  );
}
