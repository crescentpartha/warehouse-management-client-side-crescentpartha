import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLinkTag = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{ 
                    color: match ? "#60a5fa" : "#6b7280",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLinkTag;