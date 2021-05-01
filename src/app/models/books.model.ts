export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
    imageLinks: {
      thumbnail: string;
    };
    categories: Array<string>;
  };
}
