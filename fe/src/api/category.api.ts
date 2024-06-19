import { httpClient } from "./http";
import { Category } from "../models/caterogy.model";

export const fetchCategory = async () => {
  const response = await httpClient.get<Category[]>("/category");
  return response.data;
};
