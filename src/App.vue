<template>
  <div id="app">
    <Kalendar :configuration="calendar_settings" :events.sync="events" />
  </div>
</template>

<script>
import { Kalendar } from 'kalendar-vue';

export default {
  name: 'App',
  components: {
    Kalendar
  },
  data: () => ({
    calendar_settings: {
      style: 'material_design',
      view_type: 'week',
      cell_height: 20,
      scrollToNow: true,
      start_day: new Date().toISOString(),
      read_only: false,
      day_starts_at: 0,
      day_ends_at: 24,
      overlap: true,
      hide_dates: ['2019-10-31'], // Spooky
      hide_days: [6],
      past_event_creation: true
    },
    events: [
      {
        from: '2020-03-18T18:00:00Z',
        to: '2020-03-18T19:00:00Z',
        data: 'Event 1',
      },
      {
        from: '2020-03-18T19:00:00Z',
        to: '2020-03-18T21:00:00Z',
        data: 'Olive & Friends',
      },
    ],
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
