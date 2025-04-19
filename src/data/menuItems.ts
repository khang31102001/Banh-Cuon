export type MenuItem = {
    id: number;
    name: {
      vi: string;
      en: string;
      jp: string;
    };
    description: {
      vi: string;
      en: string;
      jp: string;
    };
    image: string;
    price: number;
    category?:{id:number, name: string}
    ingredients: {
      vi: string[];
      en: string[];
      jp: string[];
    };
  };
  
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: {
        vi: 'Bánh Vuốn Chà Bông Heo',
        en: 'Pork Filled Rice Rolls',
        jp: '豚肉入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn truyền thống với nhân thịt lợn thơm ngon, hành khô và nấm mèo, ăn kèm với rau thơm và nước mắm pha.',
        en: 'Traditional rice rolls filled with savory minced pork, dried shallots, and wood ear mushrooms, served with herbs and fish sauce.',
        jp: '香ばしい豚ひき肉、乾燥エシャロット、きくらげを詰めた伝統的なライスロール。ハーブとニョクマム（魚醤）を添えて。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 1,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Thịt lợn', 'Nấm mèo', 'Hành khô', 'Tiêu', 'Nước mắm', 'Hành lá'],
        en: ['Rice flour', 'Pork', 'Wood ear mushrooms', 'Dried shallots', 'Pepper', 'Fish sauce', 'Green onions'],
        jp: ['米粉', '豚肉', 'きくらげ', '乾燥エシャロット', 'コショウ', 'ニョクマム', '青ねぎ'],
      },
    },
    {
      id: 2,
      name: {
        vi: 'Bánh Cuốn Chà Bông Tôm',
        en: 'Shrimp Filled Rice Rolls',
        jp: 'エビ入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn với nhân tôm tươi ngon, thơm ngọt tự nhiên, ăn kèm với rau thơm và nước mắm chua ngọt.',
        en: 'Rice rolls filled with fresh shrimp, naturally sweet and aromatic, served with herbs and sweet and sour fish sauce.',
        jp: '新鮮なエビを詰めた、自然な甘さと香りのライスロール。ハーブと甘酸っぱいニョクマムを添えて。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 60000,
      category:{
        id: 2,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Tôm tươi', 'Nấm mèo', 'Hành khô', 'Tiêu', 'Nước mắm', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Fresh shrimp', 'Wood ear mushrooms', 'Dried shallots', 'Pepper', 'Fish sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '新鮮なエビ', 'きくらげ', '乾燥エシャロット', 'コショウ', 'ニョクマム', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 3,
      name: {
        vi: 'Bánh Cuốn Chà Bông',
        en: 'Vegetarian Rice Rolls',
        jp: 'ベジタリアンライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm hương, nấm mèo và đậu phụ, thích hợp cho người ăn chay.',
        en: 'Vegetarian rice rolls filled with shiitake mushrooms, wood ear mushrooms, and tofu, suitable for vegetarians.',
        jp: '椎茸、きくらげ、豆腐を詰めたベジタリアンライスロール。ベジタリアンの方に最適。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 40000,
      category:{
        id: 3,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm hương', 'Nấm mèo', 'Đậu phụ', 'Hành khô', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Dried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '乾燥エシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 4,
      name: {
        vi: 'Bánh Cuốn Chay Nhân Thập Cẩm',
        en: 'Egg Filled Rice Rolls',
        jp: '卵入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn với nhân trứng thơm béo, kết hợp với hành phi và rau thơm, tạo nên hương vị đặc biệt.',
        en: 'Rice rolls filled with aromatic eggs, combined with fried shallots and herbs, creating a special flavor.',
        jp: '香り豊かな卵、揚げたエシャロット、ハーブを組み合わせた特別な風味のライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 50000,
      category:{
        id: 4,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Trứng gà', 'Hành phi', 'Tiêu', 'Nước mắm', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Chicken eggs', 'Fried shallots', 'Pepper', 'Fish sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '鶏卵', '揚げエシャロット', 'コショウ', 'ニョクマム', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 5,
      name: {
        vi: 'Bánh Cuốn Lá Dừa Nhận Rau Củ, Đậu Hủ',
        en: 'Chicken Filled Rice Rolls',
        jp: '鶏肉入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn với nhân thịt gà xé nhỏ, thơm ngon và dễ ăn, phù hợp với nhiều người.',
        en: 'Rice rolls filled with shredded chicken, delicious and easy to eat, suitable for many people.',
        jp: '細かく裂いた鶏肉を詰めた、おいしくて食べやすいライスロール。多くの方に適しています。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 55000,
      category:{
        id: 5,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Thịt gà', 'Nấm mèo', 'Hành khô', 'Tiêu', 'Nước mắm', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Chicken', 'Wood ear mushrooms', 'Dried shallots', 'Pepper', 'Fish sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '鶏肉', 'きくらげ', '乾燥エシャロット', 'コショウ', 'ニョクマム', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 6,
      name: {
        vi: 'Bánh Cuốn Nấm Linh Chi Nâu Trắng',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 6,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 7,
      name: {
        vi: 'Bánh Cuốn Nhận Thịt Đặc Biệt',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 6,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 8,
      name: {
        vi: 'Bánh Cuốn Nhân Thịt Gà Nấm',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 8,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 9,
      name: {
        vi: 'Bánh Cuốn Nhân Thịt',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 9,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 10,
      name: {
        vi: 'Bánh Cuốn Nhân Tôm Thịt Nấm',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 10,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 11,
      name: {
        vi: 'Bánh Cuốn Trứng Nhân Thịt',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 1,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 12,
      name: {
        vi: 'Bánh Đậu',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 12,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 13,
      name: {
        vi: 'Bánh Ướt Chay Không Nhân',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 13,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 14,
      name: {
        vi: 'Bánh Ướt Không Có Nhân',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 14,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 15,
      name: {
        vi: 'Bánh Ướt Trứng Vàng',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 15,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 16,
      name: {
        vi: 'Chả Chay 2 Miếng',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 16,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 17,
      name: {
        vi: 'Chả Lụa (1KG)',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 17,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 18,
      name: {
        vi: 'Chả Quế (1KG)',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 18,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 19,
      name: {
        vi: 'Chả Quế/Chả Lụa 2 Miếng',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 19,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 20,
      name: {
        vi: 'Hành Phi 1 Đĩa',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 20,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 21,
      name: {
        vi: 'Hành Phi 1KG',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 21,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 22,
      name: {
        vi: 'Nem Chay (2 Miếng)',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 22,
        name: "Món Mặn"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 23,
      name: {
        vi: 'Nem Huế (1 Cây 200 GRAM)',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 23,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 24,
      name: {
        vi: 'Nem Huế Đĩa 2 Miếng',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 24,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 25,
      name: {
        vi: 'Bánh Cam',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
      price: 45000,
      category:{
        id: 24,
        name: "Món chay"
      },
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
  ];
  
  export default menuItems;