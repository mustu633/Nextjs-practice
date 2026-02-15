// Example handling page not found error by replacing the default not found page with our own one 

function NotFound() {
    return (
        <>
            <h2>Page Not Found!</h2>
            <p>Sorry! Could not find reqested resources.</p>
        </>
    )
}

export default NotFound;