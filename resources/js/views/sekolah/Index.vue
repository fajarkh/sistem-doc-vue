<template>
  <div>
    <DataTable class="borderless" @saved="saved" :moduleName="moduleName" title="Sekolah List" :headers="headers"
      :slots="slots" :formData="true">
      <template #modal-form="{ editedItem, dialog }">
        <ModulForm :form="editedItem" :dialog="dialog" />
      </template>
      <template #actions="{ item }">
        <v-icon color="success" small class="mr-2" @click="notify(item)">mdi-bell</v-icon>
      </template>
    </DataTable>
  </div>
</template>
<script>
import DataTable from "@/components/DataTable";
import { mapActions } from "vuex";
export default {
  components: {
    DataTable,
  },
  data() {
    return {
      title: "Daftar Sekolah",
      moduleName: "Sekolah",
      slots: [],
      headers: [
        { text: "Nama", value: "nama" },
        { text: "Actions", value: "actions", sortable: false, align: "center" },
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["markAsRead"]),
    async read(item) {
      await this.markAsRead(item);
      this.$refs.table.load();
    },
  },
};
</script>
