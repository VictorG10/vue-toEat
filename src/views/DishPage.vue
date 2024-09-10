<script setup lang="ts">
  import { ref } from "vue";
  import type { Dish } from "@/type";
  import { restaurantStatusList } from "@/contants";

  const dishList = ref<Dish[]>([]);
  const newDish = ref<Dish>({ status: "Want to Try" });

  const addDishes = () => {
    dishList.value.push({
      name: newDish.value.name,
      status: newDish.value.status,
    });
    newDish.value.name = "";
    newDish.value.status;
  };
</script>

<template>
  <main>
    <div>
      <pre>{{ newDish }}</pre>
    </div>
    <form @submit.prevent="addDishes">
      <div>
        <label for="dish-name">Dish Name: </label>
        <input type="text" id="dish-name" v-model="newDish.name" />
      </div>
      <div>
        <label for="dish-status">Restaurant Status: </label>
        <select name="dish-status" id="dish-status" v-model="newDish.status">
          <option
            v-for="status in restaurantStatusList"
            :value="status"
            :key="status"
          >
            {{ status }}
          </option>
        </select>
      </div>

      <button type="submit">Add Dish</button>
    </form>

    <!-- <ul>
      <li v-for="dish in dishList" :key="dish.name">
        {{ dish.name }} - {{ dish.address }} - {{ dish.status }} -
        {{ dish.dishes }}
      </li>
    </ul> -->
  </main>
</template>

<style scoped>
  @media (min-width: 1024px) {
    main {
      margin: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
