export const Select = ({ label, children, ...props }) => (
    <div>
        {label && <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>}
        <select
            className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...props}
        >
            {children}
        </select>
    </div>
);