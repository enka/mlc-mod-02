interface Book {
  title: string;
  isRead: boolean;
}

export const isBookRead = (books: Book[], titleToSearch: string) => {
  const book = books.find((book) => book.title === titleToSearch);

  return book ? book.isRead : false;
};
