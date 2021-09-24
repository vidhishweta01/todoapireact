import axios from 'axios';
import ActionTypes from './actionTypes';

const FetchData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FetchLoading,
  });

  try {
      const response = await axios.get('https://secure-ocean-64470.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxM30.d2uekGOXSDVgfqjon8T-QFHhfFGLAz3eE9nH3WpgldY',
        },
      });
    dispatch({
      type: ActionTypes.FetchSuccess,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FetchFailure,
      error,
    });
  }
};

// const FetchPokeInfo = (id, name) => async (dispatch) => {
//   dispatch({
//     type: ActionTypes.FetchPokeInfoLoading,
//   });

//   try {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     dispatch({
//       type: ActionTypes.FetchPokeInfoSuccess,
//       payload: response.data,
//       pokemonName: name,
//     });
//   } catch (error) {
//     dispatch({
//       type: ActionTypes.FetchPokeInfoFailure,
//       error,
//     });
//   }
// };

// const filterOnText = (value) => (
//   {
//     type: ActionTypes.FilterOnText,
//     value,
//   }
// );

export { FetchData };
