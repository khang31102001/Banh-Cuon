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
    isVegetarian: boolean;
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
        vi: 'Bánh Cuốn Nhân Thịt',
        en: 'Pork Filled Rice Rolls',
        jp: '豚肉入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn truyền thống với nhân thịt lợn thơm ngon, hành khô và nấm mèo, ăn kèm với rau thơm và nước mắm pha.',
        en: 'Traditional rice rolls filled with savory minced pork, dried shallots, and wood ear mushrooms, served with herbs and fish sauce.',
        jp: '香ばしい豚ひき肉、乾燥エシャロット、きくらげを詰めた伝統的なライスロール。ハーブとニョクマム（魚醤）を添えて。',
      },
      image: '/images/banh-cuon-thit.jpg',
      price: 45000,
      isVegetarian: false,
      ingredients: {
        vi: ['Bột gạo', 'Thịt lợn', 'Nấm mèo', 'Hành khô', 'Tiêu', 'Nước mắm', 'Hành lá'],
        en: ['Rice flour', 'Pork', 'Wood ear mushrooms', 'Dried shallots', 'Pepper', 'Fish sauce', 'Green onions'],
        jp: ['米粉', '豚肉', 'きくらげ', '乾燥エシャロット', 'コショウ', 'ニョクマム', '青ねぎ'],
      },
    },
    {
      id: 2,
      name: {
        vi: 'Bánh Cuốn Nhân Tôm',
        en: 'Shrimp Filled Rice Rolls',
        jp: 'エビ入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn với nhân tôm tươi ngon, thơm ngọt tự nhiên, ăn kèm với rau thơm và nước mắm chua ngọt.',
        en: 'Rice rolls filled with fresh shrimp, naturally sweet and aromatic, served with herbs and sweet and sour fish sauce.',
        jp: '新鮮なエビを詰めた、自然な甘さと香りのライスロール。ハーブと甘酸っぱいニョクマムを添えて。',
      },
      image: '/images/banh-cuon-tom.jpg',
      price: 60000,
      isVegetarian: false,
      ingredients: {
        vi: ['Bột gạo', 'Tôm tươi', 'Nấm mèo', 'Hành khô', 'Tiêu', 'Nước mắm', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Fresh shrimp', 'Wood ear mushrooms', 'Dried shallots', 'Pepper', 'Fish sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '新鮮なエビ', 'きくらげ', '乾燥エシャロット', 'コショウ', 'ニョクマム', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 3,
      name: {
        vi: 'Bánh Cuốn Chay',
        en: 'Vegetarian Rice Rolls',
        jp: 'ベジタリアンライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm hương, nấm mèo và đậu phụ, thích hợp cho người ăn chay.',
        en: 'Vegetarian rice rolls filled with shiitake mushrooms, wood ear mushrooms, and tofu, suitable for vegetarians.',
        jp: '椎茸、きくらげ、豆腐を詰めたベジタリアンライスロール。ベジタリアンの方に最適。',
      },
      image: '/images/banh-cuon-chay.jpg',
      price: 40000,
      isVegetarian: true,
      ingredients: {
        vi: ['Bột gạo', 'Nấm hương', 'Nấm mèo', 'Đậu phụ', 'Hành khô', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Dried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '乾燥エシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 4,
      name: {
        vi: 'Bánh Cuốn Trứng',
        en: 'Egg Filled Rice Rolls',
        jp: '卵入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn với nhân trứng thơm béo, kết hợp với hành phi và rau thơm, tạo nên hương vị đặc biệt.',
        en: 'Rice rolls filled with aromatic eggs, combined with fried shallots and herbs, creating a special flavor.',
        jp: '香り豊かな卵、揚げたエシャロット、ハーブを組み合わせた特別な風味のライスロール。',
      },
      image: '/images/banh-cuon-trung.jpg',
      price: 50000,
      isVegetarian: true,
      ingredients: {
        vi: ['Bột gạo', 'Trứng gà', 'Hành phi', 'Tiêu', 'Nước mắm', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Chicken eggs', 'Fried shallots', 'Pepper', 'Fish sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '鶏卵', '揚げエシャロット', 'コショウ', 'ニョクマム', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 5,
      name: {
        vi: 'Bánh Cuốn Thịt Gà',
        en: 'Chicken Filled Rice Rolls',
        jp: '鶏肉入りライスロール',
      },
      description: {
        vi: 'Bánh cuốn với nhân thịt gà xé nhỏ, thơm ngon và dễ ăn, phù hợp với nhiều người.',
        en: 'Rice rolls filled with shredded chicken, delicious and easy to eat, suitable for many people.',
        jp: '細かく裂いた鶏肉を詰めた、おいしくて食べやすいライスロール。多くの方に適しています。',
      },
      image: '/images/banh-cuon-ga.jpg',
      price: 55000,
      isVegetarian: false,
      ingredients: {
        vi: ['Bột gạo', 'Thịt gà', 'Nấm mèo', 'Hành khô', 'Tiêu', 'Nước mắm', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Chicken', 'Wood ear mushrooms', 'Dried shallots', 'Pepper', 'Fish sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '鶏肉', 'きくらげ', '乾燥エシャロット', 'コショウ', 'ニョクマム', '青ねぎ', 'ハーブ'],
      },
    },
    {
      id: 6,
      name: {
        vi: 'Bánh Cuốn Nấm Đông Cô',
        en: 'Shiitake Mushroom Rice Rolls',
        jp: '椎茸ライスロール',
      },
      description: {
        vi: 'Bánh cuốn chay với nhân nấm đông cô thơm ngon, giàu dinh dưỡng và hương vị đậm đà.',
        en: 'Vegetarian rice rolls with delicious shiitake mushroom filling, nutritious and rich in flavor.',
        jp: 'おいしい椎茸の具材が入った栄養価の高い風味豊かなベジタリアンライスロール。',
      },
      image: '/images/banh-cuon-nam.jpg',
      price: 45000,
      isVegetarian: true,
      ingredients: {
        vi: ['Bột gạo', 'Nấm đông cô', 'Nấm mèo', 'Đậu phụ', 'Hành phi', 'Nước tương', 'Hành lá', 'Rau thơm'],
        en: ['Rice flour', 'Shiitake mushrooms', 'Wood ear mushrooms', 'Tofu', 'Fried shallots', 'Soy sauce', 'Green onions', 'Herbs'],
        jp: ['米粉', '椎茸', 'きくらげ', '豆腐', '揚げエシャロット', '醤油', '青ねぎ', 'ハーブ'],
      },
    },
  ];
  
  export default menuItems;