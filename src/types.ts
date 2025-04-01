export interface Part {
  id: string;
  name: string;
  price: number;
  description: string;
  compatibility: string[];
  image: string;
}

export interface CartItem {
  part: Part;
  quantity: number;
}