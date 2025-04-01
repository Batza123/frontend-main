import { create } from "zustand";
import { Part } from "../types";

interface CartItem extends Part {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  addToCart: (item: Part) => void;
  removeFromCart: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalItems: 0,

  addToCart: (item: Part) => {
    const items = get().items;
    const existingItem = items.find((i) => i.id === item.id);
    let updatedItems;

    if (existingItem) {
      updatedItems = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedItems = [...items, { ...item, quantity: 1 }];
    }

    set({
      items: updatedItems,
      totalItems: updatedItems.reduce((sum, i) => sum + i.quantity, 0),
    });
  },

  removeFromCart: (id: string) => {
    const updatedItems = get().items.filter((item) => item.id !== id);
    set({
      items: updatedItems,
      totalItems: updatedItems.reduce((sum, i) => sum + i.quantity, 0),
    });
  },

  decreaseQuantity: (id: string) => {
    const existingItem = get().items.find((item) => item.id === id);
    if (!existingItem) return;

    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = get().items.filter((item) => item.id !== id);
    } else {
      updatedItems = get().items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }

    set({
      items: updatedItems,
      totalItems: updatedItems.reduce((sum, i) => sum + i.quantity, 0),
    });
  },

  clearCart: () => {
    set({ items: [], totalItems: 0 });
  },
}));
