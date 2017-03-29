

export default function(state = null, action) {
  console.log("In Active Books Reducer", arguments)
  switch(action.type) {
    case "BOOK_SELECTED":
    return action.book;
  }
  return state; // the prev state
}
