import { IOptionObject } from "../entities/entities";

function formatULR(type: string, key: string): string {
  const option: IOptionObject = {
    description: process.env.ENDPOINT_ITEM + key + "/description",
    overview: process.env.ENDPOINT_ITEM + key,
    search: process.env.ENDPOINT_SEARCH + "search?" + key,
  };
  return encodeURI(option[type]);
}
const formatItems = (rawItems: any) => {
  return rawItems.map((item: any) => {
    const price = formatPrice(item.price, item.currency_id);
    return {
      id: item.id,
      image: item.thumbnail,
      price,
      quantity: item.available_quantity,
      title: item.title,
    };
  });
};

function formatPrice(units: number, currencyCode: string) {
  const currencyFormat = new Intl.NumberFormat("es-AR", {
    currency: currencyCode,
    style: "currency",
  });
  return currencyFormat.format(Number(units));
}

export { formatULR, formatPrice, formatItems };
