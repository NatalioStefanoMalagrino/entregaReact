import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div
      style={{ display: "flex", width: "100%", paddingLeft: "2%", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", color: "white" }}>
      <img src="logo1.png" alt="logo" style={{ width: "2%", heigth: "2%" }} />
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li style={{ padding: "15px" }}>
            <a style={{textDecoration: "none", color: "white", fontWeight: "bold"}} href="./index.html">NOSOTROS</a>
        </li>
        <li style={{ padding: "15px" }}>
            <a style={{textDecoration: "none", color: "white", fontWeight: "bold"}} href="./index.html">DELIVERY</a>
        </li>
        <li style={{ padding: "15px" }}>
            <a style={{textDecoration: "none", color: "white", fontWeight: "bold"}} href="./index.html">SUCURSALES</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
