// C:\sea-home\src\features\locations\data\rentalsData.js

const baseListings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    badges: [
      { label: "Verified", tone: "dark" },
      { label: "New", tone: "light" },
    ],
    location: "Galle, Sri Lanka",
    title: "Oceanfront Villa with Infinity Pool",
    description:
      "A stunning beachfront villa with panoramic sea views, a private infinity pool, and direct access to a secluded sandy beach.",
    beds: 4,
    baths: 3,
    area: "3,200 sqft",
    price: 1200,
    lkr: "LKR 365,000",
    tag: "Monthly lease",
    rating: 4.9,
    reviews: 128,
    available: "Available now",
    liked: false,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Featured", tone: "dark" }],
    location: "Colombo 07, Sri Lanka",
    title: "Modern City Apartment",
    description:
      "Sleek high-rise apartment in the heart of Colombo with skyline views, gym, rooftop pool, and 24/7 concierge service.",
    beds: 3,
    baths: 2,
    area: "1,850 sqft",
    price: 850,
    lkr: "LKR 258,000",
    tag: "Monthly lease",
    rating: 4.7,
    reviews: 94,
    available: "Available now",
    liked: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Verified", tone: "dark" }],
    location: "Mirissa, Sri Lanka",
    title: "Tropical Beach House",
    description:
      "Charming wooden beach house surrounded by palm trees, just 30 meters from the surf. Perfect for a relaxed coastal lifestyle.",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    price: 650,
    lkr: "LKR 198,000",
    tag: "Short term",
    rating: 4.8,
    reviews: 156,
    available: "Available Dec 1",
    liked: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    badges: [
      { label: "New", tone: "light" },
      { label: "Luxury", tone: "dark" },
    ],
    location: "Bentota, Sri Lanka",
    title: "Riverside Luxury Retreat",
    description:
      "Elegant riverside estate with private jetty, tropical gardens, and a designer pool. A rare blend of privacy and luxury.",
    beds: 5,
    baths: 4,
    area: "4,500 sqft",
    price: 1800,
    lkr: "LKR 548,000",
    tag: "Monthly lease",
    rating: 5.0,
    reviews: 62,
    available: "Available now",
    liked: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Verified", tone: "dark" }],
    location: "Nuwara Eliya, Sri Lanka",
    title: "Hill Country Cottage",
    description:
      "Cozy colonial-style cottage in the cool hill country, with fireplace, mountain views, and a private tea garden.",
    beds: 3,
    baths: 2,
    area: "1,600 sqft",
    price: 550,
    lkr: "LKR 167,000",
    tag: "Monthly lease",
    rating: 4.6,
    reviews: 87,
    available: "Available Jan 15",
    liked: false,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Featured", tone: "dark" }],
    location: "Negombo, Sri Lanka",
    title: "Lagoon View Bungalow",
    description:
      "Peaceful bungalow overlooking the Negombo lagoon, with sunset-facing deck, kayak access, and tropical garden.",
    beds: 2,
    baths: 1,
    area: "980 sqft",
    price: 420,
    lkr: "LKR 128,000",
    tag: "Short term",
    rating: 4.5,
    reviews: 73,
    available: "Available now",
    liked: false,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Verified", tone: "dark" }],
    location: "Unawatuna, Sri Lanka",
    title: "Bay View Modern Villa",
    description:
      "Contemporary villa above Unawatuna Bay with floor-to-ceiling windows, infinity edge pool, and sunset terrace.",
    beds: 4,
    baths: 3,
    area: "2,900 sqft",
    price: 1100,
    lkr: "LKR 335,000",
    tag: "Monthly lease",
    rating: 4.9,
    reviews: 143,
    available: "Available now",
    liked: false,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "New", tone: "light" }],
    location: "Kandy, Sri Lanka",
    title: "Lakeside Family Home",
    description:
      "Spacious family home near Kandy Lake, with mature gardens, covered veranda, and easy access to the city center.",
    beds: 4,
    baths: 3,
    area: "2,400 sqft",
    price: 700,
    lkr: "LKR 213,000",
    tag: "Monthly lease",
    rating: 4.7,
    reviews: 58,
    available: "Available Feb 1",
    liked: false,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Luxury", tone: "dark" }],
    location: "Tangalle, Sri Lanka",
    title: "Clifftop Ocean Estate",
    description:
      "Dramatic clifftop estate with 180° ocean views, private chef's kitchen, and a 25-meter lap pool overlooking the sea.",
    beds: 5,
    baths: 5,
    area: "5,200 sqft",
    price: 2200,
    lkr: "LKR 670,000",
    tag: "Monthly lease",
    rating: 5.0,
    reviews: 41,
    available: "Available now",
    liked: false,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Verified", tone: "dark" }],
    location: "Hikkaduwa, Sri Lanka",
    title: "Surfside Garden Villa",
    description:
      "Bright and airy villa steps from Hikkaduwa's famous surf break, with lush tropical garden and outdoor shower.",
    beds: 3,
    baths: 2,
    area: "1,750 sqft",
    price: 780,
    lkr: "LKR 237,000",
    tag: "Short term",
    rating: 4.6,
    reviews: 112,
    available: "Available now",
    liked: false,
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "Featured", tone: "dark" }],
    location: "Colombo 03, Sri Lanka",
    title: "Seafront Penthouse",
    description:
      "Top-floor penthouse on Marine Drive with wraparound terrace, private elevator, and uninterrupted Indian Ocean views.",
    beds: 3,
    baths: 3,
    area: "2,100 sqft",
    price: 1500,
    lkr: "LKR 457,000",
    tag: "Monthly lease",
    rating: 4.9,
    reviews: 77,
    available: "Available Mar 1",
    liked: false,
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    badges: [{ label: "New", tone: "light" }],
    location: "Ella, Sri Lanka",
    title: "Mountain View Treehouse",
    description:
      "Unique eco treehouse overlooking Ella Gap, with wrap-around deck, outdoor bath, and direct hiking trail access.",
    beds: 1,
    baths: 1,
    area: "620 sqft",
    price: 320,
    lkr: "LKR 97,000",
    tag: "Short term",
    rating: 4.8,
    reviews: 201,
    available: "Available now",
    liked: false,
  },
];

// Extra mock listings (ids 13 to 36) so pagination has more pages
const extraLocations = [
  "Galle Fort, Sri Lanka",
  "Colombo 05, Sri Lanka",
  "Mount Lavinia, Sri Lanka",
  "Kandy Hills, Sri Lanka",
  "Bentota, Sri Lanka",
  "Weligama, Sri Lanka",
  "Negombo, Sri Lanka",
  "Nuwara Eliya, Sri Lanka",
  "Arugam Bay, Sri Lanka",
  "Trincomalee, Sri Lanka",
  "Ahangama, Sri Lanka",
  "Kalutara, Sri Lanka",
];

const extraTitles = [
  ["Lagoon Edge Bungalow", "Peaceful lagoon-side bungalow with a shaded verandah, fruit garden, and easy access to the water."],
  ["Hillside Tea Estate Home", "Quiet family house surrounded by tea fields, with a wide terrace and cool mountain air year-round."],
  ["Coastal Studio Loft", "Bright open-plan loft a short walk from the beach, ideal for short stays or a compact holiday base."],
  ["Garden Courtyard Villa", "Traditional villa built around a central courtyard, with a plunge pool and shaded dining area."],
  ["Surf View Apartment", "Modern apartment with balcony views of the waves, rooftop access, and secure parking."],
  ["Heritage Stone House", "Restored stone house with original timber beams, a private garden, and a fireplace in the main room."],
  ["Cliffside Retreat", "Secluded retreat on the cliffs with ocean breezes, an outdoor shower, and a glass-walled lounge."],
  ["Urban Family Townhouse", "Three-level townhouse in a quiet residential street, with a rooftop terrace and a two-car garage."],
];

const extraImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
];

const availability = [
  "Available now",
  "Available Dec 1",
  "Available Jan 15",
  "Available Feb 1",
];

const extraListings = Array.from({ length: 24 }, (_, k) => {
  const id = k + 13;
  const [title, description] = extraTitles[k % extraTitles.length];
  const price = 300 + ((k * 137) % 1200);
  const beds = 1 + (k % 5);
  const baths = Math.max(1, beds - 1);

  const badges =
    k % 3 === 0
      ? [{ label: "New", tone: "light" }]
      : k % 3 === 1
      ? [{ label: "Verified", tone: "dark" }]
      : [{ label: "Featured", tone: "dark" }];

  return {
    id,
    image: extraImages[k % extraImages.length],
    badges,
    location: extraLocations[k % extraLocations.length],
    title,
    description,
    beds,
    baths,
    area: `${(600 + beds * 380).toLocaleString()} sqft`,
    price,
    lkr: `LKR ${(price * 300).toLocaleString()}`,
    tag: k % 2 === 0 ? "Monthly lease" : "Short term",
    rating: Number((4.5 + (k % 6) * 0.1).toFixed(1)),
    reviews: 40 + ((k * 17) % 180),
    available: availability[k % availability.length],
    liked: false,
  };
});

export const rentalsData = [...baseListings, ...extraListings];

export default rentalsData;