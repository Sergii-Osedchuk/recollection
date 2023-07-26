const Header = (props) => {
    const {number} = props;
    return (
    <>
      <h1>React is my favourite JS library</h1>
      <h2>I have been learning it for {number} years</h2>
    </>
    )
};

export default Header;