function Header() {
  return (
    <>
      <h4>Hello World</h4>
      <h6>{import.meta.env.VITE_API_URL}</h6>
    </>
  );
}

export default Header;
