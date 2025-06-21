import { menuData } from './menuData.js';

export const levels = [
  {
    id: 1,
    title: "Find All Menu Items",
    description: "Welcome to Mario's Restaurant! Let's start by finding all menu items.",
    task: "Find all items in the menu collection",
    correctQuery: "db.menu.find({})",
    expectedResult: menuData,
    hint: "Use db.menu.find({}) to get all documents from the collection",
    points: 100
  },
  {
    id: 2,
    title: "Filter by Category",
    description: "A customer wants to see only pizza items.",
    task: "Find all pizza items",
    correctQuery: "db.menu.find({category: \"pizza\"})",
    expectedResult: menuData.filter(item => item.category === "pizza"),
    hint: "Use {category: \"pizza\"} to filter by category",
    points: 150
  },
  {
    id: 3,
    title: "Price Range Filter",
    description: "Find budget-friendly options under $12.",
    task: "Find all items with price less than $12",
    correctQuery: "db.menu.find({price: {$lt: 12}})",
    expectedResult: menuData.filter(item => item.price < 12),
    hint: "Use {price: {$lt: 12}} for less than comparison",
    points: 200
  },
  {
    id: 4,
    title: "Vegetarian Options",
    description: "A vegetarian customer needs meal options.",
    task: "Find all vegetarian items",
    correctQuery: "db.menu.find({vegetarian: true})",
    expectedResult: menuData.filter(item => item.vegetarian === true),
    hint: "Use {vegetarian: true} to find vegetarian items",
    points: 150
  },
  {
    id: 5,
    title: "Highly Rated Items",
    description: "Show premium items with rating above 4.5.",
    task: "Find items with rating greater than 4.5",
    correctQuery: "db.menu.find({rating: {$gt: 4.5}})",
    expectedResult: menuData.filter(item => item.rating > 4.5),
    hint: "Use {rating: {$gt: 4.5}} for greater than comparison",
    points: 250
  },
  {
    id: 6,
    title: "Multiple Conditions",
    description: "Find expensive vegetarian items (price > 10 AND vegetarian).",
    task: "Find vegetarian items with price greater than $10",
    correctQuery: "db.menu.find({price: {$gt: 10}, vegetarian: true})",
    expectedResult: menuData.filter(item => item.price > 10 && item.vegetarian === true),
    hint: "Use {price: {$gt: 10}, vegetarian: true} for multiple conditions",
    points: 300
  }
];