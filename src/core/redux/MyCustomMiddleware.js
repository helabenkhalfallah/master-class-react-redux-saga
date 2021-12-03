// MyCustomMiddleware

const MyCustomMiddleware = (store) => (next) => (action) => {
  console.log('Middleware store:', store);
  console.log('Middleware action:', action);
  if (action.type === 'ARTICLE_LIST_REQUEST_FAIL') {
    console.log('ACTION IS NOT VALID');
    store.dispatch({
      type: 'SERVICE_ERROR',
      payload: {
        error: 'Service non disponible !',
      },
    });
    // next(action);
  } else {
    next(action);
  }
};

export default MyCustomMiddleware;
