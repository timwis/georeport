<template lang="pug" functional>
header.site-header.app.group
  div.row.expanded
    div.columns
      a.logo(href='https://beta.phila.gov')
        img(src='http://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png' alt='City of Philadelphia')
      div.app-divide
      div.page-title-container
        router-link(to='/')
          h1.page-title GeoReport
          //- h2.page-subtitle An offline-first, map-based mobile web app for reporting
</template>
