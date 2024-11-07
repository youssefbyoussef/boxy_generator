import { useDispatch } from "react-redux"
import { updateCheckbox } from "../../features/shadows"

export default function Boxrange(inputData) {
  const dispatch=useDispatch()

  function handleevent(e){
    dispatch(updateCheckbox( {
      inputNumber : inputData.inputNumber,
      value:e.target.value, /* el valeur el jdida bch tethat fi action.payload.value */

    }))
   

  }

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <p>{inputData.name}</p>

        <div className="flex items-baseline mb-2">
        <input type="number"
      className="w-14 h-8 mr-2 border border-x-gray-200"
      value={inputData.value}
      onChange={handleevent}
      >
        {inputData.value}
      </input>
      <p>px</p>

        </div>
      </div>
   
      <div className="relative z-0 w-full flex items-center">
        <input type="range" 
        className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
        onChange={handleevent}
        value={inputData.value}
        min={inputData.minMax[0]}
        max={inputData.minMax[1]}
        
        
        
        />
        <div className="absolute -z-10top-1/2 left-1/2 -translate-y-1/2 
        -translate-x-1/2 w-0.5 h-10 bg-slate-300 rounded "></div>


      </div>
    </div>
  )
}