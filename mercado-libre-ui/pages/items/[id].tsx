import Layout from "../../components/layout";
import ProductDetail from "../../components/productDetail";
import axios from "axios";
import { ITEM_ENDPOINT } from "../../lib/constants";
const ItemDetail = ({ details, author }) => {
  return (
    <div>
      <Layout home>
        <div className="container">
          <div className="body is-primary">
            <ProductDetail details={details} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ItemDetail;

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/items/MLA913872651",
      // Object variant:
      { params: { id: "MLA913872651" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  console.log(id);
  const res = await axios.get(`${ITEM_ENDPOINT}${id}`);
  const { author, ...details } = res.data;
  return {
    props: { details, author }, // will be passed to the page component as props
  };
}
