<template>
  <main>
    <b-container>
      <Form />
      <Table :users="users" :rows="rows" :per-page="3" />
    </b-container>
  </main>
</template>

<script>
import Form from "@/components/Form";
import Table from "@/components/Table";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Form, Table },

  computed: {
    ...mapGetters({
      users: "users",
      rows: "rows",
    }),
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
}
</style>