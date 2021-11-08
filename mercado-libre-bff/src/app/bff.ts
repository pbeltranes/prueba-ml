import axios from "axios";
import _ from "lodash";
import { formatItems, formatPrice, formatULR } from "../helpers/helpers";
import { AUTHOR, DESCRIPTION, OVERVIEW, SEARCH } from "../lib/constants";

export function getSearch(query: any) {
  const queryString = new URLSearchParams(query).toString();
  const url = formatULR(SEARCH, queryString);
  return axios.get(url).then(
    (response) => {
      const rawItems = _.get(response, "data.results", []);
      const items = formatItems(rawItems);
      return { author: AUTHOR, items };
    },
    (reason) => {
      return Promise.reject(reason);
    }
  );
}

export async function getProductDetail(id: string) {
  try {
    const urlOverview = formatULR(OVERVIEW, id);
    const urlDescription = formatULR(DESCRIPTION, id);
    const promiseOverviewData = axios(urlOverview);
    const promiseDescriptionData = axios(urlDescription);
    const [responseOverview, responseDescription] = await Promise.all([
      promiseOverviewData,
      promiseDescriptionData,
    ]);
    const item = _.get(responseOverview, "data", {});
    const freeShipping = _.get(item, "shipping.free_shipping", "");
    const description = _.get(responseDescription, "data.plain_text", "");
    const price = formatPrice(item.price, item.currency_id);

    return Promise.resolve({
      author: AUTHOR,
      condition: item.condition,
      description,
      freeShipping,
      picture: item.thumbnail,
      price,
      soldQuantity: item.sold_quantity,
      title: item.title,
    });
  } catch (err) {
    return Promise.reject(err);
  }
}
