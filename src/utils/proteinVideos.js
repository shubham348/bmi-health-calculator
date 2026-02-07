const Chicken = "Chicken";
const Egg = "Eggs";
const Oats = "Oats";
const Veg = "Eggs";
const Snacks = "Snacks";
const Breakfast = "Breakfasts";

export function formatYoutubeUrls(videoItems = []) {
  return videoItems
    .map(item => {
      const url = typeof item === "string" ? item : item.url;
      const category = typeof item === "string"
        ? "general"
        : item.category || "general";

      try {
        const parsedUrl = new URL(url);
        let videoId = "";

        if (parsedUrl.hostname.includes("youtube.com")) {
          videoId = parsedUrl.searchParams.get("v");
        } else if (parsedUrl.hostname.includes("youtu.be")) {
          videoId = parsedUrl.pathname.replace("/", "");
        }

        if (!videoId) return null;

        return {
          videoId,
          url,
          category
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

export const youtubeChannels = [
  {
    name: "Fit Tuber",
    url: "https://www.youtube.com/@FitTuber"
  },
  {
    name: "Food Fitness & Fun",
    url: "https://www.youtube.com/@FoodFitnessFun"
  },
  {
    name: "Rohit Khatri Fitness",
    url: "https://www.youtube.com/@RohitKhatriFitness"
  },
  {
    name: "Guru Mann Fitness",
    url: "https://www.youtube.com/@GuruMannFitness"
  },
  {
    name: "MyFitnessPal India",
    url: "https://www.youtube.com/@myfitnesspal"
  },
  {
    name: "Yatinder Singh",
    url: "https://www.youtube.com/@YatinderSinghOfficial"
  }
];

//EGGS
const eggrecipies = [
  {
    url: "https://www.youtube.com/watch?v=ZR8njWAwAlo",
    category: Egg
  },

  {
    url: "https://www.youtube.com/watch?v=SYS3x6WA9M4",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=yyi55ZrpJ0E",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=1Pvuhs4INos",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=QsTZLhS99qQ",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=9ufJ2yFrYHw",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=5rBZ9S0b2Tc",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=5G5VH8Gv7TM",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=DBKlMBU3Qcc",
    category: Egg
  },
  {
    url: "https://www.youtube.com/watch?v=7dV4Qw8qdsA",
    category: Egg
  },
]

//Chicken
const chickenRecipies = [

  {
    url: "https://www.youtube.com/watch?v=1XuHqkSyUGM",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=o2CSXAPRW2A",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=v513PjvnBYw",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=opj2yECghGE",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=l1BC4kipBV8",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=v8yMhp7NFoI",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=eqNJmQg46yo",
    category: Chicken
  },
  {
    url: "http://youtube.com/watch?v=DqTn4Hzbpag",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=ZOMJ08OLFtQ",
    category: Chicken
  },
  {
    url: "https://www.youtube.com/watch?v=F0WJ107nEwg",
    category: Chicken
  },
]

//Oats
const oatsRecipies = [
  {
    url: "https://www.youtube.com/watch?v=VZOHHCosuzY",
    category: Oats
  },
  {
    url: "https://www.youtube.com/watch?v=hsATyLoy9vU",
    category: Oats
  },
  {
    url: "https://www.youtube.com/watch?v=MK6b6dv5SUU",
    category: Oats
  },
  {
    url: "https://www.youtube.com/watch?v=ZWldfH2DVX0",
    category: Oats
  },
  {
    url: "https://www.youtube.com/watch?v=m-3SdAiq904",
    category: Oats
  },
  {
    url: "https://www.youtube.com/watch?v=6FsOLe61Vhw",
    category: Oats
  },
    {
    url: "http://youtube.com/watch?v=WZWiHhl94LA",
    category: Oats
  },
]


export const proteinVideoUrls = [
  "https://www.youtube.com/watch?v=mJ1iIiVV0mM",
  "https://www.youtube.com/watch?v=_UG_FZUDO24",
  "https://www.youtube.com/watch?v=mK5Zv1Gi67A",
  "https://www.youtube.com/watch?v=oCkOQUsEGEo",
  "https://www.youtube.com/watch?v=EbfAukVWgj0",
  "https://www.youtube.com/watch?v=RUDi7gf-zF4",
  "https://www.youtube.com/watch?v=e2JiidC3qO4",
  "https://www.youtube.com/watch?v=YHdxBff_M6k",
  "https://www.youtube.com/watch?v=1Q6ij1qSrrw",
  "https://www.youtube.com/watch?v=oCkOQUsEGEo",
  "https://www.youtube.com/watch?v=AF8ykw6IKQQ",
  "https://www.youtube.com/watch?v=n9YgUY9MZjc",
  "https://www.youtube.com/watch?v=JFpx2mwBqLg",
  "https://www.youtube.com/watch?v=hsATyLoy9vU",
  "https://www.youtube.com/watch?v=KDfj0JusPS8",
  "https://www.youtube.com/watch?v=ZTIrrJ2k0LY",
  "https://www.youtube.com/watch?v=1rxqZWsBGHc",
  "https://www.youtube.com/watch?v=-8QYDGpsG-M",
  "https://www.youtube.com/watch?v=ojT5tD1zow8",
  "https://www.youtube.com/watch?v=MmqwBZ2dX4s",
  "https://www.youtube.com/watch?v=Oxg9hYiGM2M",

  ...eggrecipies,
  ...chickenRecipies,
  ...oatsRecipies
];

