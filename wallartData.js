const crypto = require("crypto");

const wallartData = [
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "999Store",
    subtitle:
      "Set Of 5 Gold-Toned & Purple Blessing Buddha With Flowers Wall Art Frames",
    seller: "AML Electronics",
    rating: {
      rating: 4.3,
      ratedUser: 106,
      fiveStar: 63,
      fourStar: 28,
      threeStar: 8,
      twoStar: 0,
      oneStar: 7,
    },
    price: 1549,
    MRP: 4999,
    disPercentage: "69%",
    product_details: {
      setContent: " 5 Wall art frames",
      type: "Wall paintings",
      color: "Gold-toned and purple",
      pattern: "Blessing buddha with flowers",
    },
    features:
      "High definition matte modern stylish printing wall frames.Picture photo printed on high quality vynl and then MDF to give decorative look. Note: Clips inside the box",
    size: "76 cm x 26 cm (Height x Width) Each",
    material: "Vynl",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/6/22/68258cdf-2b97-4d33-bf18-f72cb4e05a4a1624348192434-1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/6/22/4c40ff82-bd04-4a37-b26b-5bc975afd6f91624348192445-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/6/22/a26abe53-e7b9-492b-8619-c35c9f7355801624348192458-3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "The Art House",
    subtitle: "Set of 3 Floral Painting Canvas Wall Art",
    seller: "AARA CREATIONS",
    price: 4749,
    MRP: 9499,
    disPercentage: "50%",
    product_details: {
      setContent: "3 Wall arts",
      type: "Painting",
      color: "Teal blue & White",
      pattern: "Floral",
    },
    size: "50.6 cm x 76.2 cm(length x width) each",
    material: "Canvas",
    care: "Protect the artwork from direct exposure to sunlight",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20482334/2022/10/20/0d8e2dab-5a2a-4c67-8b01-54f5928c652d1666275195479TheArtHouseSetof3AbstractPaintingCanvasWallArt1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20482334/2022/10/20/1f0b3f75-f62b-477e-b499-d5646eaa759c1666275195498TheArtHouseSetof3AbstractPaintingCanvasWallArt2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20482334/2022/10/20/ad9a9032-7e77-4a09-b635-8fba05bb4cf91666275195469TheArtHouseSetof3AbstractPaintingCanvasWallArt3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "RANDOM",
    subtitle: "Teal Green & Gold Toned Golden Tree & Deer Wall Art",
    seller: "HALOS CREATIONS PRIVATE LIMITED",
    price: 1582,
    MRP: 6330,
    disPercentage: "75%",
    product_details: {
      setContent: "One Wall art",
      type: "Wall art",
      color: "Teal Green & Gold-toned",
    },
    size: "26cm X 76cm X 0.5cm (Length x Width x Height)",
    material: "Canvas",
    care: "Wipe with dry & Clean cloth to remove dust",
    rating: {
      rating: 4.3,
      ratedUser: 8,
      fiveStar: 5,
      fourStar: 2,
      threeStar: 0,
      twoStar: 0,
      oneStar: 1,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20660012/2022/11/8/5f64100c-94ee-4d1f-9cda-394639bfcefb1667890709398RandomPrintedGoldenTreeDeerMDFVinylePaintings1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20660012/2022/11/8/7d4875c8-5b58-4f79-b7ed-c2012c3470721667890709421RandomPrintedGoldenTreeDeerMDFVinylePaintings2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20660012/2022/11/8/f2dd3432-1174-4035-a870-6acf24c48dd81667890709410RandomPrintedGoldenTreeDeerMDFVinylePaintings3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "999Store",
    subtitle: "Set Of 5 White & Green The Blessing Buddha Wall Art Frames",
    seller: "AML Electronics",
    price: 1249,
    MRP: 4999,
    disPercentage: "75%",
    product_details: {
      setContent: "5 Wall arts",
      type: "Paintings",
      color: "White and green",
      pattern: "The blessing buddha",
    },
    size: "76 cm x 26 cm (Height x Width) each",
    material: "Vinyl with MDF frame",
    care: "Wipe with dry & Clean cloth to remove dust",
    rating: {
      rating: 4.5,
      ratedUser: 122,
      fiveStar: 84,
      fourStar: 28,
      threeStar: 5,
      twoStar: 2,
      oneStar: 3,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/6/22/3b393536-3b7a-44f9-8d67-a396ca7c5e591624347823641-1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/6/22/774b9be5-90eb-4fe3-bef9-6c1e03fd3df61624347823650-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/6/22/6bcb0b4f-2e9f-4b08-a1f7-1926f8a59bd71624347823660-3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "Perpetual",
    subtitle: "Set Of 5 Radha Krishna Painting 3d Scenery Wall Art",
    seller: "S. S TRADEMART",
    price: 1319,
    MRP: 3299,
    disPercentage: "60%",
    product_details: {
      setContent: "5 Paintings",
      type: "Paintings",
      color: "Blue & Pink",
    },
    size: "125 CM X 60 CM",
    material: "Wood",
    care: "Wipe with dry & Clean cloth to remove dust",
    rating: {
      rating: 4,
      ratedUser: 22,
      fiveStar: 13,
      fourStar: 4,
      threeStar: 0,
      twoStar: 3,
      oneStar: 2,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21375946/2023/1/1/b9784148-f12c-4936-b6c8-09f06adabb821672536605735WallDecor1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21375946/2023/1/1/9405a809-08b3-476b-a66f-fce506d6ef091672536605703WallDecor3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21375946/2023/1/1/6302fb2e-eed8-4461-b816-1bd616a40e0d1672536605745WallDecor6.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21375946/2023/1/1/aba564cc-f1f4-4c82-a687-aa36fc343c5f1672536605657WallDecor5.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "RANDOM",
    subtitle: "Set Of 5 Blue & Green Peacock Printed Framed Wall Art",
    seller: "HALOS CREATIONS PRIVATE LIMITED",
    price: 1582,
    MRP: 6330,
    disPercentage: "75%",
    product_details: {
      setContent: "5 Wall Arts",
      type: "Paintings",
      color: "Blue & Green",
      pattern: "Printed",
    },
    size: "120cm x 76cm x 0.5cm(Length x Width x Height) each",
    material: "Canvas",
    care: "Wipe with dry & Clean cloth to remove dust",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22325648/2023/3/14/6d1e58c1-1421-45f4-8d9d-de90fa55f0d11678790543425RandomPrintedBeautifulPeacockMDFVinylePaintings1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22325648/2023/3/14/9c2f66f5-fa48-49a0-a027-38ac07bfa94b1678790543395RandomPrintedBeautifulPeacockMDFVinylePaintings2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22325648/2023/3/14/c8701bb4-c37a-4675-9f25-8e3b14b045db1678790543409RandomPrintedBeautifulPeacockMDFVinylePaintings3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "RANDOM",
    subtitle:
      "5 Pieces Blue & Yellow Printed Blooming Flower Framed Wall Painting",
    seller: "HALOS CREATIONS PRIVATE LIMITED",
    price: 1582,
    MRP: 6330,
    disPercentage: "75%",
    product_details: {
      setContent: "5 wall art",
      type: "Paintings",
      color: "Blue & Yellow",
      pattern: "Printed blooming flower painting",
    },
    size: "24 cm x 76 cm (Length x Height) each",
    material: "Canvas, Vinyle, MDF",
    care: "Wipe with dry & Clean cloth to remove dust",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22325668/2023/3/14/55c3c334-740e-4627-99bf-e7025f81a1a81678795716670RandomPrintedBloomingFlowerMDFVinylePaintings1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22325668/2023/3/14/f2cb4ac1-302e-4c59-8996-f44120cb87321678795716638RandomPrintedBloomingFlowerMDFVinylePaintings2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22325668/2023/3/14/18143dc5-5680-45ff-ae01-6d92f948719b1678795716655RandomPrintedBloomingFlowerMDFVinylePaintings3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "The Art House",
    subtitle: "Black & Yellow Printed Abstract Wood Wall Art",
    seller: "AARA CREATIONS",
    price: 2249,
    MRP: 7499,
    disPercentage: "70%",
    product_details: {
      setContent: "1 wall paintings",
      type: "Wall Painting",
      color: "Black & Yellow",
      pattern: "Abstract",
    },
    size: "76 cm x 76 cm (width x length in cm)",
    material: "Canvas & Wood",
    rating: {
      rating: 3.1,
      ratedUser: 14,
      fiveStar: 5,
      fourStar: 2,
      threeStar: 1,
      twoStar: 1,
      oneStar: 5,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18564560/2022/6/2/56248a37-8d1c-4e50-acc1-8d12e4ac8d551654164751985ABSTRACTPAINTING30X30INCHES1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18564560/2022/6/2/2ea56904-8206-489d-b94f-674ee1c9748e1654164751959ABSTRACTPAINTING30X30INCHES2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18564560/2022/6/2/d8c0ecc1-266a-424d-92d6-f3ff00d759691654164751996ABSTRACTPAINTING30X30INCHES3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "Perpetual",
    subtitle: "Black & Blue 5 Pcs Adiyogi Painting Wall Art",
    seller: " S. S TRADEMART",
    price: 1349,
    MRP: 2999,
    disPercentage: "55%",
    product_details: {
      setContent: "5 Pcs Wall Art",
      type: "Wall Painting",
      color: "Black, blue and white",
    },
    size: "60.96 cm x 1.27 m",
    material: "Wood",
    care: "Wipe with clean, dry cloth to remove dust",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21816040/2023/2/2/50d2923b-5631-47b0-aad3-89b770cbe5001675347872485WallDecor1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21816040/2023/2/2/d2d37c91-f806-4a84-a203-6d013e2581f21675347872470WallDecor2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21816040/2023/2/2/daca31f3-b53e-42fa-adbf-37eaf719faf91675347872443WallDecor3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21816040/2023/2/2/7ba9e5d2-8b40-4e39-a67d-09e9c8877d2c1675347872458WallDecor6.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "Perpetual",
    subtitle: "Set Of 5 Framed Painting Wall Art for Home Decoration",
    seller: " S. S TRADEMART",
    price: 2399,
    MRP: 5999,
    disPercentage: "60%",
    product_details: {
      setContent: "Set of 5 Uv multi effect self adhesive paintings",
      type: "Wall Painting",
    },
    size: "(150 X 90 CM)",
    material: "Wood",
    care: "Wipe with clean, dry cloth to remove dust",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21218806/2022/12/17/4c10a3c4-c622-44af-afdd-a72ed54721c61671229809226WallDecor1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21218806/2022/12/17/fc646666-064a-4f77-af81-42dad3a9e14e1671229809202WallDecor4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21218806/2022/12/17/5cc924a7-cbe9-4312-aa23-bdc73eb0a1e61671229809237WallDecor3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21218806/2022/12/17/51fb1a7f-6ef5-492e-957b-99126334e6941671229809186WallDecor5.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "SAF",
    subtitle: "Purple Set of 5 Radha Krishna Painting Wall Art",
    seller: "SAGAR ART N FRAMES",
    price: 1367,
    MRP: 3599,
    disPercentage: "62%",
    product_details: {
      setContent: "5 pcs wall painting",
      color: "Purple",
      type: "Wall Painting",
    },
    size: "45.72 cm X 76.2 cm",
    material: "MDF",
    care: "Wipe with clean, dry cloth to remove dust",
    rating: {
      rating: 4.4,
      ratedUser: 140,
      fiveStar: 100,
      fourStar: 10,
      threeStar: 20,
      twoStar: 0,
      oneStar: 10,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20235206/2022/9/30/03c419d5-9ec6-48ff-a616-695cd20919fe1664536208327WallDecor1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20235206/2022/9/30/536e8ec6-0072-4f39-b719-e98d927cc9ec1664536208346WallDecor2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20235206/2022/9/30/013595b0-5700-4961-9227-3935857661141664536208336WallDecor3.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "Art Street",
    subtitle: "Set Of 2 White & Green Flower Pots Framed Canvas Wall Art",
    seller: "SAGAR ART N FRAMES",
    price: 900,
    MRP: 3000,
    disPercentage: "70%",
    product_details: {
      setContent: "2 wall arts",
      color: "White, green and black",
      type: "Wall Painting",
    },
    size: "43.18 cm x 33.02 cm (Height x Width) each",
    material: "Cotton canvas",
    care: "Wipe with a clean, dry cloth when needed",
    rating: {
      rating: 4.5,
      ratedUser: 97,
      fiveStar: 67,
      fourStar: 23,
      threeStar: 2,
      twoStar: 3,
      oneStar: 2,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/c16ab864-f389-4d46-8cd8-2ebe0a45b37d1598513136418ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/f9418531-87e6-4445-add8-57d2b01eedad1598513136501ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/f407e969-80b2-4ecc-b1ef-3aceebb3f6481598513136576ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/c5d05d2f-bc5d-4642-8513-26e3f0e2c8ca1598513136641ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt4.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "999Store",
    subtitle: "Grey & Red Leaves Printed Canvas Wall Art",
    seller: "SQUARE EDGE",
    price: 1019,
    MRP: 5999,
    disPercentage: "83%",
    product_details: {
      setContent: "1 Painting",
      color: "Grey, red and black",
      type: "Wall Painting",
      pattern: "Solid Frame",
    },
    size: "60.96 cm x 60.96 cm ( Length x Width )",
    material: "Canvas",
    care: "Wipe with a clean, dry cloth when needed",
    rating: {
      rating: 4.3,
      ratedUser: 29,
      fiveStar: 18,
      fourStar: 7,
      threeStar: 2,
      twoStar: 0,
      oneStar: 2,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/c16ab864-f389-4d46-8cd8-2ebe0a45b37d1598513136418ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/f9418531-87e6-4445-add8-57d2b01eedad1598513136501ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/f407e969-80b2-4ecc-b1ef-3aceebb3f6481598513136576ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12341520/2020/8/27/c5d05d2f-bc5d-4642-8513-26e3f0e2c8ca1598513136641ArtStreetSetOf2WhiteGreenFlowerPotsFramedCanvasWallArt4.jpg",
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "wallart",
    title: "Gallery99",
    subtitle: "Multioloured Lucky Dream Catcher Texture Paper Framed Art Print",
    seller: "INTEXTURE GALLERY 99 PRIVATE LIMITED",
    price: 759,
    MRP: 999,
    disPercentage: "24%",
    product_details: {
      setContent: "1 Wall Art",
      color: "Multicolored",
      type: "Wall Painting",
    },
    size: "33.65 cm x 3.81 x 48.89 cm (length x width x height)",
    material: "Paper",
    care: "Dust with dry cloth",
    primaryImage:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18076948/2022/4/30/18c86e23-67ba-4eee-8ab1-6335371befbb1651263622209WallDecor1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18076948/2022/4/30/4b9eb979-fbce-42d6-9e8a-5bd38242186c1651263622197WallDecor2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18076948/2022/4/30/d9dd2b8e-7b46-4a45-987f-ebe2332bb8da1651263622217WallDecor3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18076948/2022/4/30/b41d6a65-07e4-4b92-aae7-88c23c732bbf1651263622173WallDecor4.jpg",
    ],
  },
];

module.exports = wallartData;
