import type { restaurantStatusList } from "./contants";

export type RecommendStatus = (typeof restaurantStatusList)[number];

export interface Dish {
  name: string;
  diet?: Diet;
  status?: RecommendStatus;
}

export type Diet =
  | "vegetarian"
  | "vegan"
  | "glutton-free"
  | "pescatarian"
  | "lactose-free"
  | "others";
