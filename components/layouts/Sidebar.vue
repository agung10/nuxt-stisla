<template>
  <div>
    <div class="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
          <nuxt-link to="/">Nuxt Stisla</nuxt-link>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
          <nuxt-link to="/">Ns</nuxt-link>
        </div>
        <ul class="sidebar-menu">
          <li class="menu-header">Dashboard</li>
          <li class="dropdown" :class="menu('dashboard')">
            <a href="javascript:void(0)" class="nav-link has-dropdown"
              ><i class="fas fa-fire"></i><span>Dashboard</span></a
            >
            <ul class="dropdown-menu">
              <li :class="menu('generalDashboard')">
                <nuxt-link class="nav-link" to="/general"
                  >General Dashboard</nuxt-link
                >
              </li>
              <li :class="menu('ecommerceDashboard')">
                <nuxt-link to="/" class="nav-link"
                  >Ecommerce Dashboard</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li class="menu-header">Starter</li>
          <li class="dropdown" :class="menu('layout')">
            <a
              href="javascript:void(0)"
              class="nav-link has-dropdown"
              data-toggle="dropdown"
              ><i class="fas fa-columns"></i> <span>Layout</span></a
            >
            <ul class="dropdown-menu">
              <li :class="menu('defaultLayout')">
                <nuxt-link class="nav-link" to="/starter/layout/defaultLayout"
                  >Default Layout</nuxt-link
                >
              </li>
              <li :class="menu('topNavigation')">
                <nuxt-link class="nav-link" to="/starter/layout/topNavigation"
                  >Top Navigation</nuxt-link
                >
              </li>
            </ul>
          </li>
          <li :class="menu('blankPage')">
            <nuxt-link class="nav-link" to="/starter/blankPage"
              ><i class="far fa-square"></i> <span>Blank Page</span></nuxt-link
            >
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ pages: (state) => state.pages }),
  },
  methods: {
    menu(menuName) {
      const name = menuName,
        current_page = this.pages.current_page;

      const split_current_page = current_page.split("-");
      if (split_current_page.length > 0) {
        if (name == split_current_page[0]) {
          return "active";
        }
        if (name == split_current_page[1]) {
          return "active";
        }
      } else {
        if (name == current_page) {
          return "active";
        }
        return "";
      }
    },
  },
};
</script>