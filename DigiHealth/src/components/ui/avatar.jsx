export const Avatar = ({ src, alt }) => (
    <img
        src={src || 'https://via.placeholder.com/40'}
        alt={alt || 'Avatar'}
        className="w-10 h-10 rounded-full object-cover"
    />
);
