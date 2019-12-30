let saveTimer;
let debounceTime = 10000;

const saveDebounce = store => {
  if (saveTimer) {
    clearTimeout(saveTimer);
  }

  saveTimer = setTimeout(() => {
    fetch("my-api-endpoint", {
      method: "POST",
      body: JSON.stringify(store.getState().userDetails)
    });
  }, debounceTime);
};

export const dataSaver = store => next => action => {
  if (action.type === "UPDATE_USER_DETAILS") {
    saveDebounce(store);
  }
  return next(action);
};
