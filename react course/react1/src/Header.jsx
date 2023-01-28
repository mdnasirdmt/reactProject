import "./header.css";
import "./footer.css";
const Header = () => {
    return(

        <h1>Learn React with Nasir</h1>
    );
}

function Footer() {
    return(
        <h1 id="footer">This is footer</h1>
    )
}

const Hello = () => {
    return(

        <h2 className="header">Hello everyone i'm Nasir from Bihar</h2>

    );
}
export {Header,Footer,Hello};
// export default Header;