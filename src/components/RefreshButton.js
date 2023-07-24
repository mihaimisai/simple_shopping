import React from 'react'

function RefreshButton() {
    const handleRefresh = () => {
        window.location.reload()
    }
    return <button onClick={handleRefresh} className="btn btn-info mt-5">Refresh</button>
}

export default RefreshButton