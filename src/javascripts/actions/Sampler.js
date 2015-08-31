export const SAMPLE_REFRESH = 'SAMPLE_REFRESH';

export function refresh() {
  return {
    type: SAMPLE_REFRESH,
  };
}

export function refreshAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(refresh());
    }, 1000);
  };
}
