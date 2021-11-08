import Layout from "../components/layout";
import axios from "axios";
import ProductList from "../components/productList";
import { SEARCH_ENDPOINT } from "../lib/constants";
const Item = ({ products }: any) => {
  return (
    <div>
      <Layout home>
        <div className="body is-primary">
          <ProductList products={products} />
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { search } = context.query;
  const res = await axios.get(`${SEARCH_ENDPOINT}${search}&limit=4`);
  return {
    props: { products: res.data.items },
  };
}

export default Item;
