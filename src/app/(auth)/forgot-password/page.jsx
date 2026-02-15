// the parent folder name is wrapped in () like (auth) b/c we donot want auth also treated as route we use it just to group some of our routes /login, /register, /forgot-password 

function ForgotPassword() {
    return (
        <>
            <h2>This is ForgotPassword</h2>
        </>
    )
}

export default ForgotPassword;