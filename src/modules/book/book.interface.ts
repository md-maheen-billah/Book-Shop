export interface Book {
  title: string;
  author: string;
  price: number;
  category:
    | "Fiction"
    | "Non-Fiction"
    | "Science"
    | "History"
    | "Biography"
    | "Fantasy"
    | "Mystery"
    | "Romance"
    | "Self-Help"
    | "Children";
  description: string;
  quantity: number;
  inStock: boolean;
}
