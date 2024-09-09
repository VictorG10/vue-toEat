<script setup lang="ts">
  import { ref } from "vue";

  const restaurantStatusList = [
    "Want to Try",
    "Recommended",
    "Do Not Recommend",
    "Must Try",
  ] as const;

  type RecommendStatus = (typeof restaurantStatusList)[number];

  interface Restaurant {
    name?: string;
    address?: string;
    status?: RecommendStatus;
    dishes?: Dish[];
  }

  interface Dish {
    name: string;
    diet?: Diet;
    status?: RecommendStatus;
  }

  type Diet =
    | "vegetarian"
    | "vegan"
    | "glutton-free"
    | "pescatarian"
    | "lactose-free"
    | "others";

  const restaurantList = ref<Restaurant[]>([]);
  const newRestaurant = ref<Restaurant>({
    status: "Want to Try",
  });

  const addRestaurant = () => {
    restaurantList.value.push({
      name: newRestaurant.value.name,
      address: newRestaurant.value.address,
      status: newRestaurant.value.status,
      dishes: newRestaurant.value.dishes,
    });
    newRestaurant.value.name = "";
    newRestaurant.value.address = "";
    newRestaurant.value.status;
    newRestaurant.value.dishes;
  };
</script>

<template>
  <main>
    <div>
      <pre>{{ newRestaurant }}</pre>
    </div>
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant-name">Restaurant Name: </label>
        <input type="text" id="restaurant-name" v-model="newRestaurant.name" />
      </div>
      <div>
        <label for="restaurant-address">Restaurant Address: </label>
        <input
          type="text"
          id="restaurant-address"
          v-model="newRestaurant.address"
        />
      </div>
      <div>
        <label for="restaurant-status">Restaurant Status: </label>
        <select
          name="restaurant-status"
          id="restaurant-status"
          v-model="newRestaurant.status"
        >
          <option
            v-for="status in restaurantStatusList"
            :value="status"
            :key="status"
          >
            {{ status }}
          </option>
        </select>
      </div>
      <!-- <div>
        <label for="restaurant-dishes">Restaurant Dishes: </label>
        <input
          type="text"
          id="restaurant-dishes"
          v-model="newRestaurant.dishes"
        />
      </div> -->

      <button type="submit">Add Restaurant</button>
    </form>

    <ul>
      <li v-for="restaurant in restaurantList" :key="restaurant.name">
        {{ restaurant.name }} - {{ restaurant.address }} -
        {{ restaurant.status }} - {{ restaurant.dishes }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
  @media (min-width: 1024px) {
    main {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
