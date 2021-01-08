<template>
  <base-card>
    <h1>Styczeń</h1>
    <ul class="weekdays">
      <li>Poniedziałek</li>
      <li>Wtorek</li>
      <li>Środa</li>
      <li>Czwartek</li>
      <li>Piątek</li>
      <li>Sobota</li>
      <li>Niedziela</li>
    </ul>

    <ul class="days">
      <li v-for="day in days" :key="day">
        {{ day }}
        <div
          v-for="production in productions"
          :key="production.id"
          :id="production.id"
          :title="production.title"
          :date="production.date"
          :genres="production.genres"
          :cast="production.cast"
          :creator="production.creator"
          :country="production.country"
          :duration="production.duration"
          :poster="production.poster"
          class="link"
        >
          <router-link
            :to="'/details/' + production.id"
            v-if="day === production.date.day"
          >
            {{ production.title }}
          </router-link>
        </div>
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      days: [
        '',
        '',
        '',
        '',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31'
      ]
    };
  },
  computed: {
    productions() {
      return this.$store.getters['calendar/productions'];
    },
    detailsLink(ide) {
      return '/details/' + ide;
    }
  },
  methods: {
    loadDays() {
      this.$store.dispatch('calendar/loadDays');
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

body {
  font-family: Verdana, sans-serif;
}

.month {
  padding: 70px 25px;
  width: 100%;
  background: #1abc9c;
  text-align: center;
}

.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.month .prev {
  float: left;
  padding-top: 10px;
}

.month .next {
  float: right;
  padding-top: 10px;
}

.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
  font-size: 1.5rem;
}

.days {
  padding: 10px 0;
  background: #eee;
  margin: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #777;
  height: 7rem;
}

.days li .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important;
}

a {
  text-decoration: none;
  font-size: 15px;
  color: green;
}

a:hover {
  color: violet;
}
</style>
