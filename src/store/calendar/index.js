import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      productions: [
        {
          id: 'id1',
          title: 'WandaVision',
          date: {
            day: '15',
            month: 'January',
            year: '2021'
          },
          genres: [
            'Action',
            'Adventure',
            'Comedy',
            'Drama',
            'Fantasy',
            'Sci-Fi'
          ],
          cast: [
            'Elizabeth Olsen ',
            'Paul Bettany ',
            'Kat Dennings ',
            'Kathryn Hahn ',
            'Randall Park ',
            'Teyonah Parris'
          ],
          creator: 'Jac Schaeffer',
          country: 'USA',
          duration: '60 min',
          poster:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa0Z8hMzYCH1lG-6Uk5uppTii_Xt8SWlQNGYsex9__r2W4bTYh'
        },
        {
          id: 'id2',
          title: 'History of Swear Words',
          date: {
            day: '5',
            month: 'January',
            year: '2021'
          },
          genres: ['Documentary', 'Comedy'],
          cast: ['Nicolas Cage ', 'Nikki Glaser ', 'London Hughes '],
          creator: 'Netflix',
          country: 'USA',
          duration: '20 min',
          poster:
            'https://media-cache.cinematerial.com/p/500x/2gqhv2na/history-of-swear-words-movie-poster.jpg?v=1608741040'
        },
        {
          id: 'id3',
          title: 'Surviving Death',
          date: {
            day: '6',
            month: 'January',
            year: '2021'
          },
          genres: ['Documentary', 'Reality-TV'],
          cast: ['Sourav Kumar'],
          creator: 'Ricki Stern',
          country: 'USA',
          duration: '52 min',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNWU5MmY4MzAtMGM3NS00ZDdjLWI0OWYtZGFlZWEzZmRjMmQxXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg'
        },
        {
          id: 'id4',
          title: 'Riverdale: Season 5',
          date: {
            day: '21',
            month: 'January',
            year: '2021'
          },
          genres: ['Crime', 'Drama', 'Mystery', 'Romance'],
          cast: [
            'K.J. Apa ',
            'Lili Reinhart ',
            'Camila Mendes ',
            'Cole Sprouse ',
            'Casey Cott ',
            'Madelaine Petsch'
          ],
          creator: 'Roberto Aguirre-Sacasa',
          country: 'USA',
          duration: '45 min',
          poster:
            'https://images-na.ssl-images-amazon.com/images/I/712-9DTN0bL._AC_SY741_.jpg'
        },
        {
          id: 'id5',
          title: 'The Dig',
          date: {
            day: '29',
            month: 'January',
            year: '2021'
          },
          genres: ['Biography', 'Drama', 'History'],
          cast: [
            'Ralph Fiennes ',
            'Carey Mulligan ',
            'Lily James ',
            'Johnny Flynn ',
            'Stephen Worrall ',
            'Danny Webb'
          ],
          creator: 'Simon Stone',
          country: 'UK',
          duration: '1h 52min',
          poster: 'https://www.impawards.com/2021/posters/dig.jpg'
        },
        {
          id: 'id6',
          title: 'A Discovery of Witches: Season 2',
          date: {
            day: '8',
            month: 'January',
            year: '2021'
          },
          genres: ['Drama', 'Romance', 'Fantasy'],
          cast: [
            'Matthew Goode ',
            'Teresa Palmer ',
            'Gregg Chillin ',
            'Valarie Pettiford ',
            'Malin Buska ',
            'Owen Teale'
          ],
          creator: 'Kate Brooke',
          country: 'USA, UK',
          duration: '60 min',
          poster:
            'https://www.awesomepostersonline.com/uploads/2018-11-06/e05eca8a/093931f0d2a.jpg'
        },
        {
          id: 'id7',
          title: 'Disenchantment: Season 3',
          date: {
            day: '15',
            month: 'January',
            year: '2021'
          },
          genres: ['Action', 'Animation', 'Comedy', 'Adventure', 'Fantasy'],
          cast: [
            'Abbi Jacobson ',
            'Eric André ',
            'Nat Faxon ',
            'John DiMaggio ',
            'Maurice LaMarche ',
            'Billy West'
          ],
          creator: 'Matt Groening',
          country: 'USA',
          duration: '30 min',
          poster:
            'https://media.comicbook.com/2020/12/disenchantment-part-3-bean-1250649.jpeg'
        },
        {
          id: 'id8',
          title: 'Snowpiercer: Season 2',
          date: {
            day: '26',
            month: 'January',
            year: '2021'
          },
          genres: ['Action', 'Thriller', 'Drama', 'Sci-Fi'],
          cast: [
            'Jennifer Connelly ',
            'Daveed Diggs ',
            'Mickey Sumner ',
            'Alison Wright ',
            'Iddo Goldberg ',
            'Lena Hall'
          ],
          creator: 'Graeme Manson',
          country: 'USA',
          duration: '60 min',
          poster:
            'https://m.media-amazon.com/images/M/MV5BODAwYWEwMzctYzI3MS00ZTU5LThhYWMtMjQ2ZmY5NmU2NGE5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg'
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
