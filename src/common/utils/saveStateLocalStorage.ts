// Создаем функцию для сохранения состояния в localStorage
export const saveStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.log("err save local storage", err);
  }
};
