import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="products">Books</Link>
      <Link to="create-product">Create Book</Link>
    </nav>
  );
}
