// Example of nested layout 

function ProductLayout({ children }) {

    return (
        <>
            {children}
            <h4>This is from ProductLayout.</h4>
        </>
    )
}

export default ProductLayout;