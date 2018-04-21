<template functional>
  <header class="site-header app group">
    <div class="row columns expanded">
      <a
        to="https://beta.phila.gov"
        class="logo">
        <img
          src="../assets/header-logo.png"
          alt="City of Philadelphia">
      </a>

      <div class="app-divide"/>

      <div class="page-title-container">
        <router-link to="/">
          <h1 class="page-title">
            {{ props.title }}
          </h1>
          <h2
            v-if="props.subtitle"
            class="page-subtitle">
            {{ props.subtitle }}
          </h2>
        </router-link>
      </div>
    </div>
  </header>
</template>
