export const Checkbox = ({ label, ...props }) => (
    <div className="flex items-center">
        <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            {...props}
        />
        {label && <label className="ml-2 text-sm text-gray-300">{label}</label>}
    </div>
);