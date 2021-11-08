import * as express from "express";
import { getProductDetail, getSearch } from "../app/bff";

export const register = (app: express.Application) => {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Heart beat!");
  });

  app.get("/api/items", (req: express.Request, res: express.Response) => {
    const { query } = req;
    getSearch(query).then(
      (response) => {
        res.send(response);
      },
      (reason) => {
        res.status(500).send(reason.toString());
      }
    );
  });

  app.get("/api/items/:id", (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    getProductDetail(id).then(
      (response: any) => {
        res.send(response);
      },
      (reason: { toString: () => any }) => {
        res.status(500).send(reason.toString());
      }
    );
  });
};
