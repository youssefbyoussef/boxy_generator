import { useState } from "react";

import ShadowRange from "./ShadowRange";
import Shadowcolorpicker from "./Shadowcolopicker"
import { removeShadow } from "../../features/shadows";
import { useDispatch } from "react-redux";

export default function Shadow({ panelNumber, shadow, key}) {
  const [toggleshadow, setToggleShadow] = useState(true);
  
  const dispatch=useDispatch()
  
  

  const shadowInput = boxstate.map((box) => {
    return box.input.map((input, index) => {
      
      if (input.type === "range") {
        return <ShadowRange
        key={index}
        inputData={shadow.input[index]}
        shadowId={shadow.id}
      />
      } else if (input.type === "color") {
        return  <Shadowcolorpicker
        key={index}
        inputData={shadow.input[index]}
        shadowId={shadow.id}
      />
      }
      return null; 
    });
  });
  console.log(shadowInput)

  return (
    <li className="bg-gray-50 border-b border-gray-300">
      <button className="px-6 py-4 flex justify-between items-center hover:bg-gray-100"
      onClick={()=>setToggleShadow(!toggleshadow)}>
  <span>shadow {panelNumber}</span>
  <img 
    className="font-bold w-5"
    style={{
      transform: `${toggleshadow? "rotate(90deg)" : "rotate(0deg)"}`
    }}
    //src={chevron} 
    alt="" 
  />
</button>
{toggleshadow && <>
<div className="flex items-end px-6 py-4">
 /*partie checkbox*/
  <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded" onClick={() => dispatch(removeShadow())}> remove </button>

</div>
<div className="px-6 py-4">
  {shadowInput}
</div>

</>}
    </li>
  )
}