export default function Item(props) {
    return (
        <div className="rounded-md w-96 font-bold m-3 p-2 border-4 border-indigo-500 bg-blue-400 hover:bg-purple-800 cursor-pointer"
        onClick={props.onSelect}>
            <h2 className="text-lg text-blue-900">{props.name}</h2>
            <p className="text-s text-blue-800">
                {props.quantity}
            </p>
            <p className="text-xs text-blue-600">
                {props.category}
            </p>
        </div>
    );
}