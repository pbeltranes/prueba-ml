import Layout from "../../components/layout";
import ProductDetail from "../../components/productDetail";
import axios from "axios";
import { ITEM_ENDPOINT } from "../../lib/constants";
const ItemDetail = ({ details }: any) => {
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
    paths: ["/items/MLA913872651", { params: { id: "MLA913872651" } }],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const res = await axios.get(`${ITEM_ENDPOINT}${id}`);
  const { author, ...details } = res.data;
  return {
    props: { details }, // will be passed to the page component as props
  };
}
