/* eslint-disable */

const appId = 'HGGa9fmUyjETuK6YcEa3'

const getBooks = () => async (dispatch) => {
    try {
      const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`);
      const data = await response.json();
      dispatch({
        type: 'GET_BOOKS',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  const createBook = (book) => async (dispatch) => {
    try {
      const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: book.item_id,
          title: book.title,
          author: book.author,
          category: book.category
        }),
      });
      const data = await response.json();
      dispatch({
        type: 'CREATE_BOOK',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
const deleteBook = (itemId) => async (dispatch, getState) => {
    try {
      await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: itemId }),
      });
      dispatch({
        type: 'DELETE_BOOK',
        payload: itemId,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export {getBooks, createBook, deleteBook}
  