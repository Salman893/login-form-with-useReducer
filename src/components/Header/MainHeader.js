import Navigation from "./Navigation";

const MainHeader = props => {
    return (
        <div><Navigation onLogout={props.onLogout} isAuthenticated={props.isAuthenticated} /></div>
    )
}

export default MainHeader;