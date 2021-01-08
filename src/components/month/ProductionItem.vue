<template>
  
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'date',
    'genres',
    'cast',
    'creator',
    'country',
    'duration',
    'poster'
  ],
  computed: {
    newDate() {
      return this.date.day + ' ' + this.date.month + ' ' + this.date.year;
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
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
  height: 20rem;
  margin: 1rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
.wrapper {
  overflow: hidden;
}
.poster {
  float: left;
}

.info {
  float: left;
}
</style>
