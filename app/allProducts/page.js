import ProductList from "../components/ProductList";

export default async function AllProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();

    return <ProductList products={data.products} />;
  } catch (err) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
        <h2>⚠ Failed to load products</h2>
        <p>Please try again later.</p>
      </div>
    );
  }
}
