import axios from "axios";
import _ from "lodash";
import { AUTHOR, DESCRIPTION, OVERVIEW, SEARCH } from "../lib/constants";
export function getSearch(query: any) {
  // tslint:disable-next-line:no-console
  const queryString = new URLSearchParams(query).toString();
  // tslint:disable-next-line:no-console
  const url = formatULR(SEARCH, queryString);

  return axios.get(url).then(
    (response) => {
      // tslint:disable-next-line:no-console
      const rawItems = _.get(response, "data.results", []);
      const items = rawItems.map((item: any) => {
        const price = formatPrice(item.price, item.currency_id);
        return {
          id: item.id,
          image: item.thumbnail,
          price,
          quantity: item.available_quantity,
          title: item.title,
        };
      });
      return { author: AUTHOR, items };
    },
    (reason) => {
      return Promise.reject(reason);
    }
  );
}

export async function getProductDetail(id: string) {
  try {
    // tslint:disable-next-line:no-console
    const urlOverview = formatULR(OVERVIEW, id);
    const urlDescription = formatULR(DESCRIPTION, id);
    // tslint:disable-next-line:no-console
    // const url = encodeURI(process.env.ENDPOINT_ITEM + "search?" + queryString);
    const responseOverview = await axios(urlOverview);
    // tslint:disable-next-line:no-console
    console.log(responseOverview);
    const item = _.get(responseOverview, "data", {});
    const freeShipping = _.get(item, "shipping.free_shipping", "");

    const responseDescription = await axios(urlDescription);
    const description = _.get(responseDescription, "data.plain_text", "");
    const price = formatPrice(item.price, item.currency_id);
    // tslint:disable-next-line:no-console
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

interface IOptionObject {
  description: string;
  overview: string;
  search: string;
  [key: string]: string;
}

function formatULR(type: string, key: string): string {
  const option: IOptionObject = {
    description: process.env.ENDPOINT_ITEM + key + "/description",
    overview: process.env.ENDPOINT_ITEM + key,
    search: process.env.ENDPOINT_SEARCH + "search?" + key,
  };
  return encodeURI(option[type]);
}

function formatPrice(units: number, currencyCode: string) {
  const currencyFormat = new Intl.NumberFormat("es-AR", {
    currency: currencyCode,
    style: "currency",
  });
  return currencyFormat.format(Number(units));
}
