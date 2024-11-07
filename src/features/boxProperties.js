import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState=[
    {
        id : nanoid(8),
        active: true,
        inset: false,
        input:[
            {
            inputNumber : 1,
            name: "Border radius",
            value:0,
            type: "range",
            
            minMax:[0,250]
        },
        {
            inputNumber : 2,
            name: "height",
            value /* (valeur de base yaani)*/:250,
            type: "range",
            
            minMax:[0,500]
        },
        {
            inputNumber : 3,
            name: "width",
            value:250,
            type: "range",
            
            minMax:[0,500]
        },
        
        {
            inputNumber : 4,
            name: "Background-color",
            value: "#fff",
            type: "color",
            
            minMax:[-250,250]
        },
        
        
         

        ]
    }
]
export const boxProperties=createSlice(
    {
        name :"boxproperties",
        initialState,
        reducers:{
           
            updateShadowValue: (state, action)=>{
                state.find(el=>el.inputNumber===action.payload.inputNumber).value=action.payload.value
           
            }
       
        }
    }
)
export const {updateShadowValue}=boxProperties.actions
export default boxProperties.reducer