import { useSelector, useDispatch } from "react-redux";
import Shadow from "./Shadow";
import { addShadow } from "../../features/shadows";

export default function Shadowlist() {
  const ShadowState = useSelector(state => state.shadows);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <p className="font-bold text-lg">Customize Shadows</p>
        <button
          className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-slate-100"
          onClick={() => dispatch(addShadow())}
        >
          Add a Shadow
        </button>
      </div>
      <ul className="mt-4">
        {ShadowState.map((shadow, index) => (
          <Shadow
            panelNumber={index + 1}
            shadow={shadow}
            key={shadow.id}
          />
        ))}
      </ul>
    </div>
  );
}
