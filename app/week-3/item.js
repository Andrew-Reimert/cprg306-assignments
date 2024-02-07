export default function Item(props) {
    return (
        <div className="font-bold m-3 p-2 border-4 border-indigo-500 bg-blue-400">
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