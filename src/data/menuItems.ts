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
  category?: {
    id: number,
    name: {
      vi: string;
      en: string;
      jp: string;
    }
  }
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
      vi: 'Bánh Cuốn Chà Bông',
      en: 'Vegetarian Banh Cuon with Vegan Floss',
      jp: 'ビーガンバインクオン（菜食フロス添え）',
    },
    description: {
      vi: 'Bánh cuốn chay thơm ngon với lớp bánh mềm và chà bông chay đậm vị. Vị thanh đạm, lạ miệng mà vẫn đậm chất Việt',
      en: 'Delicious vegetarian banh cuon with soft rice rolls and savory vegan floss. A light yet flavorful Vietnamese experience.',
      jp: 'やわらかい米粉の皮と風味豊かな菜食フロスを組み合わせたビーガンバインクオン。あっさりしていながらも味わい深い、ベトナムの伝統的な一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 40000,
    category: {
      id: 1,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo tẻ, chà bông chay (ruốc thực vật), mộc nhĩ, hành phi'],
      en: ['Rice flour, vegan floss (plant-based), wood ear mushrooms, fried shallots'],
      jp: ['米粉、生菜フロス（植物性）、きくらげ、揚げネギ'],
    },
  },


  {
    id: 2,
    name: {
      vi: 'Bánh Cuốn chay Nhân Thập Cẩm',
      en: 'Vegetarian Banh Cuon with Mixed Filling',
      jp: 'ミックス野菜入りビーガンバインクオン',
    },
    description: {
      vi: 'Bánh cuốn chay thập cẩm với lớp vỏ mỏng dẻo, cuộn nhân nấm, hạt sen, rau củ ngọt bùi tự nhiên. Ăn kèm nước mắm chay và hành phi, hương vị thanh đạm mà vẫn đậm đà, lạ miệng',
      en: 'Soft vegetarian rice rolls filled with mushrooms, lotus seeds, and assorted vegetables. Served with vegan fish sauce and fried shallots, offering a light yet rich and unique flavor.',
      jp: '薄くてもちもちのビーガンバインクオンに、きのこ、ハスの実、ミックス野菜の具を包み込みました。ビーガンヌクマムと揚げネギを添えて、あっさりしながらも深みのある独特な味わいです。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 40000,
    category: {
      id: 2,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, nấm các loại, hạt sen, đậu (đỗ) các loại, rau củ thập cẩm'],
      en: ['Rice flour, assorted mushrooms, lotus seeds, mixed beans, mixed vegetables'],
      jp: ['米粉、きのこ各種、ハスの実、豆類、ミックス野菜'],
    },
  },

  {
    id: 3,
    name: {
      vi: 'Bánh Cuốn Lá Dứa Nhân Rau Củ, Đậu Hủ',
      en: 'Pandan Banh Cuon with Vegetables and Tofu',
      jp: '野菜と豆腐入りパンダンバインクオン',
    },
    description: {
      vi: 'Món bánh cuốn lá dứa gây ấn tượng bởi màu xanh dịu mát và hương thơm thoang thoảng của lá dứa hòa quyện trong bánh. Lớp bánh mỏng được pha nước cốt lá dứa tạo màu xanh tự nhiên, cuộn nhân rau củ xào và đậu hũ chiên vàng. Sự kết hợp độc đáo này vừa giữ được cái hồn dân dã của bánh cuốn truyền thống, vừa mang đến trải nghiệm mới lạ với hương lá dứa thơm ngọt và vị thanh đạm từ nhân rau củ, đậu hũ.',
      en: 'This pandan-infused Banh Cuon stands out with its soft green color and subtle pandan aroma. The rice roll is naturally colored with pandan juice and filled with sautéed vegetables and golden fried tofu, blending rustic tradition with a fresh, fragrant twist.',
      jp: 'パンダンの香りがほんのりと広がる、爽やかな緑色が特徴のバインクオン。パンダンジュースで色付けされた皮に、炒めた野菜と揚げ豆腐を包み、素朴な伝統と新鮮な風味が調和した一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 34000,
    category: {
      id: 3,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo (nước lá dứa), rau củ (cà rốt, củ sắn, nấm mèo), đậu hũ, hành phi'],
      en: ['Rice flour (pandan juice), vegetables (carrot, jicama, wood ear mushroom), tofu, fried shallots'],
      jp: ['米粉（パンダンジュース）、野菜（にんじん、ヤムビーン、きくらげ）、豆腐、揚げネギ'],
    },
  },

  {
    id: 4,
    name: {
      vi: 'Bánh Cuốn Nấm Linh Chi Nâu Trắng',
      en: 'Banh Cuon with Brown & White Reishi Mushrooms',
      jp: '茶色と白の霊芝入りバインクオン',
    },
    description: {
      vi: 'Bánh cuốn nhân nấm linh chi là sự kết hợp độc đáo giữa ẩm thực truyền thống và dược thiện, với lớp vỏ mỏng cuộn nhân nấm linh chi nâu, trắng xào thơm cùng rau củ.',
      en: 'A unique fusion of traditional Vietnamese cuisine and medicinal ingredients: soft rice rolls filled with sautéed brown and white reishi mushrooms and mixed vegetables.',
      jp: '伝統的なベトナム料理と薬膳の融合。薄いライスロールに、香ばしく炒めた茶色と白の霊芝きのこ、野菜を包み込んだヘルシーな一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 44000,
    category: {
      id: 4,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, nấm linh chi nâu, nấm linh chi trắng, rau củ (cà rốt, củ sắn), gia vị'],
      en: ['Rice flour, brown reishi mushrooms, white reishi mushrooms, vegetables (carrot, jicama), seasonings'],
      jp: ['米粉、茶色の霊芝、白の霊芝、野菜（にんじん、ヤムビーン）、調味料'],
    },
  },

  {
    id: 5,
    name: {
      vi: 'Bánh Đậu',
      en: 'Mung Bean Cake (Hai Duong Style)',
      jp: '緑豆ケーキ（ハイズオン風）',
    },
    description: {
      vi: 'Bánh đậu xanh Hải Dương mang hương vị quê nhà với lớp bánh bùi ngậy từ đậu xanh, đường và mỡ ép khuôn vuông vắn. Thưởng thức cùng trà nóng, bánh tan nhẹ nơi đầu lưỡi, thanh tao và tinh tế.',
      en: 'A traditional Hai Duong mung bean cake with a rich, nutty flavor made from mung beans, sugar, and fat, molded into square shapes. Best enjoyed with hot tea, it melts delicately on the tongue.',
      jp: '緑豆、砂糖、脂で作られた、ハイズオン地方の伝統的な緑豆ケーキ。四角く成形され、熱いお茶と一緒に楽しむと、口の中でやさしく溶ける上品な味わいです。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 8000,
    category: {
      id: 5,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Đậu xanh, đường kính, dầu thực vật (mỡ heo), tinh dầu hoa bưởi (tuỳ công thức)'],
      en: ['Mung beans, granulated sugar, vegetable oil (or pork fat), pomelo blossom essence (optional)'],
      jp: ['緑豆、グラニュー糖、植物油（または豚脂）、ブンロンの花エッセンス（レシピによる）'],
    },
  },

  {
    id: 6,
    name: {
      vi: 'Bánh Ướt Chay Không Nhân',
      en: 'Plain Vegetarian Steamed Rice Sheets',
      jp: '具なしビーガン蒸しライスシート',
    },
    description: {
      vi: 'Bánh ướt chay không nhân với lớp bánh mỏng, phết dầu hành và rắc hành phi, mang hương vị thanh đạm, giản dị nhưng đậm chất truyền thống. Thưởng thức cùng nước chấm chay nhẹ nhàng, thơm ngon.',
      en: 'Thin, soft vegetarian rice sheets without filling, brushed with scallion oil and topped with crispy shallots. A simple yet traditional dish best served with light vegan dipping sauce.',
      jp: '具のない薄くて柔らかいビーガン蒸しライスシートに、ネギ油を塗り、揚げネギをふりかけた一品。素朴ながらも伝統的な味わいで、さっぱりしたビーガンのつけダレとともに楽しめます。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 34000,
    category: {
      id: 6,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo tẻ, nước, dầu ăn (phết bánh), hành phi'],
      en: ['Rice flour, water, vegetable oil (for brushing), fried shallots'],
      jp: ['米粉、水、食用油（塗る用）、揚げネギ'],
    },
  },

  {
    id: 7,
    name: {
      vi: 'Chả Chay 2 Miếng',
      en: '2 Pieces of Vegetarian Ham',
      jp: 'ビーガンハム（2切れ）',
    },
    description: {
      vi: 'Chả chay làm từ đạm thực vật như đậu nành, lúa mì, gói lá chuối và hấp chín, có vị đậm đà nhưng thanh nhẹ. Kết cấu dai, thơm mùi lá chuối, rất phù hợp ăn kèm bánh cuốn cho người ăn chay',
      en: 'Vegetarian ham made from plant-based proteins like soy and wheat gluten, wrapped in banana leaves and steamed. Savory yet light, with a chewy texture and subtle banana leaf aroma—perfect with banh cuon.',
      jp: '大豆や小麦グルテンなどの植物性タンパクから作られたビーガンハム。バナナの葉で包み、蒸し上げることで、香り豊かでほどよい弾力があり、バインクオンとの相性も抜群です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 8000,
    category: {
      id: 7,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Đạm thực vật (đậu nành, gluten lúa mì), gia vị (muối, tiêu), lá chuối'],
      en: ['Plant-based protein (soybean, wheat gluten), seasonings (salt, pepper), banana leaf'],
      jp: ['植物性タンパク質（大豆、小麦グルテン）、調味料（塩、こしょう）、バナナの葉'],
    },
  },

  {
    id: 8,
    name: {
      vi: 'Nem Chay (2 Miếng)',
      en: 'Vegetarian Fermented Roll (2 Pieces)',
      jp: 'ビーガンネム（2個）',
    },
    description: {
      vi: 'Nem chay là phiên bản thực vật của nem chua, làm từ vỏ bưởi, đu đủ, thính gạo và gia vị lên men tự nhiên. Vị chua thanh, bùi thơm, cay nhẹ, rất hợp ăn kèm bánh cuốn hay các món cuốn chay',
      en: 'A plant-based version of the traditional fermented pork roll, made from pomelo peel, green papaya, roasted rice powder, and natural spices. Lightly sour, nutty, and mildly spicy—perfect with banh cuon or vegetarian rolls.',
      jp: '伝統的なネムチュアの植物性バージョン。ザボンの皮、青パパイヤ、炒り米粉、自然発酵のスパイスで作られ、ほどよい酸味と香ばしさ、そしてピリ辛感が特徴。バインクオンやビーガンロールとの相性抜群です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 8000,
    category: {
      id: 8,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Nguyên liệu thực vật (vỏ bưởi, đu đủ, củ sắn), thính gạo, tỏi, ớt, lá chuối'],
      en: ['Plant-based ingredients (pomelo peel, green papaya, jicama), roasted rice powder, garlic, chili, banana leaf'],
      jp: ['植物性材料（ザボンの皮、青パパイヤ、ヤムビーン）、炒り米粉、にんにく、唐辛子、バナナの葉'],
    },
  },

  {
    id: 9,
    name: {
      vi: 'Bánh Cam',
      en: 'Vietnamese Sesame Ball (Banh Cam)',
      jp: 'ベトナム風ごま団子（バインカム）',
    },
    description: {
      vi: 'Bánh cam món quà vặt dân dã Nam Bộ có lớp vỏ giòn phủ mè thơm, nhân đậu xanh ngọt bùi. Hương vị mộc mạc, giòn tan, gợi nhớ tuổi thơ và những gánh hàng rong xưa',
      en: 'A rustic Southern Vietnamese snack with a crispy sesame-coated shell and sweet mung bean filling. Crunchy, nostalgic, and full of childhood memories.',
      jp: 'サクサクのごま付き皮と甘い緑豆あんが特徴の、ベトナム南部の素朴なおやつ。懐かしさと屋台の思い出を呼び起こす一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 9000,
    category: {
      id: 9,
      name: {
        vi: 'Món chay',
        en: 'Vegetarian',
        jp: '菜食料理',
      }
    },
    ingredients: {
      vi: ['Bột nếp, bột gạo, đậu xanh, đường, mè (vừng)'],
      en: ['Glutinous rice flour, rice flour, mung beans, sugar, sesame seeds'],
      jp: ['もち米粉、米粉、緑豆、砂糖、ごま'],
    },
  },

  {
    id: 10,
    name: {
      vi: 'Bánh Cuốn Chà Bông Heo',
      en: 'Banh Cuon with Pork Floss',
      jp: '豚肉デンブ入りバインクオン',
    },
    description: {
      vi: 'Sự kết hợp độc đáo giữa lớp bánh mềm dẻo và ruốc thịt mặn ngọt, bông xốp. Ăn kèm hành phi và nước chấm chua ngọt, món ăn vừa lạ miệng vừa đậm chất Việt',
      en: 'A unique fusion of soft rice rolls and sweet-savory pork floss. Served with crispy shallots and tangy fish sauce, offering a flavorful twist on a classic Vietnamese dish.',
      jp: 'もちもちのライスロールと甘じょっぱい豚肉デンブのユニークな組み合わせ。揚げネギと甘酸っぱいヌクマムを添えて、ベトナムらしい味わいが楽しめる一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 44000,
    category: {
      id: 10,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, thịt heo (chà bông), mộc nhĩ, củ sắn, hành phi, nước mắm pha (ăn kèm)'],
      en: ['Rice flour, pork floss, wood ear mushrooms, jicama, fried shallots, mixed fish sauce (served on the side)'],
      jp: ['米粉、豚肉デンブ、きくらげ、ヤムビーン、揚げネギ、調合ヌクマム（添え）'],
    },
  },


  {
    id: 11,
    name: {
      vi: 'Bánh Cuốn Chà Bông Tôm',
      en: 'Banh Cuon with Dried Shrimp Floss',
      jp: '干しエビデンブ入りバインクオン',
    },
    description: {
      vi: 'Bánh cuốn ruốc tôm là sự hòa quyện giữa bánh gạo mềm và ruốc tôm cam hồng giòn nhẹ, đậm hương vị biển. Vị ngọt bùi của tôm khô kết hợp cùng bánh cuốn thanh mát, tạo nên trải nghiệm mới lạ, hấp dẫn.',
      en: 'Soft rice rolls paired with light, crispy dried shrimp floss in a beautiful pink-orange hue. A delightful blend of ocean flavor and refreshing texture for a unique Vietnamese experience.',
      jp: 'やわらかいライスロールと、オレンジピンク色のサクサクとした干しエビデンブが調和した一品。海の風味と爽やかな食感が融合した、ベトナムならではの魅力的な味わいです。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 44000,
    category: {
      id: 11,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, tôm khô (chà bông tôm), mộc nhĩ, củ sắn, hành phi, nước mắm pha (ăn kèm)'],
      en: ['Rice flour, dried shrimp floss, wood ear mushrooms, jicama, fried shallots, mixed fish sauce (served on the side)'],
      jp: ['米粉、干しエビデンブ、きくらげ、ヤムビーン、揚げネギ、調合ヌクマム（添え）'],
    },
  },

  {
    id: 12,
    name: {
      vi: 'Bánh Cuốn Nhân Thịt Đặc Biệt',
      en: 'Special Banh Cuon with Pork Filling',
      jp: '特製豚肉入りバインクオン',
    },
    description: {
      vi: 'Bánh cuốn đặc biệt cuộn nhân thịt heo xào mộc nhĩ, nấm hương, củ sắn, ăn kèm chả lụa thơm béo. Thưởng thức cùng nước mắm tỏi ớt và rau sống, món ăn đậm đà, tròn vị và thịnh soạn hơn bản thường.',
      en: 'A special version of Banh Cuon filled with stir-fried pork, wood ear mushrooms, shiitake mushrooms, and jicama, served with Vietnamese pork sausage (cha lua). Enjoy with garlic chili fish sauce and fresh herbs for a rich and hearty Vietnamese experience.',
      jp: '炒めた豚肉、きくらげ、しいたけ、ヤムビーンを包んだ特製バインクオン。香り豊かなチャールア（ベトナム風ハム）を添え、ニンニク入りチリヌクマムと香草とともに楽しむ、満足感のある一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 60000,
    category: {
      id: 12,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, thịt heo, mộc nhĩ, nấm hương, củ sắn, chả lụa, hành phi, rau thơm'],
      en: ['Rice flour, pork, wood ear mushrooms, shiitake mushrooms, jicama, Vietnamese pork sausage (cha lua), fried shallots, fresh herbs'],
      jp: ['米粉、豚肉、きくらげ、しいたけ、ヤムビーン、チャールア（ベトナム風ハム）、揚げネギ、香草'],
    },
  },


  {
    id: 13,
    name: {
      vi: 'Bánh Cuốn Nhân Thịt Gà Nấm',
      en: 'Banh Cuon with Chicken and Mushrooms',
      jp: '鶏肉ときのこ入りバインクオン',
    },
    description: {
      vi: 'Là phiên bản thanh đạm với thịt gà xào cùng nấm mèo, nấm hương và củ sắn, ít béo mà vẫn đậm đà. Ăn kèm hành phi và nước mắm chua ngọt, món ăn mang hương vị mới lạ nhưng quen thuộc.',
      en: 'A lighter variation filled with stir-fried chicken, wood ear mushrooms, shiitake mushrooms, and jicama. Low in fat yet flavorful, served with fried shallots and sweet & sour fish sauce for a unique but familiar Vietnamese taste.',
      jp: '炒めた鶏肉、きくらげ、しいたけ、ヤムビーンを包んだ、あっさりとしたバインクオン。脂肪が少なくても旨味があり、揚げネギと甘酸っぱいヌクマムを添えて、新鮮でありながらどこか懐かしいベトナムの味を楽しめます。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 48000,
    category: {
      id: 13,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, thịt gà, nấm mèo, nấm hương, củ sắn, hành phi, nước mắm pha'],
      en: ['Rice flour, chicken, wood ear mushrooms, shiitake mushrooms, jicama, fried shallots, mixed fish sauce'],
      jp: ['米粉、鶏肉、きくらげ、しいたけ、ヤムビーン、揚げネギ、調合ヌクマム'],
    },
  },

  {
    id: 14,
    name: {
      vi: 'Bánh Cuốn Nhân Thịt',
      en: 'Banh Cuon with Pork Filling',
      jp: '豚肉入りバインクオン',
    },
    description: {
      vi: 'Bánh cuốn nhân thịt món truyền thống Hà Nội với lớp vỏ mỏng mềm, cuộn nhân thịt heo xay xào mộc nhĩ, hành thơm. Ăn kèm chả lụa, rau thơm và nước mắm chua ngọt, tạo nên hương vị đậm đà, tinh tế​',
      en: 'A traditional Hanoi-style Banh Cuon with soft, thin rice rolls filled with stir-fried minced pork, wood ear mushrooms, and shallots. Served with Vietnamese pork sausage, herbs, and sweet-sour fish sauce for a rich and refined flavor.',
      jp: 'ハノイ伝統の豚肉入りバインクオン。やわらかく薄いライスロールに、炒めた豚ひき肉、きくらげ、香ばしいエシャロットを包みます。チャールア（ベトナム風ハム）、香草、甘酸っぱいヌクマムと一緒に楽しむ、風味豊かで上品な一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 48000,
    category: {
      id: 14,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo tẻ, thịt heo xay, mộc nhĩ, hành tím (hành khô), củ sắn, hành phi, chả lụa (ăn kèm)'],
      en: ['Rice flour, minced pork, wood ear mushrooms, shallots, jicama, fried shallots, Vietnamese pork sausage (served on the side)'],
      jp: ['米粉、豚ひき肉、きくらげ、赤エシャロット、ヤムビーン、揚げネギ、チャールア（添え）'],
    },
  },

  {
    id: 15,
    name: {
      vi: 'Bánh Cuốn Nhân Thịt Tôm Thịt Nấm',
      en: 'Southern Banh Cuon with Shrimp, Pork & Mushrooms',
      jp: 'エビ・豚肉・きのこ入り南部風バインクオン',
    },
    description: {
      vi: 'Bánh cuốn Nam Bộ với nhân tôm, thịt heo, nấm mèo và củ sắn xào thơm, mang vị ngọt đậm đà đặc trưng. Ăn nóng kèm hành phi và nước mắm đậm vị, món ăn vừa lạ miệng vừa đầy hấp dẫn',
      en: 'Southern-style Banh Cuon filled with stir-fried shrimp, pork, wood ear mushrooms, and jicama. Rich, naturally sweet flavor, served warm with crispy shallots and bold fish sauce—a delicious and enticing dish.',
      jp: 'エビ、豚肉、きくらげ、ヤムビーンを炒めて包んだ南部風バインクオン。自然な甘みと旨味が広がり、揚げネギと濃厚なヌクマムと一緒に温かくして味わう、クセになる美味しさです。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 60000,
    category: {
      id: 15,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, tôm tươi, thịt heo, mộc nhĩ, nấm hương, củ sắn, hành phi, nước mắm pha'],
      en: ['Rice flour, fresh shrimp, pork, wood ear mushrooms, shiitake mushrooms, jicama, fried shallots, mixed fish sauce'],
      jp: ['米粉、新鮮なエビ、豚肉、きくらげ、しいたけ、ヤムビーン、揚げネギ、調合ヌクマム'],
    },
  },

  {
    id: 16,
    name: {
      vi: 'Bánh Cuốn Nhân Trứng Thịt',
      en: 'Banh Cuon with Egg and Pork Filling',
      jp: '卵と豚肉入りバインクオン',
    },
    description: {
      vi: 'Với trứng gà hấp chín lòng đào trong lớp bánh mỏng, cuộn cùng thịt xào mộc nhĩ. Thưởng thức nóng kèm nước mắm hoặc nước dùng, món ăn béo ngậy, thơm đậm đà khó quên',
      en: 'Steamed rice rolls filled with soft-boiled egg and stir-fried pork with wood ear mushrooms. Served hot with fish sauce or broth, this rich and aromatic dish is truly unforgettable.',
      jp: 'とろっとした半熟卵と炒めた豚肉、きくらげを包んだ蒸しライスロール。ヌクマムまたはスープとともに熱々で楽しむ、コク深く香り豊かな忘れられない一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 54000,
    category: {
      id: 16,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo, trứng gà, thịt heo, mộc nhĩ, củ sắn, hành phi, nước chấm (nước dùng)'],
      en: ['Rice flour, chicken egg, pork, wood ear mushrooms, jicama, fried shallots, dipping sauce (or broth)'],
      jp: ['米粉、鶏卵、豚肉、きくらげ、ヤムビーン、揚げネギ、つけだれ（またはスープ）'],
    },
  },

  {
    id: 17,
    name: {
      vi: 'Bánh Ướt Không Có Nhân',
      en: 'Plain Steamed Rice Sheets (Thanh Tri Style)',
      jp: '具なしバインウオット（タインチー風）',
    },
    description: {
      vi: 'Bánh ướt không nhân, phiên bản gốc đơn giản từ Thanh Trì, gồm lớp bánh gạo mỏng dai, phủ mỡ hành và hành phi thơm. Ăn kèm chả quế, chả lụa và nước mắm pha loãng, mang vị thanh nhẹ mà tinh tế',
      en: 'A simple, original version of Banh Uot from Thanh Tri, featuring soft, chewy rice sheets topped with scallion oil and crispy shallots. Served with cinnamon pork roll, pork sausage, and light fish sauce for a delicate yet refined flavor.',
      jp: 'タインチー発祥のシンプルな具なしバインウオット。もちもちのライスシートにネギ油と揚げネギをのせ、チャークエ（シナモン風味の豚ハム）、チャールア、薄めたヌクマムと共に味わう、あっさりしながらも上品な味わいの一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 34000,
    category: {
      id: 17,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Bột gạo tẻ, nước, dầu hành, hành phi, chả quế (ăn kèm), nước mắm pha'],
      en: ['Rice flour, water, scallion oil, fried shallots, cinnamon pork roll (served on the side), mixed fish sauce'],
      jp: ['米粉、水、ネギ油、揚げネギ、チャークエ（添え）、調合ヌクマム'],
    },
  },


  {
    id: 19,
    name: {
      vi: 'Chả Lụa (1KG)',
      en: 'Vietnamese Pork Sausage (1KG)',
      jp: 'ベトナム風ポークソーセージ（1KG）',
    },
    description: {
      vi: 'Là món truyền thống Việt làm từ thịt heo giã nhuyễn, gói lá chuối và luộc chín, cho hương vị ngọt thơm, giòn dai, thoảng mùi tiêu và lá chuối. Thường dùng kèm bánh cuốn, bánh mì hoặc trong mâm cỗ ngày Tết',
      en: 'A traditional Vietnamese pork sausage made from finely pounded pork, wrapped in banana leaves and boiled. It offers a sweet, savory taste with a firm, bouncy texture and subtle notes of pepper and banana leaf. Commonly served with banh cuon, banh mi, or in Tet holiday feasts.',
      jp: '細かくたたいた豚肉をバナナの葉で包み、茹でて作るベトナムの伝統的なソーセージ。ほんのり甘く香ばしく、弾力のある食感に、コショウとバナナの葉の香りがほのかに広がります。バインクオンやバインミー、旧正月のごちそうにもよく使われます。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 300000,
    category: {
      id: 19,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Thịt heo nạc xay, nước mắm, tiêu xay, lá chuối'],
      en: ['Minced lean pork, fish sauce, ground pepper, banana leaf'],
      jp: ['豚赤身ひき肉、ヌクマム、粉コショウ、バナナの葉'],
    },
  },


  {
    id: 20,
    name: {
      vi: 'Chả Quế (1KG)',
      en: 'Vietnamese Cinnamon Pork Sausage (1KG)',
      jp: 'ベトナム風シナモンポークソーセージ（1KG）',
    },
    description: {
      vi: 'Chả quế là biến thể thơm nồng của chả lụa, thêm bột quế vào thịt heo xay rồi hấp và nướng sơ cho lớp vỏ rám vàng. Hương quế ấm áp hòa quyện cùng vị ngọt dai, rất hợp ăn kèm bánh cuốn nóng hoặc bánh mì.',
      en: 'A fragrant variation of Vietnamese pork sausage, chả quế is made by adding cinnamon powder to minced pork, then steamed and lightly grilled for a golden crust. The warm cinnamon aroma blends perfectly with the sweet, chewy texture—ideal with hot banh cuon or banh mi.',
      jp: 'チャークエは、チンピ（チャールア）にシナモンパウダーを加えた香り豊かなバリエーション。豚肉のひき肉にシナモンを混ぜ、蒸した後に軽く焼き上げて、香ばしい焼き色をつけます。甘く弾力のある食感とシナモンの温かみある香りが絶妙に調和し、バインクオンやバインミーとの相性も抜群です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 300000,
    category: {
      id: 20,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Thịt heo nạc xay, nước mắm, bột quế, tiêu, lá chuối'],
      en: ['Minced lean pork, fish sauce, cinnamon powder, pepper, banana leaf'],
      jp: ['豚赤身ひき肉、ヌクマム、シナモンパウダー、コショウ、バナナの葉'],
    },
  },

  {
    id: 21,
    name: {
      vi: 'Chả Quế/Chả Lụa (2 Miếng)',
      en: 'Cinnamon & Classic Pork Sausage (2 Slices)',
      jp: 'チャークエ／チャールア（2枚）',
    },
    description: {
      vi: 'Phần chả 2 miếng gồm chả lụa và chả quế thái mỏng, ăn kèm bánh cuốn nóng giúp tăng hương vị đậm đà. Chả lụa mềm ngọt, chả quế thơm cay nhẹ, tạo nên bữa sáng hài hòa, đậm chất Việt.',
      en: 'Two thin slices of Vietnamese pork sausage: classic (cha lua) and cinnamon-flavored (cha que), served with hot banh cuon to enhance the rich flavor. Soft and sweet cha lua pairs perfectly with the mildly spicy aroma of cha que for a well-balanced Vietnamese breakfast.',
      jp: 'チャールア（クラシック）とチャークエ（シナモン風味）の薄切り2枚セット。熱々のバインクオンと一緒に楽しむことで、味わいがさらに引き立ちます。チャールアはやわらかくほんのり甘く、チャークエはシナモンの香りと軽い辛味が調和し、ベトナムらしい朝食の一品です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 20000,
    category: {
      id: 21,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Thịt heo xay, nước mắm, tiêu; (chả quế có thêm bột quế), lá chuối'],
      en: ['Minced pork, fish sauce, pepper; (cha que includes cinnamon powder), banana leaf'],
      jp: ['豚ひき肉、ヌクマム、コショウ（チャークエにはシナモンパウダーを加える）、バナナの葉'],
    },
  },

  {
    id: 22,
    name: {
      vi: 'Hành Phi 1 Đĩa',
      en: 'Crispy Fried Shallots (1 Plate)',
      jp: '揚げネギ（1皿）',
    },
    description: {
      vi: 'Hành phi vàng giòn là gia vị không thể thiếu cho bánh cuốn, giúp tăng hương vị béo bùi và thơm đặc trưng. Được làm từ hành tím thái mỏng, phi vàng giòn thơm hấp dẫn',
      en: 'Golden crispy fried shallots are an essential topping for banh cuon, adding rich aroma and nutty flavor. Made from thinly sliced purple shallots fried until perfectly golden.',
      jp: 'バインクオンに欠かせない香ばしいトッピング、カリカリの揚げネギ。紫エシャロットを薄切りにし、きつね色になるまで揚げて仕上げた一皿です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 5000,
    category: {
      id: 22,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Hành tím, dầu ăn'],
      en: ['Purple shallots, cooking oil'],
      jp: ['紫エシャロット、食用油'],
    },
  },

  {
    id: 23,
    name: {
      vi: 'Hành Phi (1KG)',
      en: 'Crispy Fried Shallots (1KG)',
      jp: '揚げネギ（1KG）',
    },
    description: {
      vi: 'Được làm từ hành tím thái mỏng, phi giòn vàng ruộm theo cách truyền thống, tỏa hương thơm hấp dẫn. Là nguyên liệu quen thuộc, giúp tăng hương vị cho bánh cuốn, xôi, cháo, phở và nhiều món Việt khác.',
      en: 'Made from thinly sliced purple shallots fried until golden and crispy using a traditional method. A staple topping that enhances the flavor of banh cuon, sticky rice, porridge, pho, and many other Vietnamese dishes.',
      jp: '薄くスライスした紫エシャロットを伝統的な方法で黄金色にカリッと揚げたもの。バインクオン、おこわ、お粥、フォーなど、さまざまなベトナム料理の風味を引き立てる定番トッピングです。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 480000,
    category: {
      id: 23,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Hành tím, dầu thực vật, muối (một lượng nhỏ)'],
      en: ['Purple shallots, vegetable oil, salt (a small amount)'],
      jp: ['紫エシャロット、植物油、塩（少量）'],
    },
  },

  {
    id: 24,
    name: {
      vi: 'Nem Huế (1 Cây 200 GRAM)',
      en: 'Hue-Style Fermented Pork Roll (200g)',
      jp: 'フエ風発酵豚肉ロール（200g）',
    },
    description: {
      vi: 'Làm từ thịt heo sống lên men cùng bì, tỏi, ớt và thính, gói trong lá chuối. Vị chua dịu, cay nhẹ, giòn sần sật, thường ăn kèm bánh cuốn hoặc rau sống, tạo điểm nhấn đậm đà cho bữa ăn',
      en: 'Made from fermented raw pork mixed with pork skin, garlic, chili, and roasted rice powder, wrapped in banana leaves. It has a mildly sour, slightly spicy, and chewy texture—often served with banh cuon or fresh herbs to add bold flavor to the meal.',
      jp: '豚肉を生のまま皮、にんにく、唐辛子、炒り米粉と一緒に発酵させ、バナナの葉で包んだフエ風ネム。ほんのり酸味と軽い辛さ、コリコリとした食感が特徴で、バインクオンや生野菜とともに食べると、食卓にしっかりしたアクセントを加えてくれます。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 60000,
    category: {
      id: 24,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Thịt heo nạc, bì lợn, tỏi, ớt, thính gạo, lá chuối'],
      en: ['Lean pork, pork skin, garlic, chili, roasted rice powder, banana leaf'],
      jp: ['豚赤身肉、豚の皮、にんにく、唐辛子、炒り米粉、バナナの葉'],
    },
  },

  {
    id: 26,
    name: {
      vi: 'Nem Huế 1 Đĩa 2 Miếng',
      en: 'Hue-Style Fermented Pork (2 Pieces)',
      jp: 'フエ風発酵豚肉（2個）',
    },
    description: {
      vi: 'Gồm nem chua bóc sẵn, màu hồng nhạt, thơm mùi tỏi và thịt lên men. Vị chua thanh, cay nhẹ giúp cân bằng vị giác khi ăn kèm bánh cuốn, mang đậm nét ẩm thực cung đình Huế.',
      en: 'Served as two peeled pieces of light-pink fermented pork, fragrant with garlic and tangy aroma. The mild sourness and slight spiciness balance the taste perfectly when paired with banh cuon, reflecting the refined cuisine of Hue royal tradition.',
      jp: '淡いピンク色のネムチュア（発酵豚肉）2個入り。にんにくの香りと発酵肉の風味が広がり、ほんのり酸味と辛みがバインクオンとの相性抜群。フエの宮廷料理の繊細な味わいを感じさせる一皿です。',
    },
    image: 'https://i0.wp.com/mycogroup.com.vn/wp-content/uploads/2023/05/banh-cuon-ha-noi.jpg?resize=1020%2C574&ssl=1',
    price: 20000,
    category: {
      id: 26,
      name: {
        vi: 'Món mặn',
        en: 'Savory Dish',
        jp: '塩味料理',
      }
    },
    ingredients: {
      vi: ['Thịt heo, bì lợn, tỏi, ớt, tiêu hạt, thính gạo, lá chuối'],
      en: ['Pork, pork skin, garlic, chili, whole peppercorns, roasted rice powder, banana leaf'],
      jp: ['豚肉、豚の皮、にんにく、唐辛子、ホールペッパー、炒り米粉、バナナの葉'],
    },
  }

];

export default menuItems;