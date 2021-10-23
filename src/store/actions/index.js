export const addToFav = (company) => ({
  type: 'ADD_TO_FAV',
  payload: company
})

export const removeFromFav = (company) => ({
  type: 'REMOVE_FROM_FAV',
  payload: company
})

export const displayJobsAction = (url, query) => {
  return async(dispatch, getState) => {
    try{
      const response = await fetch(url + query)
      if(response.ok) {
        const { data } = await response.json()
        dispatch({
          type: 'DISPLAY_JOBS',
          payload: data
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error);
    }
  }
}
