export function selectBook(book) {
  console.log("A book has been selected", book);
   return {
     type: "BOOK_SELECTED",
     book: book
   }
}
