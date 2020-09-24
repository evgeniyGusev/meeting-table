<template>
  <b-form
    @submit.prevent="onSubmit(form)"
    @reset.prevent="onReset"
    class="form"
  >
    <b-form-group id="input-group-1" label="Ваши ФИО:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model.trim="form.name"
        required
        placeholder="Фамилия Имя Отчество(при наличии)"
        size="sm"
      ></b-form-input>
    </b-form-group>

    <label for="example-datepicker">Дата рождения:</label>
    <b-form-datepicker
      id="example-datepicker"
      v-model.trim="form.date"
      class="mb-2"
      required
      placeholder="Дата не выбрана"
      reset-button
      close-button
      :label-reset-button="'Сбросить'"
      :label-close-button="'Закрыть'"
      size="sm"
    ></b-form-datepicker>

    <b-form-group id="input-group-2" label="Email адрес:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model.trim="form.email"
        type="email"
        required
        placeholder="example@mail.dom"
        size="sm"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-3"
      label="Номер телефона:"
      label-for="input-3"
    >
      <b-form-input
        v-phone
        id="input-3"
        v-model.trim="form.phone"
        required
        placeholder="(999) 999-9999"
        size="sm"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-4" label="Дистанция:" label-for="input-4">
      <b-form-select
        id="input-4"
        v-model.trim="form.distance"
        :options="distances"
        required
        size="sm"
      ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-5" label-for="input-5" label="Сумма взноса:">
      <b-form-input
        id="input-5"
        v-model.number="form.paymentment"
        required
        placeholder="Взнос"
        size="sm"
      ></b-form-input>
    </b-form-group>

    <b-button
      type="submit"
      variant="primary"
      class="btn-submit"
      :disabled="valid"
      >Подтвердить</b-button
    >
    <b-button type="reset" variant="danger">Сбросить</b-button>
  </b-form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      form: {
        name: "",
        date: "",
        email: "",
        distance: null,
        phone: "",
        paymentment: null,
      },
      curPhone: "",
      distances: [{ text: "Выберите дистанцию", value: null }, 3, 5, 10],
    };
  },

  computed: {
    currentPhone() {
      return "+7" + this.curPhone;
    },

    valid() {
      if (!this.form.name) {
        return true;
      }
      if (!this.form.date) {
        return true;
      }
      if (!this.form.email) {
        return true;
      }
      if (!this.form.distance) {
        return true;
      }
      if (!this.form.phone) {
        return true;
      }
      if (!this.form.paymentment) {
        return true;
      }

      return false;
    },
  },

  methods: {
    ...mapMutations({
      onSubmit: "ADD_USER",
    }),

    onReset() {
      this.form.name = "";
      this.form.date = "";
      this.form.email = "";
      this.form.distance = null;
      this.form.phone = null;
      this.form.paymentment = null;
    },
  },
};
</script>

<style lang="scss">
.form {
  margin-bottom: 40px;

  .btn-submit {
    margin-right: 20px;
  }
}
</style>
