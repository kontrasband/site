import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton';

function Providers({ children }) {
    return (
        <SkeletonTheme color="#1a2025" highlightColor="#1d2227">
            {children}
        </SkeletonTheme>
    )
}

export default Providers
