import { CoverMetadata, Lesson, TermId, TermMeta, TermTheme } from '../types/filipino';

export const DEFAULT_COVER_METADATA: CoverMetadata = {
  websiteTitle: 'Filipino 1 – Sining ng Komunikasyon: Kalipunan ng mga Aralin',
  studentName: 'Pangalan ng Mag-aaral (I-edit upang ilagay)',
  courseSection: 'BSIT 1C',
  subjectName: 'Filipino 1 – Sining ng Komunikasyon',
  teacherName: 'Pangalan ng Guro (I-edit upang ilagay)',
  academicYear: '2026–2027',
};

export const TERM_THEMES: Record<TermId, TermTheme> = {
  prelim: {
    id: 'prelim',
    sectionBg: 'bg-[#FDF4F5]',
    cardBg: 'bg-[#7A141D]',
    cardHoverBg: 'hover:bg-[#651017]',
    bannerBg: 'bg-[#7A141D]',
    bannerText: 'text-white',
    bannerSubtext: 'text-rose-100',
    accentBg: 'bg-[#7A141D]',
    accentText: 'text-[#7A141D]',
    borderColor: 'border-rose-200',
    softSurface: 'bg-[#FAF0F1]',
    colorLabel: 'Maroon / Crimson',
  },
  midterm: {
    id: 'midterm',
    sectionBg: 'bg-[#F2F6FA]',
    cardBg: 'bg-[#14293D]',
    cardHoverBg: 'hover:bg-[#0F2030]',
    bannerBg: 'bg-[#14293D]',
    bannerText: 'text-white',
    bannerSubtext: 'text-slate-200',
    accentBg: 'bg-[#14293D]',
    accentText: 'text-[#14293D]',
    borderColor: 'border-slate-300',
    softSurface: 'bg-[#EDF2F7]',
    colorLabel: 'Navy / Slate Blue',
  },
  'semi-finals': {
    id: 'semi-finals',
    sectionBg: 'bg-[#FAF6EC]',
    cardBg: 'bg-[#5C491F]',
    cardHoverBg: 'hover:bg-[#4A3A18]',
    bannerBg: 'bg-[#5C491F]',
    bannerText: 'text-white',
    bannerSubtext: 'text-amber-100',
    accentBg: 'bg-[#5C491F]',
    accentText: 'text-[#5C491F]',
    borderColor: 'border-amber-200',
    softSurface: 'bg-[#F6EFE0]',
    colorLabel: 'Olive / Ochre',
  },
  finals: {
    id: 'finals',
    sectionBg: 'bg-[#F1F7F5]',
    cardBg: 'bg-[#16423C]',
    cardHoverBg: 'hover:bg-[#11342F]',
    bannerBg: 'bg-[#16423C]',
    bannerText: 'text-white',
    bannerSubtext: 'text-emerald-100',
    accentBg: 'bg-[#16423C]',
    accentText: 'text-[#16423C]',
    borderColor: 'border-emerald-200',
    softSurface: 'bg-[#EAF3F0]',
    colorLabel: 'Forest Emerald',
  },
};

export const TERMS_META: TermMeta[] = [
  {
    id: 'prelim',
    label: 'Prelim',
    roman: 'I',
    subtitle: 'Unang Termino',
    periodSummary:
      'Linggwistika ng Wika: kahulugan, kahalagahan, anim na katangian, mga bahagi ng pag-aaral sa wika, barayti ng wika, at mga wika sa Pilipinas.',
  },
  {
    id: 'midterm',
    label: 'Midterm',
    roman: 'II',
    subtitle: 'Ikalawang Termino',
    periodSummary:
      'Alfabeto at Ortograpiyang Filipino: mula Alibata at Abecedario hanggang ABAKADA, ang pantig at kayarian nito, pagpapantig, at pag-uulit ng pantig.',
  },
  {
    id: 'semi-finals',
    label: 'Semi-Finals',
    roman: 'III',
    subtitle: 'Ikatlong Termino',
    periodSummary:
      'Ang Sugnay (Makapag-iisa at Di-makapag-iisa), gamit ng sugnay, at ang Pangungusap ayon sa kayarian (Payak, Tambalan, Hugnayan, Langkapan) at gamit.',
  },
  {
    id: 'finals',
    label: 'Finals',
    roman: 'IV',
    subtitle: 'Ikaapat na Termino',
    periodSummary:
      'Mga uri ng diskurso, retorika at tayutay, mapanuring pagbasa, pananaliksik, at paglalapat ng wikang Filipino sa larangan ng BSIT.',
  },
];

export const REFERENCES_LIST = [
  {
    id: 'ref-1',
    author: 'Komisyon sa Wikang Filipino (KWF)',
    year: '2014',
    title: 'KWF Manwal sa Masinop na Pagsulat (Ortograpiyang Pambansa)',
    publisher: 'Komisyon sa Wikang Filipino, Maynila',
    note: 'Pinagbatayan para sa kasaysayan ng alpabeto, pagpapantig, pag-uulit ng pantig, at wastong pagbabaybay.',
  },
  {
    id: 'ref-2',
    author: 'Bernales, R. A., Atienza, G. C., Talegon, V. M., & Rovira, S. G.',
    year: '2016',
    title: 'Komunikasyon sa Akademikong Filipino',
    publisher: 'Mutya Publishing House, Inc.',
    note: 'Sanggunian para sa kahulugan, katangian, mga bahagi ng linggwistika, at mga barayti ng wika.',
  },
  {
    id: 'ref-3',
    author: 'Santiago, A. O., & Tiangco, N. G.',
    year: '2003',
    title: 'Makabagong Balarilang Filipino',
    publisher: 'Rex Book Store, Inc.',
    note: 'Pangunahing gabay sa sugnay (uri at gamit), kayarian ng pangungusap (Payak, Tambalan, Hugnayan, Langkapan), at uri ayon sa gamit.',
  },
  {
    id: 'ref-4',
    author: 'Austero, C. S., Mateo, E. C., & Suguran, T. S.',
    year: '2013',
    title: 'Filipino sa Iba’t Ibang Disiplina',
    publisher: 'Unlad Publishing House',
    note: 'Pinagkunan ng mga prinsipyo sa retorika, mga uri ng diskurso, mapanuring pagbasa, at akademikong pananaliksik.',
  },
  {
    id: 'ref-5',
    author: 'BSIT 1C – Filipino 1 (Sining ng Komunikasyon)',
    year: '2026',
    title: 'Mga Modyul sa Wika, Alfabeto at Ortograpiyang Filipino, at Ang Sugnay',
    publisher: 'Google Sites & Google Classroom Materyales Pangklase',
    note: 'Direktang batayan ng nilalaman mula Prelim, Midterm, hanggang Semi-Finals para sa seksyong BSIT 1C.',
  },
];

export const LESSONS_DATA: Lesson[] = [
  // ================= PRELIM (CRIMSON / MAROON) =================
  {
    id: 'aralin-01-linggwistika-wika',
    number: '01',
    term: 'prelim',
    classroomRef: 'Prelim · Linggwistika ng Wika',
    postedDate: 'Hulyo 8–13',
    title: 'Linggwistika ng Wika: Kahulugan, Katangian, at mga Bahagi',
    subtitle: 'Ano ang wika, ang anim na katangian nito, at apat na sangay ng pag-aaral sa wika',
    readingMinutes: 6,
    summary:
      'Ipinakikilala ng unang aralin sa Prelim ang batayang konsepto ng wika—ang kahulugan, kahalagahan, ugnayan sa kultura, ang anim na pangunahing katangian ng wika, at ang apat na bahagi ng pag-aaral sa wika.',
    discussion: [
      'Ang wika ay ginagamit upang makipag-ugnayan at magpahayag ng mga kaisipan. Ito ay isang sistematikong estruktura ng mga sinasalitang tunog na pinagkakasunduan at ginagamit sa komunikasyon. Nagsisilbi itong tulay sa pag-unawa at pagbabahagi ng ideya, at bilang bahagi ng kultura ay patuloy itong nagbabago sa paglipas ng panahon.',
      'May Anim na Katangian ang Wika: (1) May Sistematikong Estruktura dahil may kaayusan at mga tuntunin; (2) Binibigkas ito sa pamamagitan ng tunog; (3) May Sistematikong Tunog o organisadong sistema ng mga tunog; (4) Arbitraryo dahil pinagkakasunduan ng mga tao ang kahulugan ng salita; (5) Nagbabago sa paglipas ng panahon; at (6) Malikhain sapagkat nakabubuo ng maraming bagong pahayag.',
      'Upang masusing mapag-aralan ang wika, hinahati ito sa apat na mahahalagang sangay: ang Ponolohiya (pag-aaral ng mga tunog), Morpolohiya (pag-aaral sa pagbuo ng mga salita), Semantika (pag-aaral ng kahulugan), at Sintaks (pag-aaral sa pagkakabuo ng pangungusap).',
    ],
    keyConcepts: [
      {
        term: 'Ponolohiya',
        meaning: 'Sangay ng linggwistika na nakatuon sa pag-aaral ng mga makabuluhang tunog ng wika.',
      },
      {
        term: 'Morpolohiya',
        meaning: 'Pag-aaral sa pagbubuo ng mga salita mula sa salitang-ugat at mga panlapi.',
      },
      {
        term: 'Semantika',
        meaning: 'Pag-aaral ng kahulugan ng mga salita, parirala, at pangungusap.',
      },
      {
        term: 'Sintaks',
        meaning: 'Pag-aaral sa wastong pagkakabuo at pagkakasunod-sunod ng mga salita sa pangungusap.',
      },
    ],
    examples: [
      {
        id: 'ex-1-1',
        title: '1. May Sistematikong Estruktura',
        statement: '"Nag-aaral nang mabuti ang mga mag-aaral ng BSIT 1C."',
        explanation:
          'Sumusunod sa maayos na kaayusan ng panaguri at simuno upang maging malinaw ang diwa; hindi maaaring paghalu-haluin nang walang tuntunin.',
      },
      {
        id: 'ex-1-2',
        title: '2. Binibigkas at Sistematikong Tunog',
        statement: 'Ang pagbigkas ng /b/, /a/, /h/, /a/, /y/ upang makabuo ng salitang "bahay".',
        explanation:
          'Unang naipapahayag ang wika sa pamamagitan ng sinasalitang tunog bago ito isulat, at may tiyak na kombinasyon ng tunog na tinatanggap sa Filipino.',
      },
      {
        id: 'ex-1-3',
        title: '3. Arbitraryo',
        statement: 'Ang "tubig" sa Tagalog ay "danum" sa Ilokano at "water" sa Ingles.',
        explanation:
          'Pinagkakasunduan ng isang lipunan kung anong salita ang ikakabit sa isang bagay o konsepto.',
      },
      {
        id: 'ex-1-4',
        title: '4. Nagbabago',
        statement: 'Pag-usbong ng mga salitang "selfie", "mag-login", at "streaming" sa usapang Filipino.',
        explanation:
          'Habang umuunlad ang teknolohiya at kultura, nadaragdagan at nagbabago rin ang mga salita at gamit ng wika.',
      },
      {
        id: 'ex-1-5',
        title: '5. Malikhain',
        statement: 'Mula sa iisang salitang-ugat na "sulat", nakabubuo ng "sumulat", "sulatin", "kasulatan", at buong sanaysay.',
        explanation:
          'Nakagagawa ang tagapagsalita ng walang katapusang bagong pangungusap at masining na pahayag.',
      },
      {
        id: 'ex-1-6',
        title: '6. Apat na Bahagi ng Pag-aaral (Halimbawa)',
        statement: 'Ponolohiya (/p/ + /a/ + /s/ + /a/) · Morpolohiya (mag- + pasa) · Semantika (pagbibigay) · Sintaks ("Magpasa ka na.").',
        explanation:
          'Nagpapakita kung paano nagtutulungan ang tunog, salita, kahulugan, at pangungusap sa iisang pahayag.',
      },
    ],
    imagePath: '/src/assets/images/visual_wika_komunikasyon_1794921762138.jpg',
    imageAlt: 'Mga kuwaderno sa linggwistika at lumang diksyunaryong Filipino sa ibabaw ng mesa',
    imageCaption:
      'Larawan 1.1: Ang linggwistika ng wika ay nagbibigay ng malinaw na balangkas sa tunog, salita, kahulugan, at estruktura.',
    diagramType: 'katangian-wika',
    table: {
      title: 'Talahanayan 1.1: Mga Bahagi ng Pag-aaral sa Wika',
      caption: 'Apat na pangunahing sangay ng linggwistika at ang tuon ng bawat isa.',
      headers: ['Bahagi ng Pag-aaral', 'Tuon ng Pagsusuri', 'Halimbawa'],
      rows: [
        ['Ponolohiya', 'Pag-aaral ng mga tunog ng wika', 'Mga ponemang /b/, /p/, /a/, at diin sa "BU:hay" vs "bu:HAY"'],
        ['Morpolohiya', 'Pag-aaral sa pagbuo ng mga salita', 'Salitang-ugat + panlapi: pag- + basa = pagbasa'],
        ['Semantika', 'Pag-aaral ng kahulugan', 'Pagbibigay ng literal o matalinhagang kahulugan ng salita'],
        ['Sintaks', 'Pag-aaral sa pagkakabuo ng pangungusap', 'Pagsasaayos ng simuno at panaguri sa buong pangungusap'],
      ],
    },
    extraActivity: {
      title: 'Gawaing Pagsusuri: Apat na Sangay sa Isang Salita',
      instructions:
        'Piliin ang salitang "aral" at ilapat dito ang Ponolohiya, Morpolohiya, Semantika, at Sintaks.',
      samplePrompt:
        'Ponolohiya: /a-r-a-l/ · Morpolohiya: mag-aaral · Semantika: taong kumukuha ng kaalaman · Sintaks: "Masipag ang mga mag-aaral."',
    },
    quiz: [
      {
        id: 'q-1-1',
        question: 'Aling bahagi ng pag-aaral sa wika ang nakatuon sa pagbubuo ng mga salita?',
        choices: ['Ponolohiya', 'Morpolohiya', 'Semantika', 'Sintaks'],
        correctIndex: 1,
        explanation:
          'Ang Morpolohiya ay ang pag-aaral sa pagbuo ng mga salita gaya ng pagsasama ng salitang-ugat at panlapi.',
      },
      {
        id: 'q-1-2',
        question: 'Ano ang ibig sabihin ng katangiang "Arbitraryo" ng wika?',
        choices: [
          'Hindi ito kailanman nagbabago',
          'Napagkakasunduan ng mga tao ang kahulugan ng mga salita',
          'Nakasulat lamang ito sa aklat',
          'Walang sinusunod na estruktura',
        ],
        correctIndex: 1,
        explanation:
          'Arbitraryo ang wika dahil pinagkakasunduan ng isang pamayanan ang salitang itatawag sa isang bagay o ideya.',
      },
      {
        id: 'q-1-3',
        question: 'Alin sa mga sumusunod ang tumutukoy sa pag-aaral ng kahulugan ng salita at pangungusap?',
        choices: ['Sintaks', 'Ponolohiya', 'Semantika', 'Morpolohiya'],
        correctIndex: 2,
        explanation:
          'Semantika ang sangay ng linggwistika na nag-aaral sa kahulugan ng wika.',
      },
    ],
  },

  {
    id: 'aralin-02-barayti-wika',
    number: '02',
    term: 'prelim',
    classroomRef: 'Prelim · Barayti at mga Wika',
    postedDate: 'Hulyo 17–29',
    title: 'Mga Barayti ng Wika at Iba’t Ibang Wika sa Pilipinas',
    subtitle: 'Idyolek, Dayalek, Sosyolek, Etnolek, Ekolek, Pidgin, Creole, at Register',
    readingMinutes: 7,
    summary:
      'Tinatalakay sa araling ito ang walong barayti ng wikang umuusbong mula sa indibidwal, lugar, lipunan, tahanan, at propesyon, kasama ang mga pangunahing wika sa Pilipinas.',
    discussion: [
      'Bagama’t may iisang pambansang wika, nagkakaroon ng iba’t ibang barayti ang wika dahil sa magkakaibang lugar, pangkat panlipunan, tahanan, at sitwasyong kinabibilangan ng mga tao. Bawat barayti ay may mahalagang papel sa pagpapakita ng pagkakakilanlan ng isang tagapagsalita o komunidad.',
      'Sa walong barayti ng wika, ang Idyolek ang natatanging paraan ng pagsasalita ng isang tao; ang Dayalek ang pagkakaiba batay sa lugar o rehiyon; ang Sosyolek ang wikang ginagamit ng isang pangkat panlipunan; ang Etnolek ay kaugnay ng isang pangkat etniko; ang Ekolek ang mga salitang ginagamit sa loob ng tahanan; ang Pidgin ang simpleng wikang nabubuo upang magkaunawaan; ang Creole ang wikang naging unang wika ng isang komunidad; at ang Register ang pagpili ng salita ayon sa larangan at sitwasyon.',
      'Dagdag pa rito, pinatutunayan ng pagkakaroon ng maraming wika sa kapuluan—kabilang ang Tagalog, Cebuano, Waray, Bicolano, Tausug, Ilokano, Ilonggo, at Kapampangan—ang mayamang pagkakaiba-iba ng kultura at linggwistika sa Pilipinas.',
    ],
    keyConcepts: [
      {
        term: 'Idyolek at Dayalek',
        meaning: 'Ang Idyolek ay personal na estilo ng indibidwal; ang Dayalek ay pagkakaiba ayon sa rehiyon o lugar.',
      },
      {
        term: 'Sosyolek at Register',
        meaning: 'Ang Sosyolek ay gamit ng isang pangkat panlipunan; ang Register ay nakabatay sa larangan o sitwasyon.',
      },
      {
        term: 'Etnolek at Ekolek',
        meaning: 'Ang Etnolek ay nagmula sa pangkat etniko; ang Ekolek ay mga katawagang karaniwan sa loob ng tahanan.',
      },
      {
        term: 'Pidgin at Creole',
        meaning: 'Ang Pidgin ay walang pormal na estruktura upang magkaunawaan; kapag naging unang wika ng komunidad, nagiging Creole ito.',
      },
    ],
    examples: [
      {
        id: 'ex-2-1',
        title: 'Idyolek at Dayalek',
        statement: 'Idyolek: "Magandang Gabi Bayan!" · Dayalek: "Bakit?" (Maynila) at "Bakit ga?" (Batangas).',
        explanation:
          'Nakikilala ang iisang tagapagsalita sa kanyang Idyolek, samantalang nagkakaiba naman ang Dayalek ayon sa lalawigan.',
      },
      {
        id: 'ex-2-2',
        title: 'Sosyolek',
        statement: '"Repapips, ala na ako datung eh." / "I-push na natin sa repo ang project, lods."',
        explanation:
          'Gumagamit ng mga salitang nauuso o nakasanayan sa isang pangkat panlipunan o barkadahan.',
      },
      {
        id: 'ex-2-3',
        title: 'Etnolek at Ekolek',
        statement: 'Etnolek: "Palangga" (minamahal) · Ekolek: "Mumsy" (nanay), "Papsy" (tatay).',
        explanation:
          'Ang Etnolek ay galing sa pangkat etnolinggwistiko, habang ang Ekolek ay bukambibig sa loob ng pamilya.',
      },
      {
        id: 'ex-2-4',
        title: 'Pidgin at Creole',
        statement: 'Pidgin: "Ako tinda damit maganda." · Creole: Wikang Chavacano sa Zamboanga.',
        explanation:
          'Mula sa pinaghalong wika upang magkaunawaan sa kalakalan (Pidgin), umuunlad ito bilang katutubong wika (Creole).',
      },
      {
        id: 'ex-2-5',
        title: 'Register',
        statement: '"Kapital" — nangangahulugang puhunan sa negosyo, o punong lungsod (kabisera) sa heograpiya.',
        explanation:
          'Nag-iiba ang kahulugan at pagpili ng salita depende sa propesyon, larangan, o sitwasyon.',
      },
      {
        id: 'ex-2-6',
        title: 'Mga Wika sa Pilipinas',
        statement: 'Tagalog, Cebuano, Waray, Bicolano, Tausug, Ilokano, Ilonggo, at Kapampangan.',
        explanation:
          'Walong kilalang wika sa iba’t ibang rehiyon ng bansa na sumasalamin sa ating mayamang pamana.',
      },
    ],
    imagePath: '/src/assets/images/hero_filipino_heritage_1794921761832.jpg',
    imageAlt: 'Buklat na aklat ng panitikang Filipino at panulat sa ibabaw ng mesa',
    imageCaption:
      'Larawan 2.1: Mula tahanan hanggang iba’t ibang rehiyon ng Pilipinas, nagbubunga ang wika ng mayayamang barayti.',
    diagramType: 'barayti-wika',
    table: {
      title: 'Talahanayan 2.1: Buod ng Walong Barayti ng Wika',
      caption: 'Klasipikasyon, katuturan, at halimbawa ng bawat barayti.',
      headers: ['Barayti', 'Katuturan', 'Halimbawa'],
      rows: [
        ['Idyolek', 'Natatanging paraan ng pagsasalita ng isang tao', '"Magandang Gabi Bayan"'],
        ['Dayalek', 'Pagkakaiba ng wika batay sa lugar o rehiyon', '"Bakit?" at "Bakit ga?"'],
        ['Sosyolek', 'Wikang ginagamit ng isang pangkat panlipunan', '"Repapips, ala na ako datung eh."'],
        ['Etnolek', 'Wikang kaugnay ng isang pangkat etniko', '"Palangga" — minamahal'],
        ['Ekolek', 'Mga salitang ginagamit sa loob ng tahanan', '"Mumsy" — nanay'],
        ['Pidgin', 'Simpleng wikang ginagamit upang magkaunawaan', '"Ako tinda damit maganda."'],
        ['Creole', 'Wikang naging unang wika ng isang komunidad', 'Chavacano'],
        ['Register', 'Pagpili ng salita ayon sa larangan at sitwasyon', '"Kapital" — puhunan o kabisera'],
      ],
    },
    extraActivity: {
      title: 'Gawain: Tuklasin ang Wika sa Tahanan at Larangan',
      instructions:
        'Magbigay ng tig-isang halimbawa ng Ekolek na ginagamit sa inyong bahay at isang Register mula sa asignaturang BSIT.',
      samplePrompt:
        'Halimbawa: Ekolek — "Ate/Kuya" o "Mamita"; Register sa BSIT — "Bug" (hindi insektong maliit kundi pagkakamali sa program code).',
    },
    quiz: [
      {
        id: 'q-2-1',
        question: 'Anong barayti ng wika ang mga salitang ginagamit sa loob ng tahanan tulad ng "Mumsy"?',
        choices: ['Etnolek', 'Ekolek', 'Pidgin', 'Register'],
        correctIndex: 1,
        explanation:
          'Ekolek ang tawag sa mga salita at katawagang karaniwang nabubuo at ginagamit sa loob ng tahanan.',
      },
      {
        id: 'q-2-2',
        question: 'Alin sa mga sumusunod ang halimbawa ng Creole sa Pilipinas?',
        choices: ['Chavacano', '"Bakit ga?"', '"Repapips"', '"Palangga"'],
        correctIndex: 0,
        explanation:
          'Ang Chavacano ay isang halimbawa ng Creole dahil naging unang wika ito ng isang komunidad sa Zamboanga at Cavite.',
      },
      {
        id: 'q-2-3',
        question: 'Kapag ang salitang "kapital" ay ginagamit bilang "puhunan" sa negosyo o "kabisera" sa heograpiya, anong barayti ito?',
        choices: ['Idyolek', 'Pidgin', 'Register', 'Dayalek'],
        correctIndex: 2,
        explanation:
          'Register ang pagpili at pagpapakahulugan ng salita batay sa larangan o sitwasyon.',
      },
    ],
  },

  // ================= MIDTERM (NAVY / SLATE BLUE) =================
  {
    id: 'aralin-03-alpabeto-ortograpiya',
    number: '03',
    term: 'midterm',
    classroomRef: 'Midterm · Alfabeto at Ortograpiyang Filipino',
    postedDate: 'Agosto',
    title: 'Kasaysayan ng Alpabeto: Mula Alibata at Abecedario Hanggang ABAKADA',
    subtitle: 'Ang pagbabago ng sistema ng pagsulat tungo sa Ortograpiyang Filipino',
    readingMinutes: 6,
    summary:
      'Inilalahad ng araling ito ang pag-unlad ng sistema ng pagsulat sa Pilipinas—mula sa sinaunang Alibata, ang pagpasok ng Abecedario noong panahon ng Kastila, ang pagtataguyod ni Dr. Jose Rizal, hanggang sa ABAKADA ni Lope K. Santos.',
    discussion: [
      'Bago pa man dumating ang mga mananakop, may sarili nang sistema ng pagsulat ang mga Pilipino na tinatawag na Alibata (Baybayin). Sa pagdating ng mga Kastila, napalitan ang lumang Alibata ng Alpabetong Romano. Ito ang naging pinakamahalagang impluwensiya sa atin ng mga Kastila sa pagsulat at nakilala ito sa tawag na Abecedario.',
      'Gayunman, hindi lahat ng Pilipino ay yumakap nang ganap sa bagong sistema ng pagsulat ng mga banyaga. Isa sa mga nanguna sa pagreporma ng baybaying Tagalog si Dr. Jose Rizal, na naglathala ng kanyang pag-aaral na pinamagatang "Sobre la Nueva Ortografia dela Lengua Tagala".',
      'Bunga ng pagpapahintulot ng pagpapalimbag ng diksyonaryo at aklat sa gramatika ng Wikang Pambansa—kung saan sinimulan ang pagtuturo nito noong 1940—binalangkas ni Lope K. Santos ang bagong alpabeto na nakilala sa tawag na ABAKADA. Binubuo ito ng 20 titik: 15 katinig at 5 patinig (/a/, /ba/, /ka/, /da/, /e/, /ga/, /ha/, /i/, /la/, /ma/, /na/, /nga/, /o/, /pa/, /ra/, /sa/, /ta/, /u/, /wa/, /ya/).',
    ],
    keyConcepts: [
      {
        term: 'Alibata (Baybayin)',
        meaning: 'Ang sinaunang katutubong sistema ng pagsulat bago dumating ang mga Kastila.',
      },
      {
        term: 'Abecedario',
        meaning: 'Ang Alpabetong Romano na ipinakilala ng mga Kastila at pumalit sa lumang Alibata.',
      },
      {
        term: 'Dr. Jose Rizal',
        meaning: 'Naglathala ng "Sobre la Nueva Ortografia dela Lengua Tagala" bilang gabay sa makabagong pagbabaybay.',
      },
      {
        term: 'ABAKADA (Lope K. Santos)',
        meaning: 'Binubuo ng 20 titik (15 katinig at 5 patinig) na itinuro kasabay ng Wikang Pambansa noong 1940.',
      },
    ],
    examples: [
      {
        id: 'ex-3-1',
        title: 'Pagpapalit ng Alibata sa Alpabetong Romano',
        statement: 'Ang mga tunog ng sinaunang Alibata ay isinulat gamit ang mga letrang Romano sa ilalim ng Abecedario.',
        explanation:
          'Ipinakikita nito ang pagpasok ng kanluraning alpabeto sa mga unang aklat at dokumentong nilimbag sa Pilipinas.',
      },
      {
        id: 'ex-3-2',
        title: 'Impluwensiya ng Abecedario',
        statement: 'Mga hiram na letrang gaya ng ch, ll, ñ, at rr na makikita sa mga lumang apelyido at lugar.',
        explanation:
          'Nanatili sa ilang pangalang pantangi sa Pilipinas ang bakas ng pagbabaybay sa Abecedario.',
      },
      {
        id: 'ex-3-3',
        title: 'Reporma ni Dr. Jose Rizal',
        statement: 'Paggamit ng letrang "k" at "w" sa halip na "c", "q", at "u" (hal. "kailan" sa halip na "cailan").',
        explanation:
          'Sa kanyang akdang Sobre la Nueva Ortografia dela Lengua Tagala, isinulong ni Rizal ang mas akmang baybay para sa wikang Tagalog.',
      },
      {
        id: 'ex-3-4',
        title: 'Ang 5 Patinig ng ABAKADA',
        statement: '/a/, /e/, /i/, /o/, /u/',
        explanation:
          'Limang patinig na nagsisilbing buhay ng bawat pantig sa binalangkas na alpabeto ni Lope K. Santos.',
      },
      {
        id: 'ex-3-5',
        title: 'Ang 15 Katinig ng ABAKADA',
        statement: '/ba/, /ka/, /da/, /ga/, /ha/, /la/, /ma/, /na/, /nga/, /pa/, /ra/, /sa/, /ta/, /wa/, /ya/',
        explanation:
          'Labinlimang katinig na binibigkas nang may kasamang tunog na /a/, kasama ang natatanging digrapong "ng" (/nga/).',
      },
    ],
    imagePath: '/src/assets/images/visual_wika_komunikasyon_1794921762138.jpg',
    imageAlt: 'Lumang diksyunaryo at mga tala ng ortograpiyang Filipino',
    imageCaption:
      'Larawan 3.1: Ang makasaysayang pagbabago mula Alibata at Abecedario patungong ABAKADA ay nagbigay-daan sa maayos na Ortograpiyang Filipino.',
    diagramType: 'alpabeto-ortograpiya',
    table: {
      title: 'Talahanayan 3.1: Pag-unlad ng Alpabetong Filipino',
      caption: 'Paghahambing ng mga pangunahing yugto sa kasaysayan ng ating sistema ng pagsulat.',
      headers: ['Sistema', 'Panahon / Nagbalangkas', 'Katangian'],
      rows: [
        ['Alibata (Baybayin)', 'Sinaunang Pilipino', 'Katutubong sulat bago ang pananakop ng Kastila'],
        ['Abecedario', 'Panahon ng Kastila', 'Alpabetong Romano na ipinalit sa lumang Alibata'],
        ['Bagong Ortograpiya', 'Dr. Jose Rizal', 'Inilathala sa "Sobre la Nueva Ortografia dela Lengua Tagala"'],
        ['ABAKADA', 'Lope K. Santos (1940)', 'Binubuo ng 20 titik: 15 katinig at 5 patinig'],
      ],
    },
    extraActivity: {
      title: 'Pagsasanay sa ABAKADA',
      instructions:
        'Bigkasin nang sunod-sunod ang 20 titik ng ABAKADA at pansinin kung alin sa mga ito ang binubuo ng dalawang letra ngunit iisang tunog.',
      samplePrompt:
        'Sagot: Ang "ng" (/nga/) ay binubuo ng mga titik n at g ngunit itinuturing na isang titik sa 20 titik ng ABAKADA.',
    },
    quiz: [
      {
        id: 'q-3-1',
        question: 'Ano ang tawag sa Alpabetong Romano na pumalit sa lumang Alibata nang dumating ang mga Kastila?',
        choices: ['ABAKADA', 'Abecedario', 'Baybayin', 'Sanskrit'],
        correctIndex: 1,
        explanation:
          'Abecedario ang tawag sa Alpabetong Romano na ipinakilala ng mga Kastila sa Pilipinas.',
      },
      {
        id: 'q-3-2',
        question: 'Sino ang nagbalangkas ng alpabetong ABAKADA na binubuo ng 20 titik?',
        choices: ['Dr. Jose Rizal', 'Lope K. Santos', 'Manuel L. Quezon', 'Andres Bonifacio'],
        correctIndex: 1,
        explanation:
          'Si Lope K. Santos ang bumalangkas ng ABAKADA na may 15 katinig at 5 patinig.',
      },
      {
        id: 'q-3-3',
        question: 'Ilan ang kabuuang titik ng ABAKADA?',
        choices: ['15 titik', '20 titik', '26 titik', '28 titik'],
        correctIndex: 1,
        explanation:
          'Ang ABAKADA ay binubuo ng 20 titik: 15 katinig at 5 patinig.',
      },
    ],
  },

  {
    id: 'aralin-04-pantig-pagpapantig',
    number: '04',
    term: 'midterm',
    classroomRef: 'Midterm · Pantig at Palapantigan',
    postedDate: 'Agosto',
    title: 'Ang Pantig, Kayarian ng Pantig, Pagpapantig, at Pag-uulit',
    subtitle: 'Palapantigan (P at K), paghahati ng magkasunod na patinig, at tuntunin sa pag-uulit',
    readingMinutes: 8,
    summary:
      'Sinusuri ng araling ito ang kahulugan ng pantig, ang siyam na kayarian ng pantig gamit ang K (katinig) at P (patinig), ang wastong pagpapantig ng salita, at ang tatlong tuntunin sa pag-uulit ng pantig.',
    discussion: [
      'Ang Pantig ay isang salik ng dila o walang antalang bugso ng tinig sa pagbigkas ng salita (halimbawa: a-ko, sam-bot, i-iwan, mang-ya-ya-ri, it-log, ma-a-a-ri). Sa kasalukuyan, nadagdagan ang mga kayarian ng pantig dahil sa ambag ng mga lokal na wika at panghihiram. Tinutukoy ito gamit ang simbolong K para sa katinig at P para sa patinig—mula sa pinakapayak na P at KP hanggang sa mga klaster tulad ng KKP, PKK, KPKK, KKPK, at KKPKK.',
      'Ang Pagpapantig naman ay ang paraan ng pagbabahagi ng salita sa mga pantig. Isang mahalagang tuntunin dito: kapag may magkasunod na dalawa o higit pang patinig sa posisyong inisyal, midyal, o final ng salita, hinahati ito sa magkakahiwalay na pantig (halimbawa: aalis -> a-a-lis, maaga -> ma-a-ga, totoo -> to-to-o, iniisip -> i-ni-i-sip).',
      'Sa Pag-uulit ng Pantig, may tatlong malinaw na tuntunin: (a) Kung patinig ang unang tunog ng salitang-ugat, patinig lamang ang inuulit kahit may unlapi (a-lis -> a-a-lis; mag-a-a-lis); (b) Kung nagsisimula sa KP, inuulit ang katinig at kasunod na patinig (ba-sa -> ba-ba-sa, mag-ba-ba-sa); at (c) Kung nagsisimula sa KK (klaster na katinig), maaaring ulitin lamang ang unang katinig at patinig (pa-plan-tsa-hin) o ulitin ang buong klaster kasama ang patinig (pla-plan-tsa-hin).',
    ],
    keyConcepts: [
      {
        term: 'Ang Pantig',
        meaning: 'Isang salik ng dila o walang antalang bugso ng tinig sa pagbigkas ng salita.',
      },
      {
        term: 'Simbolong K at P',
        meaning: 'K ay kumakatawan sa katinig at P ay kumakatawan sa patinig sa kayarian ng pantig.',
      },
      {
        term: 'Pagpapantig ng Magkasunod na Patinig',
        meaning: 'Magkahiwalay na pantig ang dalawa o higit pang magkasunod na patinig sa inisyal, midyal, o final.',
      },
      {
        term: 'Pag-uulit sa Klaster (KK)',
        meaning: 'May dalawang katanggap-tanggap na paraan: pa-plan-tsa-hin o pla-plan-tsa-hin.',
      },
    ],
    examples: [
      {
        id: 'ex-4-1',
        title: 'Mga Batayang Kayarian (P, KP, PK, KPK)',
        statement: 'P: u-pa · KP: ma-li · PK: is-da, it-log, ak-lat · KPK: han-da, lib-ro.',
        explanation:
          'Makikita ang payak at katutubong kayarian ng pantig gamit ang isang patinig at hanggang dalawang katinig.',
      },
      {
        id: 'ex-4-2',
        title: 'Mga Kayariang May Klaster (KKP, PKK, KPKK, KKPK, KKPKK)',
        statement: 'KKP: pri-to, pre-syo · PKK: eks-perto · KPKK: plan-tsa, plas-tik · KKPK: blang-ko · KKPKK: shorts, skirts.',
        explanation:
          'Bunga ng mga hiram na salita at lokal na wika, pumasok ang mga pantig na may kambal-katinig o klaster.',
      },
      {
        id: 'ex-4-3',
        title: 'Pagpapantig ng Magkasunod na Patinig',
        statement: 'aalis -> a-a-lis · maaga -> ma-a-ga · totoo -> to-to-o · iniisip -> i-ni-i-sip · iniibig -> i-ni-i-big.',
        explanation:
          'Pinananatili ang bawat patinig bilang hiwalay na pantig sa inisyal, midyal, at hulihang bahagi.',
      },
      {
        id: 'ex-4-4',
        title: 'Pag-uulit: Unang Tunog ay Patinig (Kahit May Unlapi)',
        statement: 'alis -> a-a-lis (mag-a-a-lis) · iwan -> i-i-wan (ma-i-i-wan) · ambon -> a-am-bon (u-ma-am-bon) · ekstra -> e-eks-tra.',
        explanation:
          'Tanging ang unang patinig lamang ng salitang-ugat ang inuulit, kahit dinagdagan ng unlapi.',
      },
      {
        id: 'ex-4-5',
        title: 'Pag-uulit: Nagsisimula sa KP (Katinig-Patinig)',
        statement: 'ba-sa -> ba-ba-sa (mag-ba-ba-sa) · la-kad -> la-la-kad (ni-la-la-kad) · tak-bo -> ta-tak-bo (nag-ta-tak-bo) · nars -> mag-na-nars.',
        explanation:
          'Inuulit lamang ang unang katinig at ang kasunod nitong patinig.',
      },
      {
        id: 'ex-4-6',
        title: 'Pag-uulit: Nagsisimula sa KK (Klaster na Katinig)',
        statement: 'Paraan A: pa-plan-tsa-hin, pi-pri-tu-hin, ku-kwen-tu-han · Paraan B: pla-plan-tsa-hin, pri-pri-tu-hin, kwe-kwen-tu-han.',
        explanation:
          'Parehong wasto ang pag-uulit ng unang katinig+patinig o ng buong klaster+patinig depende sa nakasanayang bigkas ng komunidad.',
      },
    ],
    imagePath: '/src/assets/images/visual_balarila_sugnay_1794921762645.jpg',
    imageAlt: 'Mga tala sa palapantigan at paghahati ng mga pantig',
    imageCaption:
      'Larawan 4.1: Ang pag-unawa sa mga kayariang K at P ay gabay sa wastong pagpapantig at pag-uulit ng pantig.',
    diagramType: 'pantig-paguulit',
    table: {
      title: 'Talahanayan 4.1: Siyam na Kayarian ng Pantig',
      caption: 'Mga pormula ng pantig gamit ang K (katinig) at P (patinig) kasama ang mga halimbawa.',
      headers: ['Kayarian', 'Kahulugan ng Pormula', 'Mga Halimbawa'],
      rows: [
        ['P', 'Patinig lamang', 'u-pa, a-so'],
        ['KP', 'Katinig + Patinig', 'ma-li, ba-ta'],
        ['PK', 'Patinig + Katinig', 'is-da, it-log, ak-lat'],
        ['KPK', 'Katinig + Patinig + Katinig', 'han-da, lib-ro'],
        ['KKP', 'Klaster + Patinig', 'pri-to, pre-syo, pru-tas, gri-po'],
        ['PKK', 'Patinig + Klaster', 'eks-per-to, eks-pres-yon'],
        ['KPKK', 'Katinig + Patinig + Klaster', 'plan-tsa, plas-tik, prak-tis, plan-ta'],
        ['KKPK', 'Klaster + Patinig + Katinig', 'trans-por-ta-syon, blang-ko, trans-krip-syon'],
        ['KKPKK', 'Klaster + Patinig + Klaster', 'shorts, skirts, shirts, tsarts'],
      ],
    },
    extraActivity: {
      title: 'Gawain sa Pagpapantig at Pag-uulit',
      instructions:
        'Ibigay ang kayarian ng unang pantig ng salitang "prito" at isulat ang dalawang paraan ng pag-uulit nito.',
      samplePrompt:
        'Unang pantig: "pri" (KKP). Dalawang paraan: "pi-pri-tu-hin / mag-pi-pri-to" (unang katinig at patinig) o "pri-pri-tu-hin / mag-pri-pri-to" (klaster at patinig).',
    },
    quiz: [
      {
        id: 'q-4-1',
        question: 'Ano ang kayarian ng pantig na "eks" sa salitang "eks-perto"?',
        choices: ['KPK', 'PKK', 'KKP', 'KKPK'],
        correctIndex: 1,
        explanation:
          'Nagsisimula sa patinig na /e/ at sinusundan ng dalawang katinig /k/ at /s/, kaya ito ay PKK.',
      },
      {
        id: 'q-4-2',
        question: 'Paano ang tamang pagpapantig sa salitang "maaga" ayon sa tuntunin ng magkasunod na patinig?',
        choices: ['maa-ga', 'ma-a-ga', 'ma-ag-a', 'm-aa-ga'],
        correctIndex: 1,
        explanation:
          'Kapag may magkasunod na patinig, hinahati ito bilang magkahiwalay na pantig: ma-a-ga.',
      },
      {
        id: 'q-4-3',
        question: 'Aling anyo ang nagpapakita ng wastong pag-uulit ng pantig sa salitang-ugat na "alis" na may unlaping "mag-"?',
        choices: ['mag-a-lis', 'mag-a-a-lis', 'ma-ga-a-lis', 'mag-al-a-lis'],
        correctIndex: 1,
        explanation:
          'Patining lamang na "a" ang inuulit dahil patinig ang unang tunog ng "alis", kaya mag-a-a-lis.',
      },
    ],
  },

  // ================= SEMI-FINALS (OLIVE / OCHRE BROWN) =================
  {
    id: 'aralin-05-sugnay',
    number: '05',
    term: 'semi-finals',
    classroomRef: 'Semi-Finals · Ang Sugnay',
    postedDate: 'Oktubre 1',
    title: 'Ang Sugnay: Uri at Gamit (Pangngalan, Pang-uri, Pang-abay)',
    subtitle: 'Sugnay na Makapag-iisa at Di-makapag-iisa at ang tatlong gamit nito sa pangungusap',
    readingMinutes: 8,
    summary:
      'Tinatalakay sa araling ito ang Sugnay—lipon ng mga salita na may paksa at panaguri na maaaring buo o di-buo ang diwang ipinahahayag—ang dalawang uri nito, at ang tatlong gamit ng sugnay na di-makapag-iisa.',
    discussion: [
      'Ang Sugnay ay lipon ng mga salita na may paksa at panaguri na maaaring buo o di-buo ang diwang ipinahahayag. Nahahati ito sa dalawang uri: ang Sugnay na Makapag-iisa (tinatawag ding punong sugnay) na may paksa, panaguri, at buong diwa; at ang Sugnay na Di-makapag-iisa na may paksa at panaguri subalit di-buo ang diwa at gumagamit ng mga pangatnig, pang-angkop, at panghalip pamatlig upang maiugnay sa ibang sugnay.',
      'May tatlong Gamit ang Sugnay na Di-makapag-iisa sa loob ng pangungusap: (A) Pangngalan — kapag ito ang nagsisilbing paksa ng pangungusap (hal. "Kapag di ka naglubay ay lalo kang iiyak"); (B) Pang-uri — kapag panuring ng pangngalan at pinangungunahan ng panghalip na pamanggit na "na" o "-ng" na katumbas sa Ingles ng who, which, o that.',
      '(C) Pang-abay — nagiging pang-abay ang sugnay kapag ang sugnay na di-makapag-iisa ay panuring ng pandiwa, pang-uri, o pang-abay (hal. "Ang bata ay malungkot kapag wala ang kanyang ina").',
    ],
    keyConcepts: [
      {
        term: 'Sugnay na Makapag-iisa',
        meaning: 'May paksa at panaguri at buo ang diwang ipinapahayag; tinatawag ding punong sugnay.',
      },
      {
        term: 'Sugnay na Di-makapag-iisa',
        meaning: 'May paksa at panaguri subalit di-buo ang diwa; gumagamit ng pangatnig o pang-angkop.',
      },
      {
        term: 'Gamit na Pangngalan & Pang-uri',
        meaning: 'Pangngalan kapag paksa ng pangungusap; Pang-uri kapag panuring ng pangngalan gamit ang na / -ng.',
      },
      {
        term: 'Gamit na Pang-abay',
        meaning: 'Panuring ng pandiwa, pang-uri, o kapwa pang-abay sa loob ng pangungusap.',
      },
    ],
    examples: [
      {
        id: 'ex-5-1',
        title: 'Sugnay na Makapag-iisa (Punong Sugnay)',
        statement: '1. Nakasulat si Zanjoe ng isang mainam na sulatin. · 2. Ang kanyang ama ay isang guro. · 3. Si Jane ay isang huwarang asawa.',
        explanation:
          'Bawat isa ay may paksa at panaguri at nagpapahayag ng kumpletong kaisipan kahit walang kadugtong.',
      },
      {
        id: 'ex-5-2',
        title: 'Sugnay na Di-makapag-iisa',
        statement: '1. Nang kami ay lumuwas ng Maynila · 2. Kung darating sila · 3. Na umalis kami sa burol · 4. Nang mahulog ang bata sa puno · 5. Nang bumagtas kami sa liku-likong daan.',
        explanation:
          'May simuno at panaguri ngunit bitin ang diwa kaya nangangailangan ng punong sugnay.',
      },
      {
        id: 'ex-5-3',
        title: 'Gamit ng Sugnay: Pangngalan',
        statement: '1. Hindi ko alam kung bakit sila nawawala. · 2. Kapag di ka naglubay ay lalo kang iiyak. · 3. Kung wala kang tiyaga ay di ka magtatagumpay.',
        explanation:
          'Ang sugnay na di-makapag-iisa ay gumaganap bilang paksa o layon na katulad ng pangngalan.',
        segmentA: 'Kung wala kang tiyaga',
        labelA: 'Sugnay na Pangngalan (Paksa)',
        segmentB: 'ay di ka magtatagumpay.',
        labelB: 'Panaguri ng Pangungusap',
      },
      {
        id: 'ex-5-4',
        title: 'Gamit ng Sugnay: Pang-uri',
        statement: '1. Ang Banaue Rice Terraces na hinagdan nila ay napakaganda. · 2. Ang lalaking dumalaw sa kanila ay kasintahan ni Kris. · 3. Ang dahong nalaglag sa puno ay tinangay ng hangin.',
        explanation:
          'Inilalarawan ng sugnay ang mga pangngalang "Banaue Rice Terraces", "lalaki", at "dahon" gamit ang pang-angkop na na / -ng.',
        segmentA: 'Ang Banaue Rice Terraces',
        labelA: 'Pangngalang Tinuturingan',
        segmentB: 'na hinagdan nila',
        labelB: 'Sugnay na Pang-uri',
      },
      {
        id: 'ex-5-5',
        title: 'Gamit ng Sugnay: Pang-abay',
        statement: '1. Kami ay titiwalag na kung sila ay sasanib sa atin. · 2. Ang bata ay malungkot kapag wala ang kanyang ina. · 3. Sila ay aalis bukas kung nakabili na sila ng ticket.',
        explanation:
          'Nagbibigay ng kondisyon o panahon sa pandiwa o pang-uri ("titiwalag", "malungkot", "aalis").',
        segmentA: 'Ang bata ay malungkot',
        labelA: 'Sugnay na Makapag-iisa',
        segmentB: 'kapag wala ang kanyang ina.',
        labelB: 'Sugnay na Pang-abay',
      },
    ],
    imagePath: '/src/assets/images/visual_balarila_sugnay_1794921762645.jpg',
    imageAlt: 'Dayagram ng paghihimay ng mga sugnay sa isang papel',
    imageCaption:
      'Larawan 5.1: Sa pagsusuri ng sugnay, tinitingnan ang paksa, panaguri, pangatnig, at tungkulin nito sa pangungusap.',
    diagramType: 'sugnay-builder',
    table: {
      title: 'Talahanayan 5.1: Uri at Gamit ng Sugnay',
      caption: 'Buod ng pagkakaiba ng dalawang uri at tatlong gamit ng sugnay.',
      headers: ['Kategorya', 'Katuturan', 'Halimbawa'],
      rows: [
        ['Sugnay na Makapag-iisa', 'May paksa at panaguri; buo ang diwa', 'Nakasulat si Zanjoe ng isang mainam na sulatin.'],
        ['Sugnay na Di-makapag-iisa', 'May paksa at panaguri; di-buo ang diwa', 'Nang kami ay lumuwas ng Maynila...'],
        ['Gamit: Pangngalan', 'Gumaganap bilang paksa o layon', 'Kung wala kang tiyaga ay di ka magtatagumpay.'],
        ['Gamit: Pang-uri', 'Panuring ng pangngalan (may na / -ng)', 'Ang dahong nalaglag sa puno ay tinangay ng hangin.'],
        ['Gamit: Pang-abay', 'Panuring ng pandiwa, pang-uri, o pang-abay', 'Ang bata ay malungkot kapag wala ang kanyang ina.'],
      ],
    },
    extraActivity: {
      title: 'Gawain: Tukuyin ang Gamit ng Sugnay',
      instructions:
        'Suriin kung Pangngalan, Pang-uri, o Pang-abay ang nakahilig na sugnay: "Ang lalaking *dumalaw sa kanila* ay kasintahan ni Kris."',
      samplePrompt:
        'Sagot: Pang-uri — sapagkat ang sugnay na "dumalaw sa kanila" (pinag-ugnay ng -ng) ay naglalarawan sa pangngalang "lalaki".',
    },
    quiz: [
      {
        id: 'q-5-1',
        question: 'Alin sa mga sumusunod ang Sugnay na Makapag-iisa (Punong Sugnay)?',
        choices: [
          'Nang kami ay lumuwas ng Maynila',
          'Ang kanyang ama ay isang guro',
          'Kung darating sila',
          'Nang mahulog ang bata sa puno',
        ],
        correctIndex: 1,
        explanation:
          'Ang "Ang kanyang ama ay isang guro" ay may paksa, panaguri, at buong diwang nakatatayo nang mag-isa.',
      },
      {
        id: 'q-5-2',
        question: 'Ano ang gamit ng sugnay na di-makapag-iisa sa pangungusap na "Ang dahong nalaglag sa puno ay tinangay ng hangin"?',
        choices: ['Pangngalan', 'Pang-uri', 'Pang-abay', 'Pandiwa'],
        correctIndex: 1,
        explanation:
          'Pang-uri ito dahil tinuturingan nito ang pangngalang "dahon" gamit ang pang-angkop na "-ng".',
      },
      {
        id: 'q-5-3',
        question: 'Sa pangungusap na "Sila ay aalis bukas kung nakabili na sila ng ticket", anong gamit ang mayroon sa "kung nakabili na sila ng ticket"?',
        choices: ['Pangngalan', 'Pang-uri', 'Pang-abay', 'Punong sugnay'],
        correctIndex: 2,
        explanation:
          'Pang-abay ang gamit nito dahil tinuturingan nito ang pandiwang "aalis" at nagsasaad ng kondisyon.',
      },
    ],
  },

  {
    id: 'aralin-06-pangungusap-kayarian',
    number: '06',
    term: 'semi-finals',
    classroomRef: 'Semi-Finals · Pangungusap',
    postedDate: 'Oktubre',
    title: 'Pangungusap: Kayarian (Payak, Tambalan, Hugnayan, Langkapan) at Gamit',
    subtitle: 'Simuno, panaguri, mga anyo ng payak (PS-PP hanggang TS-TP), at apat na uri ayon sa gamit',
    readingMinutes: 8,
    summary:
      'Binubuo ng araling ito ang buong kaalaman tungkol sa Pangungusap: ang dalawang bahagi nito (Simuno at Panaguri), ang apat na kayarian kasama ang apat na anyo ng Payak, at ang apat na uri ng pangungusap ayon sa gamit.',
    discussion: [
      'Ang Pangungusap ay isang salita o lipon ng mga salita na nagsasaad ng isang buong diwa at binubuo ng Simuno (ang siyang pinag-uusapan sa pangungusap) at Panaguri (ang mga salitang nagsasabi tungkol sa simuno). Ayon sa kayarian, nahahati ito sa apat: Payak, Tambalan, Hugnayan, at Langkapan.',
      'Ang Payak ay may iisang paksang pinag-uusapan na may apat na anyo: PS-PP (Payak na simuno at payak na panaguri), PS-TP (Payak na simuno at tambalang panaguri), TS-PP (Tambalang simuno at payak na panaguri), at TS-TP (Tambalang simuno at tambalang panaguri). Ang Tambalan naman ay pinag-uugnay ng pangatnig ang dalawang malayang kaisipan; ang Hugnayan ay binubuo ng isang SM at isang SDM; at ang Langkapan ay may higit sa isang SM o SDM.',
      'Ayon naman sa Gamit, may apat na uri ng pangungusap: (1) Pasalaysay o Paturol na nagsasalaysay ng katotohanan at nagtatapos sa tuldok; (2) Patanong na nag-uusisa at may tandang pananong (?); (3) Padamdam na nagsasaad ng matinding damdamin gamit ang tandang padamdam (!); at (4) Pautos o Pakiusap na nagpapahayag ng obligasyon o magalang na kahilingan at nagtatapos sa tuldok.',
    ],
    keyConcepts: [
      {
        term: 'Simuno at Panaguri',
        meaning: 'Simuno ang pinag-uusapan; Panaguri ang nagsasabi tungkol sa simuno.',
      },
      {
        term: 'Apat na Anyo ng Payak',
        meaning: 'PS-PP (Payak-Payak), PS-TP (Payak-Tambalan), TS-PP (Tambalan-Payak), at TS-TP (Tambalan-Tambalan).',
      },
      {
        term: 'Tambalan, Hugnayan, at Langkapan',
        meaning: 'Tambalan (SM+SM), Hugnayan (SM+SDM), at Langkapan (2+ SM at 1+ SDM).',
      },
      {
        term: 'Apat na Uri Ayon sa Gamit',
        meaning: 'Pasalaysay/Paturol (.), Patanong (?), Padamdam (!), at Pautos o Pakiusap (.).',
      },
    ],
    examples: [
      {
        id: 'ex-6-1',
        title: 'Payak: PS-PP at PS-TP',
        statement: 'PS-PP: "Matalinong bata si Ruby." · PS-TP: "Matalino at masipag na mag-aaral si Jose."',
        explanation:
          'Sa PS-PP, isa ang simuno at isa ang panaguri; sa PS-TP, isa ang simuno (Jose) ngunit dalawa ang panaguri (matalino at masipag).',
      },
      {
        id: 'ex-6-2',
        title: 'Payak: TS-PP at TS-TP',
        statement: 'TS-PP: "Kapwa matulungin sina Jun at Lito." · TS-TP: "Mapagmahal at maalalahanin sina mama at papa."',
        explanation:
          'Sa TS-PP, dalawa ang simuno (Jun at Lito); sa TS-TP, tambalan pareho ang simuno (mama at papa) at panaguri (mapagmahal at maalalahanin).',
      },
      {
        id: 'ex-6-3',
        title: 'Tambalang Pangungusap',
        statement: '"Si Luis ay mahilig mang-asar samantalang si Loreng ay mapagmahal."',
        explanation:
          'Dalawang sugnay na makapag-iisa na pinag-ugnay ng pangatnig na "samantalang".',
        segmentA: 'Si Luis ay mahilig mang-asar',
        labelA: 'Unang Kaisipan (SM)',
        segmentB: 'si Loreng ay mapagmahal.',
        labelB: 'Ikalawang Kaisipan (SM)',
      },
      {
        id: 'ex-6-4',
        title: 'Hugnayang Pangungusap',
        statement: '"Di malayong umunlad ang Pilipinas kung ang mga mamamayan ay magtutulung-tulong."',
        explanation:
          'Isang sugnay na makapag-iisa at isang sugnay na di-makapag-iisa na pinag-ugnay ng "kung".',
        segmentA: 'Di malayong umunlad ang Pilipinas',
        labelA: 'Sugnay na Makapag-iisa',
        segmentB: 'kung ang mga mamamayan ay magtutulung-tulong.',
        labelB: 'Sugnay na Di-makapag-iisa',
      },
      {
        id: 'ex-6-5',
        title: 'Langkapang Pangungusap',
        statement: '"Makapapasa talaga siya at makatatamo ng diploma kung magsisipag sa pag-aaral at magtitiis ng hirap."',
        explanation:
          'Binubuo ng dalawang sugnay na makapag-iisa at dalawang sugnay na di-makapag-iisa.',
        segmentA: 'Makapapasa talaga siya at makatatamo ng diploma',
        labelA: '2 Sugnay na Makapag-iisa',
        segmentB: 'kung magsisipag sa pag-aaral at magtitiis ng hirap.',
        labelB: '2 Sugnay na Di-makapag-iisa',
      },
      {
        id: 'ex-6-6',
        title: 'Apat na Uri Ayon sa Gamit',
        statement: 'Paturol: "Nag-aaral ang klase." · Patanong: "Tapos ka na ba?" · Padamdam: "Naku, nahulog!" · Pakiusap: "Pakibuksan ang pinto."',
        explanation:
          'Iba’t ibang bantas at tono ang ginagamit depende sa layunin ng nagsasalita.',
      },
    ],
    imagePath: '/src/assets/images/visual_balarila_sugnay_1794921762645.jpg',
    imageAlt: 'Estruktura ng pagbubuo ng mga pangungusap mula sa mga sugnay',
    imageCaption:
      'Larawan 6.1: Ang mga anyo ng Payak hanggang Langkapan ay nakasalalay sa bilang ng simuno, panaguri, at sugnay.',
    diagramType: 'kayarian-pangungusap',
    table: {
      title: 'Talahanayan 6.1: Mga Anyo ng Payak at Iba Pang Kayarian',
      caption: 'Mabilisang gabay sa apat na anyo ng Payak at iba pang kayarian ng pangungusap.',
      headers: ['Kayarian / Anyo', 'Estruktura', 'Halimbawa'],
      rows: [
        ['Payak (PS-PP)', '1 Simuno + 1 Panaguri', 'Masipag na mag-aaral si Jose.'],
        ['Payak (PS-TP)', '1 Simuno + 2 Panaguri', 'Mabait at mapagkakatiwalaan ang kaibigan ko.'],
        ['Payak (TS-PP)', '2 Simuno + 1 Panaguri', 'Kapwa matulungin sina Jun at Lito.'],
        ['Payak (TS-TP)', '2 Simuno + 2 Panaguri', 'Mapagmahal at maalalahanin sina mama at papa.'],
        ['Tambalan', 'SM + Pangatnig + SM', 'Si Luis ay mahilig mang-asar samantalang si Loreng ay mapagmahal.'],
        ['Hugnayan', 'SM + SDM', 'Di malayong umunlad ang Pilipinas kung magtutulung-tulong tayo.'],
        ['Langkapan', '2+ SM + 1+ SDM', 'Makapapasa siya at makatatamo ng diploma kung magsisipag sa pag-aaral.'],
      ],
    },
    extraActivity: {
      title: 'Pagsasanay sa Pagsusuri ng Payak (PS/TS)',
      instructions:
        'Tukuyin ang anyo ng payak na pangungusap: "Ang kaayusan at kalinisan ng loob ay kailangan ninuman."',
      samplePrompt:
        'Sagot: TS-PP (Tambalang Simuno at Payak na Panaguri) — dalawa ang simuno ("kaayusan at kalinisan ng loob") at iisa ang panaguri ("kailangan ninuman").',
    },
    quiz: [
      {
        id: 'q-6-1',
        question: 'Anong anyo ng payak na pangungusap ang "Kapwa matulungin sina Jun at Lito"?',
        choices: ['PS-PP', 'PS-TP', 'TS-PP', 'TS-TP'],
        correctIndex: 2,
        explanation:
          'TS-PP ito dahil tambalan ang simuno ("Jun at Lito") at payak ang panaguri ("matulungin").',
      },
      {
        id: 'q-6-2',
        question: 'Alin sa mga sumusunod ang Hugnayang Pangungusap?',
        choices: [
          'Matalinong bata si Ruby.',
          'Si Luis ay mahilig mang-asar samantalang si Loreng ay mapagmahal.',
          'Di malayong umunlad ang Pilipinas kung ang mga mamamayan ay magtutulung-tulong.',
          'Mapagmahal at maalalahanin sina mama at papa.',
        ],
        correctIndex: 2,
        explanation:
          'Binubuo ito ng isang sugnay na makapag-iisa at isang sugnay na di-makapag-iisa na pinag-uugnay ng "kung".',
      },
      {
        id: 'q-6-3',
        question: 'Anong uri ng pangungusap ayon sa gamit ang nagpapahayag ng masidhing damdamin tulad ng gulat, tuwa, o paghanga?',
        choices: ['Paturol', 'Patanong', 'Padamdam', 'Pakiusap'],
        correctIndex: 2,
        explanation:
          'Pangungusap na Padamdam ang nagsasaad ng matinding damdamin at karaniwang nagtatapos sa tandang padamdam (!).',
      },
    ],
  },

  // ================= FINALS (FOREST EMERALD) =================
  {
    id: 'aralin-07-diskurso-retorika',
    number: '07',
    term: 'finals',
    classroomRef: 'Finals · Retorika at Diskurso',
    postedDate: 'Nobyembre',
    title: 'Mga Uri ng Diskurso, Retorika, at Tayutay',
    subtitle: 'Mabisang pagpapahayag na may bisa, linaw, at kasiningan',
    readingMinutes: 7,
    summary:
      'Binibigyang-diin sa araling ito ang Retorika o masining na pagpapahayag, ang apat na pangunahing uri ng diskurso (Paglalahad, Pagsasalaysay, Paglalarawan, Pangangatwiran), at ang mga karaniwang tayutay.',
    discussion: [
      'Ang Retorika ay ang sining ng mabisa, kaakit-akit, at mapanghikayat na pagpapahayag—pasalita man o pasulat. Sa pagsulat ng anumang teksto o website, kailangang malinaw ang layunin ng manunulat, na siyang nagtatakda kung aling Uri ng Diskurso ang nararapat gamitin.',
      'May apat na pangunahing paraan ng pagdidiskurso: (1) Paglalahad (Expository) na nagpapaliwanag ng mga ideya at hakbangin; (2) Pagsasalaysay (Narrative) na nagkukuwento ng magkakasunod na pangyayari; (3) Paglalarawan (Descriptive) na bumubuo ng malinaw na larawan sa isipan gamit ang mga pandama; at (4) Pangangatwiran (Argumentative) na humihikayat gamit ang lohika at matibay na ebidensiya.',
      'Upang higit na maging makulay at tumatak sa mambabasa ang pagpapahayag, gumagamit din ng mga Tayutay gaya ng Pagtutulad (Simile), Pagwawangis (Metaphor), Pagsasatao (Personification), at Pagmamalabis (Hyperbole). Gayunman, sa mga sulating teknikal, ang kalinawan at katumpakan ay laging inuuna kaysa labis na palamuti.',
    ],
    keyConcepts: [
      {
        term: 'Paglalahad (Ekspositori)',
        meaning: 'Nagbibigay-linaw, nagpapaliwanag ng proseso, o nagtuturo ng konsepto (gaya ng mga aralin sa website na ito).',
      },
      {
        term: 'Pagsasalaysay at Paglalarawan',
        meaning: 'Ang pagsasalaysay ay naglalahad ng kuwento o kronolohiya; ang paglalarawan ay gumagamit ng mga pandama.',
      },
      {
        term: 'Pangangatwiran',
        meaning: 'Nagtatanggol ng isang panig o paninindigan batay sa katotohanan, lohika, at patunay.',
      },
      {
        term: 'Tayutay',
        meaning: 'Masining na paglayo sa karaniwang kahulugan ng mga salita upang maging mas mabisa ang paglalarawan.',
      },
    ],
    examples: [
      {
        id: 'ex-7-1',
        title: 'Diskursong Paglalahad',
        statement: '"Upang makabuo ng website, unahin ang balangkas ng nilalaman bago ang paglalapat ng disenyo at kulay."',
        explanation: 'Direkta itong nagpapaliwanag ng proseso at impormasyon nang walang pagkiling.',
      },
      {
        id: 'ex-7-2',
        title: 'Diskursong Pagsasalaysay',
        statement: '"Noong Hulyo, sinimulan namin ang Filipino 1 sa linggwistika ng wika hanggang umabot kami sa pagsusuri ng sugnay nitong Oktubre."',
        explanation: 'Sumusunod sa takbo ng panahon at naglalahad ng tunay na pagkakasunod-sunod ng karanasan.',
      },
      {
        id: 'ex-7-3',
        title: 'Diskursong Paglalarawan',
        statement: '"Tahimik ang silid-aklatan habang marahang pumapasok ang ginintuang sinag ng umaga sa nakabukas na pahina ng aklat."',
        explanation: 'Nagpapagana ng pandinig at paningin ng mambabasa upang mailarawan ang tagpo.',
      },
      {
        id: 'ex-7-4',
        title: 'Diskursong Pangangatwiran',
        statement: '"Mahalagang ituro ang Filipino sa mga kursong teknolohikal sapagkat ito ang magpapatibay sa lokal na komunikasyon at inobasyon."',
        explanation: 'Naglalahad ng matibay na posisyon at dahilan upang makumbinsi ang mambabasa.',
      },
      {
        id: 'ex-7-5',
        title: 'Pagtutulad vs. Pagwawangis',
        statement: 'Pagtutulad: "Singbilis ng kidlat ang pagproseso ng datos." · Pagwawangis: "Ang wika ay tulay ng pagkakaisa."',
        explanation: 'Ang Pagtutulad ay gumagamit ng mga panlaping tulad/gaya/sing-; ang Pagwawangis ay tuwirang paghahambing.',
      },
      {
        id: 'ex-7-6',
        title: 'Pagsasatao (Personification)',
        statement: '"Tila nakikipag-usap ang mga lumang pahina sa sinumang marunong makinig sa kasaysayan."',
        explanation: 'Binibigyan ng katangiang pantao (pakikipag-usap) ang isang bagay na walang buhay (mga pahina).',
      },
    ],
    imagePath: '/src/assets/images/hero_filipino_heritage_1794921761832.jpg',
    imageAlt: 'Buklat na aklat at panulat sa tabi ng bintana bilang simbolo ng retorika at panitikan',
    imageCaption:
      'Larawan 7.1: Ang pagsasanib ng maayos na balarila at masining na retorika ay nagbubunga ng mapanghikayat na pagpapahayag.',
    diagramType: 'diskurso-retorika',
    table: {
      title: 'Talahanayan 7.1: Apat na Pangunahing Uri ng Diskurso',
      caption: 'Gabay sa pagpili ng diskurso ayon sa layunin ng tagapagsalita o manunulat.',
      headers: ['Uri ng Diskurso', 'Pangunahing Tanong na Sinasagot', 'Halimbawang Sulatin'],
      rows: [
        ['Paglalahad', 'Ano ito? Paano ito ginagawa?', 'Modyul, manwal, balita, sanaysay'],
        ['Pagsasalaysay', 'Ano ang nangyari at kailan?', 'Talambuhay, maikling kuwento, talaarawan'],
        ['Paglalarawan', 'Ano ang hitsura, amoy, o damdamin nito?', 'Tula, paglalarawan ng tauhan o pook'],
        ['Pangangatwiran', 'Bakit ito tama o dapat paniwalaan?', 'Editoryal, posisyong papel, debate'],
      ],
    },
    extraActivity: {
      title: 'Pagsasanay sa Pagsulat ng Diskurso',
      instructions:
        'Sumulat ng dalawang pangungusap tungkol sa paggamit ng kompyuter: isa sa estilong Paglalahad at isa sa estilong Pangangatwiran.',
      samplePrompt:
        'Paglalahad: "Ang kompyuter ay binubuo ng hardware at software na nagtutulungan sa pagproseso ng datos." Pangangatwiran: "Dapat matutong mag-code nang responsable ang kabataan upang makalikha ng ligtas na teknolohiya."',
    },
    quiz: [
      {
        id: 'q-7-1',
        question: 'Anong uri ng diskurso ang pangunahing ginagamit sa pagbuo ng mga gabay, manwal, at aralin sa website?',
        choices: ['Pagsasalaysay', 'Paglalarawan', 'Paglalahad', 'Pagmamalabis'],
        correctIndex: 2,
        explanation:
          'Ang Paglalahad (ekspositori) ang pinakaangkop sa pagpapaliwanag ng mga konsepto, kahulugan, at hakbangin.',
      },
      {
        id: 'q-7-2',
        question: '"Ang mga tala sa ulap ay kumikindat sa mga manlalakbay." Anong tayutay ang ginamit?',
        choices: ['Pagtutulad', 'Pagwawangis', 'Pagsasatao', 'Pag-uyam'],
        correctIndex: 2,
        explanation:
          'Pagsasatao ito dahil ang kilos ng tao (pagkindat) ay ikinabit sa isang bagay na walang buhay (mga tala).',
      },
      {
        id: 'q-7-3',
        question: 'Aling tayutay ang gumagamit ng mga salitang "tulad ng", "parang", o "gaya ng" sa paghahambing?',
        choices: ['Pagwawangis', 'Pagtutulad', 'Pagmamalabis', 'Pagtawag'],
        correctIndex: 1,
        explanation:
          'Ang Pagtutulad (Simile) ay di-tuwirang paghahambing na gumagamit ng mga panandang "tulad", "gaya", "tila", o "parang".',
      },
    ],
  },

  {
    id: 'aralin-08-pananaliksik-teknolohiya',
    number: '08',
    term: 'finals',
    classroomRef: 'Finals · Pananaliksik at Teknolohiya',
    postedDate: 'Nobyembre',
    title: 'Mapanuring Pagbasa, Pananaliksik, at Filipino sa Teknolohiya',
    subtitle: 'Etika sa pagsipi, paglalagom, at paggamit ng wika sa larangan ng BSIT',
    readingMinutes: 8,
    summary:
      'Pinagtitibay ng panghuling aralin ang kasanayan sa mapanuring pagbasa, pagbubuod gamit ang sariling pananalita, wastong pagbanggit ng sanggunian, at ang mahalagang papel ng wikang Filipino sa pagpapaunlad ng teknolohiyang Pilipino.',
    discussion: [
      'Ang Mapanuring Pagbasa ay hindi lamang basta pagtunghay sa mga salita; ito ay pagtitimbang sa katotohanan, layunin ng may-akda, at tibay ng mga ebidensiya. Kapag nagbabasa tayo ng mga sanggunian mula sa internet o aklat, tungkulin nating suriin kung mapagkakatiwalaan ang pinagmulan ng impormasyon.',
      'Sa paggawa ng akademikong gawain at pananaliksik, mahigpit na ipinagbabawal ang Plagiarism o tuwirang pangongopya nang walang pahintulot o pagkilala. Upang maiwasan ito, sinasanay ang sarili sa Paglalagom (Summarizing) at Hawig (Paraphrasing)—ang pag-unawa sa binasa at paglalahad nito sa sariling pananalita—kasama ang maayos na pagtatala ng mga Sanggunian.',
      'Bilang mga mag-aaral ng Bachelor of Science in Information Technology (BSIT 1C), malaki ang maiaambag ng kahusayan sa Filipino 1 sa ating propesyon. Mula sa pagdidisenyo ng mga user interface na may salin sa wikang naiintindihan ng nakararami, pagsulat ng malinaw na dokumentasyon, hanggang sa pakikipag-ugnayan sa mga Pilipinong kliyente, ang wika at teknolohiya ay magkatuwang na sandata sa serbisyo publiko.',
    ],
    keyConcepts: [
      {
        term: 'Mapanuring Pagbasa',
        meaning: 'Aktibong pagsusuri sa katumpakan, lohika, at pinagkunan ng isang teksto o balita.',
      },
      {
        term: 'Paglalagom at Hawig',
        meaning: 'Pagsasalin ng diwa ng binasang akda gamit ang sariling pangungusap nang hindi binabago ang kahulugan.',
      },
      {
        term: 'Pag-iwas sa Plagiarism',
        meaning: 'Tapat na pagkilala sa orihinal na may-akda sa pamamagitan ng wastong pagsipi at listahan ng sanggunian.',
      },
      {
        term: 'Lokalisasyon sa ICT',
        meaning: 'Pag-aangkop ng mga aplikasyon, website, at teknolohiya sa wika at kulturang Pilipino.',
      },
    ],
    examples: [
      {
        id: 'ex-8-1',
        title: 'Pagkilala sa Mapagkakatiwalaang Sanggunian',
        statement: 'Paggamit ng publikasyon ng Komisyon sa Wikang Filipino (KWF) at mga peer-reviewed journal kaysa hindi beripikadong blog.',
        explanation: 'Mas mataas ang kredibilidad ng mga institusyong akademiko at pangwika.',
      },
      {
        id: 'ex-8-2',
        title: 'Wastong Hawig (Paraphrasing)',
        statement: 'Orihinal: "Buhay ang wika kapag ginagamit." -> Sariling Pananalita: "Nananatiling masigla at umuunlad ang isang wika habang patuloy itong sinasalita ng mamamayan."',
        explanation: 'Napanatili ang pangunahing diwa ngunit isinulat sa bagong estruktura at bokabularyo.',
      },
      {
        id: 'ex-8-3',
        title: 'Wastong Pagtatala ng Sanggunian (Estilong APA)',
        statement: 'Santiago, A. O., & Tiangco, N. G. (2003). Makabagong Balarilang Filipino. Rex Book Store.',
        explanation: 'Ipinapakita ang apelyido ng may-akda, taon ng pagkakalathala, pamagat, at tagapaglathala.',
      },
      {
        id: 'ex-8-4',
        title: 'Pagsusuri ng Teksto (Katotohanan vs. Opinyon)',
        statement: 'Katotohanan: "Nasa Semi-Final na bahagi ng BSIT 1C ang araling Sugnay." vs. Opinyon: "Pinakamadaling aralin ang Sugnay."',
        explanation: 'Ang katotohanan ay mapatutunayan ng talaan; ang opinyon ay nakabatay sa sariling palagay.',
      },
      {
        id: 'ex-8-5',
        title: 'Aplikasyon ng Filipino sa mga Sistemang IT',
        statement: 'Pagsasalin ng mga babala sa banking app, e-government portal, at disaster alert sa wikang Filipino.',
        explanation:
          'Mas nagiging inklusibo, ligtas, at madaling gamitin ang teknolohiya para sa bawat Pilipino.',
      },
    ],
    imagePath: '/src/assets/images/visual_teknolohiya_filipino_1794921764025.jpg',
    imageAlt: 'Mag-aaral ng IT na pinagsasama ang laptop, programming notes, at mga aklat ng panitikang Filipino',
    imageCaption:
      'Larawan 8.1: Ang ugnayan ng wikang Filipino at Information Technology ay nagbubukas ng pinto sa makatao at inklusibong inobasyon.',
    diagramType: 'pananaliksik-it',
    table: {
      title: 'Talahanayan 8.1: Proseso ng Etikal na Pananaliksik at Pagsulat',
      caption: 'Limang hakbang upang matiyak na orihinal, tapat, at maayos ang isang akademikong proyekto.',
      headers: ['Hakbang', 'Gawain', 'Pangunahing Tuntunin'],
      rows: [
        ['1. Pagtukoy ng Paksa', 'Itakda ang saklaw ng aralin o tanong', 'Siguraduhing malinaw at tiyak ang paksa'],
        ['2. Pangangalap', 'Maghanap ng lehitimong aklat at modyul', 'Suriin ang kredibilidad ng may-akda at petsa'],
        ['3. Pagsusuri at Hawig', 'Basahin, unawain, at ibuod', 'Gamitin ang sariling pananalita; iwasan ang copy-paste'],
        ['4. Pagsasaayos', 'Bumuo ng balangkas at biswal na pantulong', 'Gumamit ng angkop na heading, talahanayan, at halimbawa'],
        ['5. Pagkilala (Citation)', 'Ilagay ang lahat ng sanggunian', 'Banggitin ang may-akda, taon, at pinagkunan'],
      ],
    },
    extraActivity: {
      title: 'Pangwakas na Pagninilay (BSIT 1C)',
      instructions:
        'Mag-isip ng isang proyekto sa software o website na nais mong gawin sa hinaharap at ipaliwanag sa 3 pangungusap kung paano makatutulong ang wikang Filipino rito.',
      samplePrompt:
        'Halimbawa: "Sa pagbuo ng isang lokal na health information app, makatutulong ang malinaw na wikang Filipino upang maunawaan ng bawat pamilya ang tamang pag-iwas sa sakit nang walang hadlang sa wika."',
    },
    quiz: [
      {
        id: 'q-8-1',
        question: 'Ano ang tawag sa hindi etikal na pagkopya ng teksto o ideya ng iba nang hindi nagbibigay ng pagkilala sa may-akda?',
        choices: ['Paraphrasing', 'Plagiarism', 'Lokalisasyon', 'Sintaks'],
        correctIndex: 1,
        explanation:
          'Plagiarism ang pangongopya ng gawa ng iba at pagpapalabas na sa iyo ito nang walang pagbanggit ng sanggunian.',
      },
      {
        id: 'q-8-2',
        question: 'Alin sa mga sumusunod ang tamang paraan ng paglalagom o hawig (paraphrasing)?',
        choices: [
          'Kopyahin ang buong talata at palitan lamang ang kulay ng font',
          'Unawain ang ideya ng binasa at isulat muli gamit ang sariling pangungusap',
          'Burahin ang pangalan ng orihinal na may-akda',
          'Maglagay ng mga salitang walang kaugnayan sa paksa',
        ],
        correctIndex: 1,
        explanation:
          'Sa hawig, lubos na inuunawa ang teksto at muling ipinahahayag sa sariling pananalita habang kinikilala pa rin ang pinagkunan.',
      },
      {
        id: 'q-8-3',
        question: 'Paano nakatutulong ang Filipino 1 sa isang mag-aaral ng BSIT?',
        choices: [
          'Pinapalitan nito ang lahat ng programming language',
          'Pinahuhusay nito ang kritikal na komunikasyon, dokumentasyon, at disenyong angkop sa gumagamit na Pilipino',
          'Hindi ito kailangan sa teknolohiya',
          'Pinipigilan nito ang pag-aaral ng iba pang wika',
        ],
        correctIndex: 1,
        explanation:
          'Ang malinaw na pakikipagkomunikasyon at kakayahang mag-angkop ng teknolohiya sa lokal na konteksto ay mahalagang kasanayan sa IT.',
      },
    ],
  },
];
