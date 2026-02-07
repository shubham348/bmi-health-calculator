const Chicken = "Chicken";
const Egg = "Eggs";
const Oats = "Oats";
const Veg = "Veg";
const Snacks = "Snacks";
const Breakfast = "Breakfasts";
const Paneer = "Paneer"

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
    url: "https://www.youtube.com/watch?v=VL09tMVp8yA",
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

const snackRecipies = [
  {
    url: "https://www.youtube.com/watch?v=110G3GvaZns",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=RgBZS2hrmak",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=YQDA29r9QDA",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=zUd2TowFIVM",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=ojOyfO45DJY",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=RT6hKbSk4fI",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=6oQFWCDI4EM",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=BCuD36zzimU",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=RKs7wNSqpoc",
    category: Snacks
  },
  {
    url: "https://www.youtube.com/watch?v=RUDi7gf-zF4",
    category: Snacks
  }

]

//breakfast
const breakfastRecipies = [
  {
    url: "https://www.youtube.com/watch?v=zeqeWQb9FCY",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=jQ5ZUvGaSsk",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=8XcY0DsrHbs",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=rvULBQuK5Xs",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=ee0SfGSJOTc",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=mK5Zv1Gi67A",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=weDBAlgQcTc",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=kFHJ0T-LKY0",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=moGg7ANNzYw",
    category: Breakfast
  },
  {
    url: "https://www.youtube.com/watch?v=Zvx6FVFLHaA",
    category: Breakfast
  },

]

//paneer
const paneerRecipies = [
  {
    url: "https://www.youtube.com/watch?v=uQNQSqqB6E0",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=Zvx6FVFLHaA",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=br-IaFzt2SE",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=6pXJCPRLn3A",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=1rj1CKHskdY",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=7IEnGV3OGP4",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=70dD-_cH0Oo",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=a_-iquQHX3c",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=eD4D-bQjaoY",
    category: Paneer
  },
  {
    url: "https://www.youtube.com/watch?v=evDHjynYmHo",
    category: Paneer
  },
  {
    url:"https://www.youtube.com/watch?v=ZL5dyFPn88Q",
    category:Paneer
  }
]

export const proteinVideoUrls = [
  "https://www.youtube.com/watch?v=mJ1iIiVV0mM",
  "https://www.youtube.com/watch?v=_UG_FZUDO24",
  "https://www.youtube.com/watch?v=oCkOQUsEGEo",
  "https://www.youtube.com/watch?v=EbfAukVWgj0",
  "https://www.youtube.com/watch?v=RUDi7gf-zF4",
  "https://www.youtube.com/watch?v=e2JiidC3qO4",
  "https://www.youtube.com/watch?v=YHdxBff_M6k",
  "https://www.youtube.com/watch?v=yN-YDyc8fgc",
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
  ...oatsRecipies,
  ...snackRecipies,
  ...breakfastRecipies,
  ...paneerRecipies
];

