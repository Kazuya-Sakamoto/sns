export const saveClip = ({ clip }) => {
  return {
    type: 'SAVE_CLIP',
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip,
  };
};
