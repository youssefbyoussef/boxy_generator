import { updateCheckbox } from "../../features/shadows"
import { useDispatch } from "react-redux"


export default function Boxcolorpicker(inputData) {
  const dispatch=useDispatch()
  function handleevent(e){
    dispatch(updateCheckbox({
      inputNumber:inputData.inputNumber,
      value: e.target.value
}))

  }


  return (
    <div className=" mt-3">
      <p>{inputData.name}</p>

      <div className="flex mt-2 bg-slate-200 border py-1 px-2 focus:outline-1
       outline-gray-400" >
        <input type="text"
        value={inputData.value}
        onChange={handleevent}
        
        >
        {inputData.value}


        </input>
      <input type="color"
      className="cursor-pointer h-[40px]"
      value={inputData.value}
      onChange={handleevent}
      
      >

      </input >

      </div>
      

    </div>
  )
}