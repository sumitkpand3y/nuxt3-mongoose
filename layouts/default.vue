<template>
  <v-app dark>
    <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    fixed
    app
    color="primary"
    :expand-on-hover="moveHover"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed dense app dark color="primary header-bar" elevation="3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main color="blue">
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Nuxt-3 App",
    };
  },
};
</script>
<style scoped>
:deep(.v-navigation-drawer) {
  top: 3.9rem !important;
  bottom: 170px !important;
  max-height: calc(100% - 10%) !important;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
:deep(.v-toolbar) {
  left: 0 !important;
  height: 3.1rem !important;
  width: 100% !important;
  
}
/* .border-line {
  border-right: 2px solid #cfcaca;
} */
:deep(.v-toolbar__content) {
  height: 3rem !important;
}
:deep(.v-list-item) {
  position: relative;
}

:deep(.v-list-item--active::after) {
  opacity: 1 !important;
}
:deep(.v-list .v-list-item--active .v-icon) {
  color: #fff;
}
:deep(.v-list-item--link:after) {
  position: absolute !important;
  content: '' !important;
  right: 0 !important;
  width: 5px !important;
  height: 100%;
  background: #fff !important;
  opacity: 0;
  /* border-radius: 1rem !important ; */
}
.v-divider {
  border: 1px solid #fff;
}
:deep(.v-toolbar__title) {
  letter-spacing: 0.01rem !important;
  font-weight: 600 !important;
}
.tooltip-right::before {
  content: ' ';
  position: absolute;
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -8px;
  border-width: 8px;
  color: #3811e7;
  border-style: solid;
  border-top: solid 8px transparent;
  border-bottom: solid 8px transparent;
  border-left: solid 8px transparent;
}

.tooltip-right.primary::before {
  border-right: solid 10px #246fb3 !important;
}
.toggle {
  display: none;
}
.textsize {
  font-weight: 600;
}
/* .v-main {
  background-color: #edf1f4;
} */
@media only screen and (max-width: 960px) {
  .toggle {
    display: block;
  }
}
.home {
  display: none;
}
.color {
  background-color: #030303;
}


</style>
