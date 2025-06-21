import { menuData } from './menuData.js';

export const levels = [
  {
    id: 1,
    title: "The Grand Opening",
    description: "Welcome to MongoBistro! 🎉 Chef Raju just opened the restaurant and wants to check the full menu. Help him display everything that’s currently in the kitchen.",
    task: "Find all items in the menu collection",
    correctQuery: "db.menu.find({})",
    expectedResult: menuData,
    hint: "Use db.menu.find({}) to show every dish in the menu",
    points: 100
  },
  {
    id: 2,
    title: "Thirsty Customer",
    description: "Someone just walked in and asked for any drinks. Can you check if your menu has anything in the 'drink' category?",
    task: "Find all drink items",
    correctQuery: "db.menu.find({category : \"drink\"})",
    expectedResult: menuData.filter(item => item.category === "drink"),
    hint: "Use {category: 'drink'} to filter the menu",
    points: 150
  },
  {
    id: 3,
    title: "Check the Dessert",
    description: "A sweet-toothed customer asks, 'Do you have Chocolate Cake?' Help the staff confirm this delicious detail!",
    task: "Find the item Chocolate Cake",
    correctQuery: "db.menu.findOne({name: \"Chocolate Cake\"})",
    expectedResult: menuData.find(item => item.name === "Chocolate Cake"),
    hint: "Use findOne with {name: 'Chocolate Cake'}",
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