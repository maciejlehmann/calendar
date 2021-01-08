export default {
  async loadDays(context) {
    const response = await fetch(
      `https://calendar-58c4f-default-rtdb.firebaseio.com/months.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    const months = [];

    for (const key in responseData) {
      const month = {
        id: key,
        name: responseData[key].name,
        days: responseData[key].days,
        first: responseData[key].first
      };
      months.push(month);
    }
    context.commit('setDays', months);
  }
};
