export interface Brand {
  name: string;
  logo: string;
  description: string;
  url: string;
}

export interface Category {
  name: string;
  brands: Brand[];
}

export const prodajaKategorije: Category[] = [
  {
    name: "Građevinski materijali",
    brands: [
      {
        name: "Bekament",
        logo: "/bekament.png",
        description: "Vodeći regionalni proizvođač materijala za završne radove u građevinarstvu.",
        url: "https://www.bekament.com/"
      },
      {
        name: "Ceresit",
        logo: "/Ceresit.webp",
        description: "Inovativna rješenja i visokokvalitetni materijali za građevinarstvo.",
        url: "https://www.ceresit.com/"
      },
      {
        name: "Partner",
        logo: "/1664265346_1.png",
        description: "Pouzdan partner za sve vrste građevinskih materijala.",
        url: "#"
      }
    ]
  },
  {
    name: "Fasadni materijali",
    brands: [
      {
        name: "Maxima",
        logo: "/maxima.jpg",
        description: "Kvalitetne fasade koje prate svjetske trendove i osiguravaju dugotrajnost.",
        url: "https://www.maximapaints.com/"
      },
      {
        name: "Vitex",
        logo: "/Vitex.png",
        description: "Premium fasadni sistemi sa vrhunskim ekološkim standardima.",
        url: "https://www.vitex.gr/"
      },
      {
        name: "Partner",
        logo: "/Photoroom_20260325_114545.png",
        description: "Vrhunski materijali za izradu i zaštitu fasada.",
        url: "#"
      }
    ]
  },
  {
    name: "Unutrašnje boje",
    brands: [
      {
        name: "Helios",
        logo: "/helios.png",
        description: "Evropski proizvođač boja sa dugom tradicijom i inovativnim rješenjima.",
        url: "https://www.helios-deco.com/"
      },
      {
        name: "Chromos",
        logo: "/Chromos-Logotype-Primary-RGB.svg",
        description: "Širok spektar unutrašnjih boja vrhunskog kvaliteta i pokrivnosti.",
        url: "https://www.chromos.eu/"
      },
      {
        name: "EkoLak",
        logo: "/ekolak.png",
        description: "Prepoznatljiv brend po visokokvalitetnim bojama za unutrašnje zidove.",
        url: "https://ekolak.rs/"
      }
    ]
  },
  {
    name: "Dekorativni materijali",
    brands: [
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115619.png",
        description: "Ekskluzivni dekorativni materijali za moderne enterijere.",
        url: "#"
      },
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115704.png",
        description: "Inovativne tehnike i materijali za dekoraciju zidova.",
        url: "#"
      }
    ]
  },
  {
    name: "Epoxy i industrija",
    brands: [
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115801.png",
        description: "Profesionalni epoxy podovi i industrijski premazi.",
        url: "#"
      },
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115827.png",
        description: "Specijalizovani materijali za industrijske namjene.",
        url: "#"
      }
    ]
  },
  {
    name: "Hidroizolacije",
    brands: [
      {
        name: "Ceresit",
        logo: "/Ceresit.webp",
        description: "Sistemi za pouzdanu hidroizolaciju svih vrsta objekata.",
        url: "https://www.ceresit.com/"
      },
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115857.png",
        description: "Napredna rješenja za zaštitu od vlage i vode.",
        url: "#"
      }
    ]
  },
  {
    name: "Suva gradnja",
    brands: [
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115932.png",
        description: "Kompletni sistemi za suvu gradnju i pregradne zidove.",
        url: "#"
      },
      {
        name: "Partner",
        logo: "/Photoroom_20260325_120047.png",
        description: "Gipsane ploče i prateći materijali vrhunskog kvaliteta.",
        url: "#"
      }
    ]
  },
  {
    name: "Alati i oprema",
    brands: [
      {
        name: "Partner",
        logo: "/Photoroom_20260325_120117.png",
        description: "Profesionalni alati i oprema za građevinarstvo.",
        url: "#"
      },
      {
        name: "Partner",
        logo: "/unnamed.png",
        description: "Pouzdan alat za majstore i profesionalce.",
        url: "#"
      }
    ]
  }
];

export const izvodjenjeKategorije: Category[] = [
  {
    name: "Fasaderski radovi",
    brands: [
      {
        name: "Bekament",
        logo: "/bekament.png",
        description: "Sertifikovani materijali i sistemi za dugotrajne fasade.",
        url: "https://www.bekament.com/"
      },
      {
        name: "Maxima",
        logo: "/maxima.jpg",
        description: "Kvalitetna izvedba fasada uz Maxima termoizolacione sisteme.",
        url: "https://www.maximapaints.com/"
      }
    ]
  },
  {
    name: "Dekorativni radovi",
    brands: [
      {
        name: "Chromos",
        logo: "/Chromos-Logotype-Primary-RGB.svg",
        description: "Izvođenje dekorativnih tehnika sa premium Chromos materijalima.",
        url: "https://www.chromos.eu/"
      },
      {
        name: "Vitex",
        logo: "/Vitex.png",
        description: "Primjena najmodernijih dekorativnih boja i premaza.",
        url: "https://www.vitex.gr/"
      }
    ]
  },
  {
    name: "Hidroizolaciski radovi",
    brands: [
      {
        name: "Ceresit",
        logo: "/Ceresit.webp",
        description: "Stručna ugradnja Ceresit hidroizolacionih sistema.",
        url: "https://www.ceresit.com/"
      },
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115857.png",
        description: "Profesionalna zaštita objekata od vlage i vode.",
        url: "#"
      }
    ]
  },
  {
    name: "Suva gradnja",
    brands: [
      {
        name: "Partner",
        logo: "/Photoroom_20260325_115932.png",
        description: "Izvođenje svih vrsta radova u sistemu suve gradnje.",
        url: "#"
      },
      {
        name: "Partner",
        logo: "/Photoroom_20260325_120047.png",
        description: "Pregradni zidovi, spušteni plafoni i obloge vrhunskog kvaliteta.",
        url: "#"
      }
    ]
  }
];export interface Brand {
  name: string;
  logo: string;
  description: string;
  url: string;
}

export interface Category {
  name: string;
  brands: Brand[];
}

export const prodajaKategorije: Category[] = [
  {
    name: "Fasadni materijali",
    brands: [
      {
        name: "Bekament",
        logo: "/bekament.png",
        description: "Vodeći regionalni proizvođač materijala za završne radove u građevinarstvu.",
        url: "https://www.bekament.com/"
      },
      {
        name: "Maxima",
        logo: "/maxima.jpg",
        description: "Kvalitetne fasade koje prate svjetske trendove i osiguravaju dugotrajnost.",
        url: "https://www.maximapaints.com/"
      }
    ]
  },
  {
    name: "Unutrašnje boje",
    brands: [
      {
        name: "Maxima",
        logo: "/maxima.jpg",
        description: "Vrhunske unutrašnje boje sa odličnom pokrivnošću i dugotrajnošću.",
        url: "https://www.maximapaints.com/"
      },
      {
        name: "Bekament",
        logo: "/bekament.png",
        description: "Širok spektar boja za unutrašnje zidove visokog kvaliteta.",
        url: "https://www.bekament.com/"
      },
      {
        name: "Vitex",
        logo: "/Vitex.png",
        description: "Kvalitetne boje i premazi za unutrašnje radove.",
        url: "https://www.vitex.gr/"
      },
      {
        name: "Helios",
        logo: "/helios.png",
        description: "Evropski proizvođač boja sa dugom tradicijom i inovativnim rješenjima.",
        url: "https://www.helios-deco.com/"
      }
    ]
  },
  {
    name: "Dekorativni materijali",
    brands: [
      {
        name: "Maxima",
        logo: "/maxima.jpg",
        description: "Ekskluzivni dekorativni materijali za moderne enterijere.",
        url: "https://www.maximapaints.com/"
      },
      {
        name: "Bekament",
        logo: "/bekament.png",
        description: "Inovativne tehnike i materijali za dekoraciju zidova.",
        url: "https://www.bekament.com/"
      },
      {
        name: "Vitex",
        logo: "/Vitex.png",
        description: "Premium dekorativni sistemi sa vrhunskim ekološkim standardima.",
        url: "https://www.vitex.gr/"
      },
      {
        name: "Ceresit",
        logo: "/Ceresit.webp",
        description: "Visokokvalitetni materijali za završnu dekoraciju.",
        url: "https://www.ceresit.com/"
      }
    ]
  },
  {
    name: "Epoxy i industrija",
    brands: [
      {
        name: "Gravihel",
        logo: "/logotipi/gravihel.png",
        description: "Profesionalni industrijski premazi i rješenja.",
        url: "#"
      },
      {
        name: "Mobihel",
        logo: "/logotipi/mobihel.png",
        description: "Vrhunski auto lakovi i industrijski premazi.",
        url: "#"
      },
      {
        name: "Colomix",
        logo: "/logotipi/colomix.png",
        description: "Pouzdan izbor boja i lakova za razne namjene.",
        url: "#"
      },
      {
        name: "Body",
        logo: "/logotipi/body.png",
        description: "Specijalizovani materijali za auto industriju i reparaciju.",
        url: "#"
      }
    ]
  },
  {
    name: "Hidroizolacija",
    brands: [
      {
        name: "Sika",
        logo: "/logotipi/sika.png",
        description: "Svjetski lider u razvoju i proizvodnji sistema za hidroizolaciju.",
        url: "#"
      },
      {
        name: "Ceresit",
        logo: "/logotipi/Ceresit.webp",
        description: "Sistemi za pouzdanu hidroizolaciju svih vrsta objekata.",
        url: "https://www.ceresit.com/"
      }
    ]
  },
  {
    name: "Alati i oprema",
    brands: [
      {
        name: "Villager",
        logo: "/logotipi/villager.png",
        description: "Prepoznatljiv brend alata za majstore i profesionalce.",
        url: "#"
      },
      {
        name: "Toolsen",
        logo: "/logotipi/tolsen.png",
        description: "Kvalitetan ručni i električni alat za sve vrste radova.",
        url: "#"
      },
      {
        name: "Makita",
        logo: "/logotipi/makita.png",
        description: "Vrhunski profesionalni električni alati.",
        url: "#"
      },
      {
        name: "Wurth",
        logo: "/logotipi/wurth.png",
        description: "Pouzdan partner za montažnu opremu i alate.",
        url: "#"
      }
    ]
  }
];

export const izvodjenjeKategorije: Category[] = [
  {
    name: "Dekorativni radovi",
    brands: [
      {
        name: "Maxima",
        logo: "/maxima.jpg",
        description: "Ekskluzivni dekorativni materijali za moderne enterijere.",
        url: "https://www.maximapaints.com/"
      },
      {
        name: "Bekament",
        logo: "/bekament.png",
        description: "Inovativne tehnike i materijali za dekoraciju zidova.",
        url: "https://www.bekament.com/"
      },
      {
        name: "Vitex",
        logo: "/Vitex.png",
        description: "Premium dekorativni sistemi sa vrhunskim ekološkim standardima.",
        url: "https://www.vitex.gr/"
      }
    ]
  },
  {
    name: "Hidroizolacija i podovi",
    brands: [
      {
        name: "Sika",
        logo: "/logotipi/sika.png",
        description: "Svjetski lider u razvoju i proizvodnji sistema za hidroizolaciju.",
        url: "#"
      },
      {
        name: "Ceresit",
        logo: "/logotipi/Ceresit.webp",
        description: "Sistemi za pouzdanu hidroizolaciju svih vrsta objekata.",
        url: "https://www.ceresit.com/"
      },
      {
        name: "Chromos",
        logo: "/Chromos-Logotype-Primary-RGB.svg",
        description: "Izvođenje radova sa premium Chromos materijalima.",
        url: "https://www.chromos.eu/"
      }
    ]
  },
  {
    name: "Suva gradnja",
    brands: [
      {
        name: "Knauf",
        logo: "/logotipi/knauf.png",
        description: "Kompletni sistemi za suvu gradnju i pregradne zidove.",
        url: "#"
      }
    ]
  }
];
