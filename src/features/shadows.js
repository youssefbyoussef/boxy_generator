import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";





const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    input: [
      {
        inputNumber: 1,
        name: "horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "vertical offset",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "spread offset",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "color",
        value: "#4f4f4f",
        type: "color",
        minMax: [-250, 250],
      },
    ],
  },
];

export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      const { shadowId, inputNumber } = action.payload;
      const box = state.find((box) => box.id === shadowId);
      if (box) {
        box.input = box.input.filter((input) => input.inputNumber !== inputNumber);
      }
    },
    addShadow: (state, action) => {
      state.push({
        id: nanoid(8),
        active: true,
        inset: false,
        input: [
          {
            inputNumber: 1,
            name: "horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: "vertical offset",
            value: 10,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "spread offset",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "color",
            value: "#4f4f4f",
            type: "color",
            minMax: [-250, 250],
          },
        ],
      });
    },
    updateShadowValue: (state, action) => {
      // Logique pour mettre à jour la valeur d'une ombre
    },
    updateCheckbox: (state, action) => {
      // Logique pour mettre à jour la case à cocher
    },
  },
});

export const { updateCheckbox, updateShadowValue, addShadow, removeShadow } = shadowSlice.actions;
export default shadowSlice.reducer;
