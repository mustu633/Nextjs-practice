// Example of static metadata object configuration by overriding the title in metadata, this title is prioritize as compared to title in metadata of RootLayout 

export const metadata = {
    title: "Profile | (from pages route group)",
}

function Profile() {
    return (
        <>
            <h3>This is Profile page.</h3>
        </>
    )
}

export default Profile;