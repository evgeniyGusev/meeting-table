<template>
  <div>
    <b-table
      striped
      hover
      small
      :items="users"
      :fields="table.fields"
      :per-page="perPage"
      :current-page="currentPage"
      class="table"
      id="event-table"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="event-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Table",
  props: {
    users: {
      type: Array,
      required: true,
    },
    rows: {
      type: Number,
    },
    perPage: {
      type: Number,
    },
  },

  data() {
    return {
      currentPage: 1,

      table: {
        fields: [
          {
            key: "name",
            label: "ФИО",
          },

          {
            key: "date",
            label: "Дата рождения",
            sortable: true,
          },
          {
            key: "email",
            label: "E-mail",
          },
          {
            key: "distance",
            label: "Дистанция",
            sortable: true,
          },
          {
            key: "phone",
            label: "Телефон",
          },
          {
            key: "paymentment",
            label: "Взнос",
            sortable: true,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>