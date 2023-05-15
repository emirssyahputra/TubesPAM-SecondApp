export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'samsung',
    productName: 'Samsung Galaxy S23 Ultra',
    productPrice: 13000000,
    description:
      '6.1" FHD+ Dynamic AMOLED 2x, 120Hz Adaptive Refresh Rate, 425ppi, 1,750nit (outdoor peak), Minus Lecet',
    isOff: true,
    productImage: require('../database/images/samsung/s233.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/s233.png'),
      require('../database/images/samsung/s231.png'),
      require('../database/images/samsung/s232.png'),
    ],
  },
  {
    id: 2,
    category: 'samsung',
    productName: 'Samsung Galaxy A72 5G',
    productPrice: 2500000,
    description:
      '6.7" Super AMOLED, 90Hz, 800 nits (HBM), Qualcomm SM7125 Snapdragon 720G (8 nm), Minus Baret Sehelai rambut',
    isOff: false,
    productImage: require('../database/images/samsung/a723.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/a723.png'),
      require('../database/images/samsung/a721.png'),
      require('../database/images/samsung/a722.png'),
    ],
  },
  {
    id: 3,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 13',
    productPrice: 9500000,
    description:
      '6.36" AMOLED, 120Hz, Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm), Minus Pemakaian',
    isOff: true,
    productImage: require('../database/images/xiaomi/mi133.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi133.png'),
      require('../database/images/xiaomi/mi131.png'),
      require('../database/images/xiaomi/mi132.png'),
    ],
  },
  {
    id: 4,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 13 Pro',
    productPrice: 12750000,
    description:
      '6.73" LTPO AMOLED 120Hz, Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm), Garansi Udah Abis',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi13p3.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi13p3.png'),
      require('../database/images/xiaomi/mi13p1.png'),
      require('../database/images/xiaomi/mi13p2.png'),
    ],
  },
  {
    id: 5,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 12T',
    productPrice: 4825000,
    description:
    '6.67" AMOLED, 120Hz, Mediatek Dimensity 8100-Ultra, Minus Pemakaian',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi12t3.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/xiaomi/mi12t3.png'),
      require('../database/images/xiaomi/mi12t1.png'),
      require('../database/images/xiaomi/mi12t2.png'),
    ],
  },
  {
    id: 6,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 12 Lite',
    productPrice: 3550000,
    description:
    '6.55" AMOLED, 120Hz, Qualcomm SM7325 Snapdragon 778G 5G (6 nm), Minus layar Retak Sedikit',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi12l3.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi12l3.png'),
      require('../database/images/xiaomi/mi12l1.png'),
      require('../database/images/xiaomi/mi12l2.png'),
    ],
  },
  {
    id: 7,
    category: 'samsung',
    productName: 'Samsung Galaxy A54 5G',
    productPrice: 3758000,
    description:
      '6.4" Super AMOLED, 120Hz, HDR10+, 1000 nits (HBM), Exynos 1380 (5 nm), Minus Pemakaian',
    isOff: true,
    productImage: require('../database/images/samsung/a543.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/a543.png'),
      require('../database/images/samsung/a541.png'),
      require('../database/images/samsung/a542.png'),
    ],
  },
  {
    id: 8,
    category: 'samsung',
    productName: 'Samsung Galaxy A53 5G',
    productPrice: 3440000,
    description:
      '6.5" Super AMOLED, 120Hz, 800 nits (HBM), Exynos 1280 (5 nm), Minus Kotak',
    isOff: false,
    productImage: require('../database/images/samsung/a533.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/samsung/a533.png'),
      require('../database/images/samsung/a531.png'),
      require('../database/images/samsung/a532.png'),
    ],
  },
  {
    id: 9,
    category: 'xiaomi',
    productName: 'Xiaomi Mi 13 Ultra',
    productPrice: 11456000,
    description:
    '6.73" LTPO AMOLED 120Hz, Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm), Tidak Ada Kendala',
    isOff: false,
    productImage: require('../database/images/xiaomi/mi13u3.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/mi13u3.png'),
      require('../database/images/xiaomi/mi13u1.png'),
      require('../database/images/xiaomi/mi13u2.png'),
    ],
  },
  {
    id: 10,
    category: 'xiaomi',
    productName: 'Xiaomi Redmi Note 11',
    productPrice: 1785000,
    description:
    '6.43" AMOLED, 90Hz, Qualcomm SM6225 Snapdragon 680 4G (6 nm), Minus Lecet Pemakaian',
    isOff: false,
    productImage: require('../database/images/xiaomi/r113.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/xiaomi/r113.png'),
      require('../database/images/xiaomi/r111.png'),
      require('../database/images/xiaomi/r112.png'),
    ],
  },
];
