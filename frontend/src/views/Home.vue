<template>
  <v-card color="#EED6C4" class="w-100 h-100" elevation="0" rounded="0">
    <v-container class="h-100">
      <v-toolbar elevation="0" color="transparent">
        <img :src="require('@/assets/logo.svg')" height="100%" alt="" />

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn color="white" elevation="0" text>Inicio</v-btn>
          <v-btn color="white" elevation="0" text>Menu</v-btn>
          <v-btn color="white" elevation="0" text>Serviços</v-btn>
          <v-btn color="white" elevation="0" text>Contato</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-btn icon color="white">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>

        <v-badge content="0" value="0" color="primary" overlap>
          <v-btn icon color="white">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-badge>
      </v-toolbar>

      <v-row class="d-flex justify-center" style="height: calc(100% - 64px)">
        <v-col class="d-flex justify-center flex-column">
          <span class="text-h2 font-weight-bold">
            Mussum Ipsum mé <br />
            cacilds vidis litro <br />
            abertis quem num
          </span>

          <span class="text-h6 text--secondary my-7">
            Mussum Ipsum, cacilds vidis litro abertis, <br />
            boa gentis num é. Interagi no mé, cursus quis.
          </span>

          <v-btn width="150" large color="primary">Cardápio</v-btn>
        </v-col>

        <v-col cols="6">
          <img
            :src="require('@/assets/banner-home.svg')"
            width="100%"
            height="100%"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to Vuetify!",
        excerpt: "Thank you for joining our community...",
      },
      {
        color: "red",
        icon: "mdi-account-multiple",
        name: "Social",
        new: 1,
        total: 3,
        title: "Twitter",
      },
      {
        color: "teal",
        icon: "mdi-tag",
        name: "Promos",
        new: 2,
        total: 4,
        title: "Shop your way",
        exceprt: "New deals available, Join Today",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),
};
</script>

<style>
#btnMain {
  background-color: #483434;
}
</style>
