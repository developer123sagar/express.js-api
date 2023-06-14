// const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');


const vasesData = [
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de18",
    category: "vases",
    title: "TAYHAA",
    subtitle: "White & Brown Ceramic Flower Vase",
    seller: "Aashi Gifts",
    price: 625,
    MRP: 2500,
    disPercentage: "75%",
    product_details: {
      setContent: "1 flower vase",
      color: "White",
      pattern: " Floral design",
    },
    disclaimer:
      "As this product is handcrafted there might be a slight variations which is natural outcome and hence makes the product unique.",
    size: "Dimension: 6 cm x 6.5 cm x 15 cm(length x width x height)",
    material: "Ceramic",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21042564/2022/12/5/94bcda76-9758-48ed-985d-f9fd17b539881670214007617CeramicWhiteFlowerVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21042564/2022/12/5/fbe95de2-266b-4c88-9aa2-4c2fc7ea30241670214007583CeramicWhiteFlowerVase2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21042564/2022/12/5/0be3a95b-433c-4308-a684-0b0d3f9bd8781670214007633CeramicWhiteFlowerVase4.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de19",
    category: "vases",
    title: "Folkstorys",
    subtitle: "Brahmani Blue Table Vase",
    seller: "ARTSCAPE PROJECTS",
    price: 2410,
    MRP: 3444,
    disPercentage: "30%",
    product_details: {
      setContent: "1 flower vase",
      color: "Blue",
      pattern: "Solid",
    },
    size: "8 x 8 x16",
    material: "Ceramic",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17977620/2022/4/21/c2aa8745-928d-4e0d-ac64-c58c8860baa71650538659969Vases1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17977620/2022/4/21/ea20b90d-cc67-4ae9-a869-b219dd0cfa061650538659959Vases2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17977620/2022/4/21/136e7331-a1b0-45f9-897b-11d615d1c8831650538659947Vases4.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de20",
    category: "vases",
    title: "Folkstorys",
    subtitle: "Blue & White Halianthus Floral Handpainted Vase",
    seller: "ARTSCAPE PROJECTS",
    price: 1519,
    MRP: 3798,
    disPercentage: "60%",
    product_details: {
      setContent: "1 Vase",
      color: "Blue, white and yellow",
      pattern: "Halianthus Floral Handpainted",
    },
    size: "17.78 cm x 15.24 cm (Height x Diameter)",
    material: "Blue pottery",
    disclaimer:
      "For these handmade products, any slight imperfections in size, colour or placement of print are not considered defect. Depending on your screen resolutions there may be a slight variance in the colour of the image and the actual product",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14969492/2021/7/29/bbc56d68-6c62-4451-b575-1ebca220e8491627533565551HalianthusFloralHandpaintedVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14969492/2021/7/29/8e9a8ae7-a184-495b-87c8-a03a653f59921627533565664HalianthusFloralHandpaintedVase2.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de21",
    category: "vases",
    title: "BS AMOR",
    subtitle: "Silver-Toned Textured Flower Vase with Flowers",
    seller: "BS AMOR",
    price: 688,
    MRP: 1299,
    disPercentage: "47%",
    product_details: {
      setContent: "1 Vase with Flowers",
      color: "Silver toned",
    },
    size: "20.32 x12.7 cm",
    material: "Glass",
    disclaimer:
      "The flowers and leaves in this plant can be easily reattached if they come out",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19582014/2022/8/20/7dea503d-e803-439c-a618-242f94236b181660991254574Flowervase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19582014/2022/8/20/e60a57e2-cb1f-4535-8153-502ebfdf2f081660991254596Flowervase2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19582014/2022/8/20/9f6a5a0b-2edb-4ea5-b39a-375e4bf709c61660991254561Flowervase4.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de22",
    category: "vases",
    title: "Nestasia",
    subtitle: "White Solid Bouquet Vase",
    seller: "NEW LEAF RETAIL TECHNOLOGIES PRIVATE LIMITED",
    price: 1266,
    MRP: 2240,
    discount: 974,
    product_details: {
      setContent: "1 Vase",
      color: "White",
      pattern: "Solid",
    },
    size: "15cm x 12cm x 10.5cm(Length x width x height)",
    material: "Ceramic",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19246854/2022/7/25/bdf04500-976d-4ef9-83a4-ab624d5d915b1658754529102NestasiaWhiteSolidBouquetVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19246854/2022/7/25/f0ef1e43-fa2d-45bc-82c8-b799f7affe371658754529093NestasiaWhiteSolidBouquetVase2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19246854/2022/7/25/1c6e8392-eaae-4c05-b466-cf65b45da98a1658754529072NestasiaWhiteSolidBouquetVase4.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de23",
    category: "vases",
    title: "BS AMOR",
    subtitle:
      "Pack of 3 Transparent Textured Glass Flower Vases Style Centerpiece Diamond",
    seller: "BS AMOR",
    price: 529,
    MRP: 999,
    disPercentage: "47%",
    product_details: {
      setContent: "3 flower Vases",
      color: "Transparent",
      pattern: "Solid",
    },
    size: "9.5 cm x 9.5 cm x 7.5 (Length x Width x Height) each",
    material: "Glass",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19576044/2022/8/20/a0924369-a544-4ce7-a4ed-0a4eb861a18f1660981190498Vases1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19576044/2022/8/20/2de99e5e-0a34-4fb2-9e9e-c7ca83a37f601660981190507Vases2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19576044/2022/8/20/8536bdc6-f914-4455-980c-07ace0c158a41660981190470Vases3.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de24",
    category: "vases",
    title: "BS AMOR",
    subtitle: "Transparent Solid Glass Light LED Flower Vases",
    seller: "BS AMOR",
    price: 688,
    MRP: 1299,
    disPercentage: "47%",
    product_details: {
      setContent: "1 flower vase",
      color: "Transparent",
      pattern: "Solid",
    },
    material: "Glass",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20111786/2022/9/21/69f6a75a-aa21-4670-be68-2ff2324d3a621663748455035LightLEDClearGlassVaseforDecorHomeHandmadeModernLargeFlowerV1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20111786/2022/9/21/71d02aa5-0907-4400-b3b9-a7be1acda4451663748455023LightLEDClearGlassVaseforDecorHomeHandmadeModernLargeFlowerV2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20111786/2022/9/21/b3c8ae73-c3bd-49ce-9cb0-613853f247b11663748455057LightLEDClearGlassVaseforDecorHomeHandmadeModernLargeFlowerV3.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de25",
    category: "vases",
    title: "Nestasia",
    subtitle: "Nordic Pink Textured Ceramic Flower Vase",
    seller: "NEW LEAF RETAIL TECHNOLOGIES PRIVATE LIMITED",
    price: 2250,
    MRP: 3270,
    discount: 1020,
    product_details: {
      setContent: "1 flower vase",
      color: "Pink",
      pattern: "Textured",
    },
    material: "Ceramic",
    size: "7.6cm x 10.1 cm x 19.8 cm (Diameter(Top) x Diameter(Base) x Height)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21474732/2023/2/10/79b6478c-e8f7-475f-9ea1-0550010236171676022359290-Nestasia-Nordic-Pink-Textured-Ceramic-Flower-Vase-2071676022-1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21474732/2023/2/10/db19a38c-56b3-471e-a751-45b18ed01d271676022359277-Nestasia-Nordic-Pink-Textured-Ceramic-Flower-Vase-2071676022-2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21474732/2023/2/10/81f6807d-6483-4551-bdba-95fde753e6841676022359259-Nestasia-Nordic-Pink-Textured-Ceramic-Flower-Vase-2071676022-3.jpg",
    ],
  },
  {
    uid:"c948e4a8-a16e-446f-bc29-d410adc7de26",
    category: "vases",
    title: "Pure Home and Living",
    subtitle: "White Yellow Botanical Printed Ceramic Flower Vase",
    seller: " DLF Brands Pvt Ltd.",
    price: 4599,
    MRP: 6999,
    disPercentage: "32%",
    product_details: {
      setContent: "Flower vase",
      color: "White and Yellow",
      pattern: "Textured",
    },
    material: "Ceramic",
    size: "35.6 cm x 21.2 cm (Length x Width)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22053854/2023/2/20/435da699-06c7-4a87-ad15-09b7c2be375d1676896091778PureHomeandLivingWhiteYellowBotanicalPrintedCeramicFlowerVas1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22053854/2023/2/20/7851b6d3-b062-4e1c-8e40-973d0a75882a1676896091741PureHomeandLivingWhiteYellowBotanicalPrintedCeramicFlowerVas2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22053854/2023/2/20/e8ccd692-fe94-4f60-aa8d-5450eac136f41676896091676PureHomeandLivingWhiteYellowBotanicalPrintedCeramicFlowerVas7.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de27",
    category: "vases",
    title: "Pure Home and Living",
    subtitle: "Blue Solid Flower Vase",
    seller: "DLF Brands Pvt Ltd.",
    price: 529,
    MRP: 999,
    disPercentage: "47%",
    product_details: {
      setContent: "1 vase",
      color: "Blue",
      pattern: "Solid",
    },
    material: "Glass",
    size: "18 cm x 18 cm x 20 cm (Length x Width x Height)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19102186/2022/7/15/5a7a22b0-68ea-49bb-80ba-6c31ca0a9e431657878818687PureHomeandLivingBlueSolidFlowerVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19102186/2022/7/15/60ea5c82-d1d2-4e4c-90c6-a48537302de91657878818675PureHomeandLivingBlueSolidFlowerVase2.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de28",
    category: "vases",
    title: "Pure Home and Living",
    subtitle: "Blue Floral Patterned Medium Ceramic Flower Vase",
    seller: "DLF Brands Pvt Ltd.",
    price: 1749,
    MRP: 2999,
    disPercentage: "41%",
    product_details: {
      setContent: "Flower vase",
      color: "Blue",
      pattern: "Floral Patterned",
    },
    material: "Ceramic",
    size: "13 cm x 13 cm x 25 cm (Length x Width x Height)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22053820/2023/2/20/a8460717-025d-4b88-a184-72fcc064b0b81676890392406Vases1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22053820/2023/2/20/5d3d93c7-cc6b-4518-84f3-3557b08d28301676890392387Vases2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22053820/2023/2/20/6b94930a-6565-4427-a146-3a7f9161af7b1676890392369Vases5.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de29",
    category: "vases",
    title: "MARKET99",
    subtitle: "Green Decorative Ceramic Flower Vase",
    seller: " Market Ninety Nine Pvt. Ltd.",
    price: 519,
    MRP: 999,
    disPercentage: "48%",
    product_details: {
      setContent: "1 Flower vase",
      color: "Green",
    },
    material: "Ceramic",
    size: "19 cm x 9 cm x 9 cm (Length x Width x Height)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22358550/2023/3/20/3aff2c0d-af89-4ba2-b031-572d996dd9671679295537633MARKET99GreenDecorativeCeramicFlowerVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22358550/2023/3/20/9fcd6179-1367-4a70-958d-223022c6ba1b1679295537649MARKET99GreenDecorativeCeramicFlowerVase2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22358550/2023/3/20/55451037-38df-4b0c-998a-d3f48a35fbb91679295537689MARKET99GreenDecorativeCeramicFlowerVase6.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de30",
    category: "vases",
    title: "PUREZENTO",
    subtitle: "White Ceramic Orbit Shaped Flower Vase",
    seller: "JD Creations",
    price: 599,
    MRP: 999,
    disPercentage: "40%",
    product_details: {
      setContent: "1 Flower vase",
      color: "White",
      pattern: "Solid",
    },
    material: "Ceramic",
    size: "8 cm x 3.6 cm x 16 cm (Diameter(Top) x Diameter(Bottom) x Height)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21661390/2023/1/24/b93fe769-e21e-4809-92b9-08aedea9e6b01674548635271PUREZENTOWhiteCeramicOrbitShapedFlowerVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21661390/2023/1/24/7b3fe5aa-19bd-4434-a3d9-063550f9613c1674548635212PUREZENTOWhiteCeramicOrbitShapedFlowerVase2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21661390/2023/1/24/86c6db62-4a69-46c3-8577-84a216af5c401674548635240PUREZENTOWhiteCeramicOrbitShapedFlowerVase4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21661390/2023/1/24/c9e8bea6-2b51-405f-a9a5-f1daf54420be1674548635228PUREZENTOWhiteCeramicOrbitShapedFlowerVase6.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de31",
    category: "vases",
    title: "H&M",
    subtitle: "Transparent Glass Vase",
    seller: "H & M Hennes & Mauritz Retail Private Limited",
    price: 1104,
    MRP: 1299,
    disPercentage: "15%",
    product_details: {
      setContent: "1 Flower vase",
      color: "Transparent",
      pattern: "Textured",
    },
    material: "Glass",
    size: "19 cm x 6.5 cm(Height x Diameter)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21438646/2023/1/6/cb260dda-e5ba-40cf-ab4b-97cdcb9d6d171672996787639HMTransparentGlassVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21438646/2023/1/6/a95f8fd8-170b-4307-9821-91bd26b92b101672996787647HMTransparentGlassVase2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21438646/2023/1/6/7e591755-5963-4a7a-bc27-42bd441d1b3f1672996787631HMTransparentGlassVase3.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de32",
    category: "vases",
    title: "BS AMOR",
    subtitle: "Grey Solid Flower Vase",
    seller: "BS AMOR",
    price: 423,
    MRP: 799,
    disPercentage: "47%",
    product_details: {
      setContent: "1 Flower vase",
      color: "Grey",
      pattern: "Solid",
    },
    material: "Glass",
    size: "21.59 cm",
    rating: {
      rating: 4.3,
      ratedUser: 11,
      fiveStar: 6,
      fourStar: 3,
      threeStar: 1,
      twoStar: 1,
      oneStar: 0,
    },
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19569080/2022/8/19/7be7f45b-4d94-44f0-b98f-5c0273e6560f1660911920702Vases1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19569080/2022/8/19/080dea8f-8167-406c-9d42-178736ae295b1660911920722Vases2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19569080/2022/8/19/33c5bab5-0ed6-42b2-b8d8-bcba1655d2c41660911920691Vases4.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19569080/2022/8/19/bf750280-1eac-421a-b509-3d3c185632121660911920741Vases5.jpg",
    ],
  },
  {
    uid: "c948e4a8-a16e-446f-bc29-d410adc7de33",
    category: "vases",
    title: "DARTINGTON",
    subtitle: "Transparent Solid Wibble Large Vase",
    seller: "SEEBA INDUSTRIES PRIVATE LIMITED",
    price: 4559,
    MRP: 5699,
    disPercentage: "20%",
    product_details: {
      setContent: "1 Flower vase",
      color: "Transparent",
      pattern: "Solid",
    },
    material: "Glass",
    size: "36.2 cm x 15.6 cm x 15.4 cm(Length x Width x Height)",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16108676/2021/11/16/c5f9586a-b307-436b-8e4a-2cdd5c2327671637044435803DARTINGTONTransparentSolidWibbleLargeVase1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16108676/2021/11/16/279da0a3-91f2-47ef-b8b4-4556758dabe51637044435855DARTINGTONTransparentSolidWibbleLargeVase2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16108676/2021/11/16/36d22ab7-f7ab-48a9-9f0c-64fa94fe54cd1637044435751DARTINGTONTransparentSolidWibbleLargeVase3.jpg",
    ],
  },
];

module.exports = vasesData;
