<template>
  <base-card>
    <div class="row">
      <div class="info">
        <h1>{{ title }}</h1>
        <h6>{{ duration }}</h6>
        <h4>Data premiery: {{ newDate }}</h4>
        <h4>Twórca: {{ creator }}</h4>
        <div>
          <p>Obsada:</p>
          <span v-for="actor in cast" :key="actor">{{ actor }}</span>
        </div>
        <div>
          <base-badge
            v-for="genre in genres"
            :key="genre"
            :type="genre"
            :title="genre"
          ></base-badge>
        </div>
        <h4>Kraj produkcji: {{ country }}</h4>
      </div>
      <div class="poster">
        <img :src="poster" />
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedProduction: null,
    };
  },
  created() {
    this.selectedProduction = this.$store.getters['calendar/productions'].find(
      (production) => production.id === this.id
    );
  },
  computed: {
    newDate() {
      return (
        this.selectedProduction.date.day +
        ' ' +
        this.selectedProduction.date.month +
        ' ' +
        this.selectedProduction.date.year
      );
    },
    title() {
      return this.selectedProduction.title;
    },
    poster() {
      return this.selectedProduction.poster;
    },
    duration() {
      return this.selectedProduction.duration;
    },
    cast() {
      return this.selectedProduction.cast;
    },
    genres() {
      return this.selectedProduction.genres;
    },
    creator() {
      return this.selectedProduction.creator;
    },
    country() {
      return this.selectedProduction.country;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}
h1 {
  margin-bottom: 0;
}
h6 {
  margin-top: 10px;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

img {
  margin: 0.5rem 0;
  height: 20rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.info {
  flex: 70%;
  padding: 20px;
}

.poster {
  flex: 30%;
  padding: 20px;
}
</style>
