const crypto = require("crypto");

const planterData = [
  {
    id: crypto.randomUUID(),
    title: "Homesake",
    subtitle: "Set Of 2 Beige Macrame Plant Hangers Without Pot",
    rating: {
      rating: 4.4,
      ratedUser: 376,
      fiveStar: 237,
      fourStar: 77,
      threeStar: 35,
      twoStar: 11,
      oneStar: 16,
    },
    price: 699,
    product_details: {
      setContent: "2 Macrame plant hanger",
      matetial: "Cotton- Rope, Metal- Hook",
      color: "Beige",
      pattern: "Solid",
    },
    feature1:
      "Our plant hangers are made of high quality natural cotton thread, hand-woven by artisans.",
    feature2:
      "The hangers are durable, non-deformable, corrosion-resistant and long-term.",
    feature3: "Pot not included",
    size: "1.7 x 0.5 x 0.5 meters (each)",
    material1: "Metal, Cotton",
    material2:
      "Wipe it with soft, clean and damp cloth to remove dirt or stain",
    primaryImage:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15292382/2021/8/28/0147767f-9631-426f-a56f-64d253b14ef61630140611270Planters1.jpg",
    additionalImages: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15292382/2021/8/28/cd5a47e0-c607-4745-868e-1f91da6d88801630140610860Planters2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15292382/2021/8/28/8a83813c-ff25-494b-931a-23507777db701630140611102Planters5.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15292382/2021/8/28/3271e6cc-330b-4496-8b23-8844069e971b1630140610495Planters3.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15292382/2021/8/28/0cf56c95-04e8-4954-b5c8-a4d3dd7c719e1630140610620Planters6.jpg",
    ],
  },
  
];

module.exports = planterData;