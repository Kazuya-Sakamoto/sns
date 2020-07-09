const initialState = {
  clips: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clips: [...state.clips, action.clip]
      };
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter(clip => clip.content !== action.clip.content),
      };
    default: 
      return state;
  } 
}

export default reducer;