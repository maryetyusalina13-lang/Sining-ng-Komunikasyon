import { CheckCircle2, Info } from 'lucide-react';
import { useState } from 'react';
import { DiagramType } from '../types/filipino';

interface InteractiveDiagramProps {
  type: DiagramType;
}

export function InteractiveDiagram({ type }: InteractiveDiagramProps) {
  switch (type) {
    case 'katangian-wika':
      return <KatangianWikaDiagram />;
    case 'barayti-wika':
      return <BaraytiWikaDiagram />;
    case 'alpabeto-ortograpiya':
      return <AlpabetoDiagram />;
    case 'pantig-paguulit':
      return <PantigPaguulitDiagram />;
    case 'sugnay-builder':
      return <SugnayInteractiveDiagram />;
    case 'kayarian-pangungusap':
      return <KayarianDiagram />;
    case 'diskurso-retorika':
      return <DiskursoDiagram />;
    case 'pananaliksik-it':
      return <PananaliksikDiagram />;
  }
}

function KatangianWikaDiagram() {
  const traits = [
    { name: '1. May Sistematikong Estruktura', desc: 'May kaayusan at mga tuntunin ang wika.', sample: 'Simuno + Panaguri' },
    { name: '2. Binibigkas', desc: 'Naipapahayag ang wika sa pamamagitan ng tunog.', sample: 'Sinasalitang tunog' },
    { name: '3. Sistematikong Tunog', desc: 'May organisadong sistema ng mga tunog ang wika.', sample: 'Ponema at diin' },
    { name: '4. Arbitraryo', desc: 'Napagkakasunduan ng mga tao ang kahulugan ng mga salita.', sample: 'bahay / balay / house' },
    { name: '5. Nagbabago', desc: 'Nagbabago ang mga salita at gamit ng wika sa paglipas ng panahon.', sample: 'mag-login / selfie' },
    { name: '6. Malikhain', desc: 'Maaaring makabuo ng maraming bagong pahayag gamit ang wika.', sample: 'sulat -> kasulatan' },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-xl border border-rose-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 pb-3">
        <div>
          <p className="text-xs font-medium text-[#7A141D]">Interaktibong Dayagram 1.1 · Prelim</p>
          <h4 className="font-display text-base font-semibold text-slate-900">
            Anim na Katangian ng Wika
          </h4>
        </div>
        <span className="text-xs text-slate-500">I-click ang bawat katangian</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {traits.map((t, idx) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setActive(idx)}
            className={`rounded-lg border px-3 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer ${
              active === idx
                ? 'border-[#7A141D] bg-[#7A141D] text-white'
                : 'border-rose-200 bg-[#FAF0F1] text-slate-800 hover:bg-rose-100/70'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 rounded-lg border border-rose-200 bg-[#FDF4F5] p-4 sm:grid-cols-2">
        <div>
          <p className="text-xs text-slate-500">Katuturan</p>
          <p className="mt-1 text-sm font-medium text-slate-900">{traits[active].desc}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Halimbawa</p>
          <p className="mt-1 font-mono text-sm font-medium text-[#7A141D]">{traits[active].sample}</p>
        </div>
      </div>
    </div>
  );
}

function BaraytiWikaDiagram() {
  const varieties = [
    { name: 'Idyolek', desc: 'Natatanging paraan ng pagsasalita ng isang tao.', ex: '"Magandang Gabi Bayan"' },
    { name: 'Dayalek', desc: 'Pagkakaiba ng wika batay sa lugar o rehiyon.', ex: '"Bakit?" at "Bakit ga?"' },
    { name: 'Sosyolek', desc: 'Wikang ginagamit ng isang pangkat panlipunan.', ex: '"Repapips, ala na ako datung eh."' },
    { name: 'Etnolek', desc: 'Wikang kaugnay ng isang pangkat etniko.', ex: '"Palangga" — minamahal' },
    { name: 'Ekolek', desc: 'Mga salitang ginagamit sa loob ng tahanan.', ex: '"Mumsy" — nanay' },
    { name: 'Pidgin', desc: 'Simpleng wikang ginagamit upang magkaunawaan.', ex: '"Ako tinda damit maganda."' },
    { name: 'Creole', desc: 'Wikang naging unang wika ng isang komunidad.', ex: 'Chavacano' },
    { name: 'Register', desc: 'Pagpili ng salita ayon sa larangan at sitwasyon.', ex: '"Kapital" — puhunan o kabisera' },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <div className="rounded-xl border border-rose-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 pb-3">
        <div>
          <p className="text-xs font-medium text-[#7A141D]">Interaktibong Dayagram 2.1 · Prelim</p>
          <h4 className="font-display text-base font-semibold text-slate-900">
            Walong Barayti ng Wika
          </h4>
        </div>
        <span className="text-xs text-slate-500">Pumili ng barayti upang suriin</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {varieties.map((v, idx) => (
          <button
            key={v.name}
            type="button"
            onClick={() => setSelected(idx)}
            className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors cursor-pointer ${
              selected === idx
                ? 'border-[#7A141D] bg-[#7A141D] text-white'
                : 'border-rose-200 bg-[#FAF0F1] text-slate-800 hover:bg-rose-100/70'
            }`}
          >
            {v.name}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-rose-200 bg-[#FDF4F5] p-4 text-sm">
        <p className="font-semibold text-[#7A141D]">{varieties[selected].name}</p>
        <p className="mt-1 text-slate-700">{varieties[selected].desc}</p>
        <p className="mt-2 font-mono text-xs font-medium text-slate-900">
          Halimbawa: {varieties[selected].ex}
        </p>
      </div>

      <div className="mt-4 border-t border-rose-100 pt-3">
        <p className="text-xs font-semibold text-slate-700">Iba’t ibang Wika sa Pilipinas:</p>
        <p className="mt-1 text-xs font-medium tracking-wide text-[#7A141D]">
          TAGALOG · CEBUANO · WARAY · BICOLANO · TAUSUG · ILOKANO · ILONGGO · KAPAMPANGAN
        </p>
      </div>
    </div>
  );
}

function AlpabetoDiagram() {
  const eras = [
    {
      name: '1. Alibata',
      title: 'Lumang Alibata (Baybayin)',
      desc: 'Katutubong sistema ng pagsulat ng mga sinaunang Pilipino bago dumating ang mga Kastila.',
      letters: 'Katutubong panulat na may mga patinig at katinig na pantig',
    },
    {
      name: '2. Abecedario',
      title: 'Alpabetong Romano (Abecedario)',
      desc: 'Pinakamahalagang impluwensiya ng mga Kastila sa pagsulat na pumalit sa lumang Alibata.',
      letters: 'A, B, C, CH, D, E, F, G, H, I, J, K, L, LL, M, N, Ñ, O, P, Q, R, RR, S, T, U, V, W, X, Y, Z',
    },
    {
      name: '3. Reporma ni Rizal',
      title: 'Sobre la Nueva Ortografia dela Lengua Tagala',
      desc: 'Inilathala ni Dr. Jose Rizal upang itaguyod ang mas angkop na baybay ng wikang Tagalog.',
      letters: 'Pagsusulong ng letrang K at W sa halip na C at Q',
    },
    {
      name: '4. ABAKADA (1940)',
      title: 'ABAKADA ni Lope K. Santos (20 Titik)',
      desc: 'Binalangkas noong 1940 kasabay ng pagtuturo ng Wikang Pambansa: 15 katinig at 5 patinig.',
      letters: '/a/ /ba/ /ka/ /da/ /e/ /ga/ /ha/ /i/ /la/ /ma/ /na/ /nga/ /o/ /pa/ /ra/ /sa/ /ta/ /u/ /wa/ /ya/',
    },
  ];
  const [idx, setIdx] = useState(3);

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <p className="text-xs font-medium text-[#14293D]">Interaktibong Dayagram 3.1 · Midterm</p>
          <h4 className="font-display text-base font-semibold text-slate-900">
            Ebolusyon ng Alpabetong Filipino
          </h4>
        </div>
        <span className="text-xs text-slate-500">Pindutin ang bawat yugto</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {eras.map((era, i) => (
          <button
            key={era.name}
            type="button"
            onClick={() => setIdx(i)}
            className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors cursor-pointer ${
              idx === i
                ? 'border-[#14293D] bg-[#14293D] text-white'
                : 'border-slate-200 bg-[#EDF2F7] text-slate-800 hover:bg-slate-200'
            }`}
          >
            {era.name}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-slate-200 bg-[#F2F6FA] p-4">
        <p className="text-sm font-semibold text-[#14293D]">{eras[idx].title}</p>
        <p className="mt-1 text-sm text-slate-700">{eras[idx].desc}</p>
        <p className="mt-2 font-mono text-xs font-medium text-slate-900">{eras[idx].letters}</p>
      </div>
    </div>
  );
}

function PantigPaguulitDiagram() {
  const rules = [
    {
      label: 'A. Unang Tunog ay Patinig',
      rule: 'Kung ang unang tunog ng salitang-ugat ay patinig, ang patinig lamang ang inuulit (kahit may unlapi).',
      items: [
        'alis -> a-a-lis · mag-a-a-lis',
        'iwan -> i-i-wan · ma-i-i-wan',
        'ambon -> a-am-bon · u-ma-am-bon',
        'ekstra -> e-eks-tra · u-me-eks-tra',
      ],
    },
    {
      label: 'B. Nagsisimula sa KP',
      rule: 'Kung ang unang pantig ay nagsisimula sa KP (Katinig-Patinig), ang katinig at kasunod na patinig lamang ang inuulit.',
      items: [
        'ba-sa -> ba-ba-sa · mag-ba-ba-sa',
        'la-kad -> la-la-kad · ni-la-la-kad',
        'tak-bo -> ta-tak-bo · nag-ta-tak-bo',
        'lun-dag -> lu-lun-dag · nag-lu-lun-dag',
      ],
    },
    {
      label: 'C. Nagsisimula sa KK (Klaster)',
      rule: 'Dalawang paraan: (a) unang katinig at patinig lamang, o (b) ang buong klaster kasama ang patinig.',
      items: [
        'plan-tsa -> pa-plan-tsa-hin / pla-plan-tsa-hin',
        'pri-to -> pi-pri-tu-hin / pri-pri-tu-hin',
        'kwen-to -> ku-kwen-tu-han / kwe-kwen-tu-han',
      ],
    },
  ];
  const [tab, setTab] = useState(0);

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <p className="text-xs font-medium text-[#14293D]">Interaktibong Dayagram 4.1 · Midterm</p>
          <h4 className="font-display text-base font-semibold text-slate-900">
            Tatlong Tuntunin sa Pag-uulit ng Pantig
          </h4>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {rules.map((r, i) => (
          <button
            key={r.label}
            type="button"
            onClick={() => setTab(i)}
            className={`rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors cursor-pointer ${
              tab === i
                ? 'border-[#14293D] bg-[#14293D] text-white'
                : 'border-slate-200 bg-[#EDF2F7] text-slate-800 hover:bg-slate-200'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-slate-200 bg-[#F2F6FA] p-4">
        <p className="text-sm text-slate-800">{rules[tab].rule}</p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {rules[tab].items.map((item) => (
            <li
              key={item}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-xs text-[#14293D]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SugnayInteractiveDiagram() {
  const sentences = [
    {
      sm: 'Nakasulat si Zanjoe ng isang mainam na sulatin.',
      sdm: 'Nang kami ay lumuwas ng Maynila,',
      connector: 'Nang',
      gamit: 'Punong Sugnay vs. Di-makapag-iisa',
      smFirst: false,
    },
    {
      sm: 'ay di ka magtatagumpay.',
      sdm: 'Kung wala kang tiyaga',
      connector: 'Kung',
      gamit: 'Sugnay na Pangngalan (Paksa)',
      smFirst: false,
    },
    {
      sm: 'Ang dahon ay tinangay ng hangin',
      sdm: 'na nalaglag sa puno',
      connector: 'na',
      gamit: 'Sugnay na Pang-uri',
      smFirst: true,
    },
    {
      sm: 'Ang bata ay malungkot',
      sdm: 'kapag wala ang kanyang ina.',
      connector: 'kapag',
      gamit: 'Sugnay na Pang-abay',
      smFirst: true,
    },
  ];

  const [sampleIdx, setSampleIdx] = useState(0);
  const [inspectMode, setInspectMode] = useState<'pareho' | 'sm' | 'sdm'>('pareho');
  const current = sentences[sampleIdx];

  return (
    <div className="rounded-xl border border-amber-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 pb-3">
        <div>
          <p className="text-xs font-medium text-[#5C491F]">Interaktibong Pagsusuri 5.1 · Semi-Finals</p>
          <h4 className="font-display text-base font-semibold text-slate-900">
            Tagahimay ng Sugnay (Makapag-iisa vs. Di-makapag-iisa)
          </h4>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {sentences.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSampleIdx(i)}
              className={`rounded-md border px-2.5 py-1 text-xs font-medium cursor-pointer tabular-nums ${
                sampleIdx === i
                  ? 'border-[#5C491F] bg-[#5C491F] text-white'
                  : 'border-amber-200 bg-[#FAF6EC] text-slate-800 hover:bg-amber-100'
              }`}
            >
              Halimbawa {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-500">Ipakita:</span>
        <button
          type="button"
          onClick={() => setInspectMode('pareho')}
          className={`rounded-md border px-3 py-1 text-xs font-semibold cursor-pointer ${
            inspectMode === 'pareho'
              ? 'border-slate-900 bg-slate-900 text-white'
              : 'border-slate-200 bg-[#FAF6EC] text-slate-700'
          }`}
        >
          Buong Pangungusap
        </button>
        <button
          type="button"
          onClick={() => setInspectMode('sm')}
          className={`rounded-md border px-3 py-1 text-xs font-semibold cursor-pointer ${
            inspectMode === 'sm'
              ? 'border-[#5C491F] bg-[#5C491F] text-white'
              : 'border-amber-200 bg-[#FAF6EC] text-[#5C491F]'
          }`}
        >
          Sugnay na Makapag-iisa
        </button>
        <button
          type="button"
          onClick={() => setInspectMode('sdm')}
          className={`rounded-md border px-3 py-1 text-xs font-semibold cursor-pointer ${
            inspectMode === 'sdm'
              ? 'border-amber-700 bg-amber-700 text-white'
              : 'border-amber-200 bg-[#FAF6EC] text-amber-800'
          }`}
        >
          Sugnay na Di-makapag-iisa
        </button>
      </div>

      <div className="mt-4 rounded-lg border border-amber-200 bg-[#FAF6EC] p-4">
        <p className="text-xs font-medium text-[#5C491F]">{current.gamit}</p>
        <p className="mt-1 text-base leading-relaxed font-medium text-slate-900">
          {current.smFirst ? (
            <>
              <span
                className={
                  inspectMode === 'sdm'
                    ? 'opacity-30 transition-opacity'
                    : 'rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-950 transition-opacity'
                }
              >
                {current.sm}
              </span>{' '}
              <span
                className={
                  inspectMode === 'sm'
                    ? 'opacity-30 transition-opacity'
                    : 'rounded bg-amber-200/80 px-1.5 py-0.5 text-amber-950 transition-opacity'
                }
              >
                {current.sdm}
              </span>
            </>
          ) : (
            <>
              <span
                className={
                  inspectMode === 'sm'
                    ? 'opacity-30 transition-opacity'
                    : 'rounded bg-amber-200/80 px-1.5 py-0.5 text-amber-950 transition-opacity'
                }
              >
                {current.sdm}
              </span>{' '}
              <span
                className={
                  inspectMode === 'sdm'
                    ? 'opacity-30 transition-opacity'
                    : 'rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-950 transition-opacity'
                }
              >
                {current.sm}
              </span>
            </>
          )}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 border-t border-amber-200/70 pt-3 text-xs sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-700 shrink-0" />
            <div>
              <span className="font-semibold text-slate-900">Sugnay na Makapag-iisa:</span>{' '}
              <span className="text-slate-700">"{current.sm}"</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Info className="mt-0.5 h-4 w-4 text-amber-800 shrink-0" />
            <div>
              <span className="font-semibold text-amber-950">Sugnay na Di-makapag-iisa:</span>{' '}
              <span className="text-slate-700">
                "{current.sdm}" (pananda: "{current.connector}")
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KayarianDiagram() {
  const structures = [
    {
      name: 'Payak',
      formula: 'PS-PP / PS-TP / TS-PP / TS-TP',
      text: 'Sina pangulong Arroyo at Estrada ay mga haligi ng bansa at mga magulang ng bayan.',
    },
    {
      name: 'Tambalan',
      formula: '2 Kaisipan + Pangatnig',
      text: 'Si Luis ay mahilig mang-asar samantalang si Loreng ay mapagmahal.',
    },
    {
      name: 'Hugnayan',
      formula: '1 SM + 1 SDM',
      text: 'Di malayong umunlad ang Pilipinas kung ang mga mamamayan ay magtutulung-tulong.',
    },
    {
      name: 'Langkapan',
      formula: '2+ SM + 1+ SDM',
      text: 'Makapapasa talaga siya at makatatamo ng diploma kung magsisipag sa pag-aaral at magtitiis ng hirap.',
    },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <div className="rounded-xl border border-amber-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
        <div>
          <p className="text-xs font-medium text-[#5C491F]">Interaktibong Dayagram 6.1 · Semi-Finals</p>
          <h4 className="font-display text-base font-semibold text-slate-900">
            Apat na Kayarian ng Pangungusap
          </h4>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {structures.map((s, idx) => (
          <button
            key={s.name}
            type="button"
            onClick={() => setSelected(idx)}
            className={`rounded-lg border p-3 text-left transition-colors cursor-pointer ${
              selected === idx
                ? 'border-[#5C491F] bg-[#5C491F] text-white'
                : 'border-amber-200 bg-[#FAF6EC] text-slate-800 hover:bg-amber-100'
            }`}
          >
            <p className="text-xs font-semibold">{s.name}</p>
            <p
              className={`mt-1 font-mono text-[11px] ${
                selected === idx ? 'text-amber-100' : 'text-slate-600'
              }`}
            >
              {s.formula}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-amber-200 bg-[#FAF6EC] p-4">
        <p className="text-xs font-medium text-[#5C491F]">
          Halimbawang Pangungusap ({structures[selected].name})
        </p>
        <p className="mt-1 text-base font-medium text-slate-900">{structures[selected].text}</p>
      </div>
    </div>
  );
}

function DiskursoDiagram() {
  const types = [
    { name: 'Paglalahad', goal: 'Magpaliwanag ng konsepto o proseso', sample: 'Ang wika ay sistematikong estruktura ng tunog.' },
    { name: 'Pagsasalaysay', goal: 'Magkuwento ng sunod-sunod na pangyayari', sample: 'Noong Hulyo, sinimulan namin ang linggwistika ng wika.' },
    { name: 'Paglalarawan', goal: 'Magpakita ng katangian gamit ang pandama', sample: 'Maliwanag at tahimik ang silid-aklatan tuwing umaga.' },
    { name: 'Pangangatwiran', goal: 'Manghikayat gamit ang lohika at patunay', sample: 'Dapat panatilihin ang Filipino upang mapalakas ang kritikal na pag-iisip.' },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-xl border border-emerald-200 bg-white p-5">
      <div className="border-b border-emerald-100 pb-3">
        <p className="text-xs font-medium text-[#16423C]">Interaktibong Dayagram 7.1 · Finals</p>
        <h4 className="font-display text-base font-semibold text-slate-900">
          Pagpili ng Angkop na Uri ng Diskurso
        </h4>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {types.map((t, idx) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setActive(idx)}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold cursor-pointer ${
              active === idx
                ? 'border-[#16423C] bg-[#16423C] text-white'
                : 'border-emerald-200 bg-[#EAF3F0] text-slate-800 hover:bg-emerald-100'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-emerald-200 bg-[#F1F7F5] p-4 text-sm">
        <p className="font-semibold text-slate-900">Layunin: {types[active].goal}</p>
        <p className="mt-1.5 text-slate-700">Halimbawa: "{types[active].sample}"</p>
      </div>
    </div>
  );
}

function PananaliksikDiagram() {
  const steps = [
    { label: '1. Basahin', detail: 'Unawaing mabuti ang buong sanggunian at tukuyin ang pangunahing ideya.' },
    { label: '2. Suriin', detail: 'Tiyakin kung totoo, napapanahon, at mapagkakatiwalaan ang pinagkunan.' },
    { label: '3. Ihawig', detail: 'Isulat muli ang konsepto sa sariling pananalita upang maiwasan ang pangongopya.' },
    { label: '4. Sipiin', detail: 'Idagdag ang may-akda at pamagat ng aklat o modyul sa listahan ng Sanggunian.' },
  ];
  const [step, setStep] = useState(0);

  return (
    <div className="rounded-xl border border-emerald-200 bg-white p-5">
      <div className="border-b border-emerald-100 pb-3">
        <p className="text-xs font-medium text-[#16423C]">Interaktibong Dayagram 8.1 · Finals</p>
        <h4 className="font-display text-base font-semibold text-slate-900">
          Apat na Hakbang sa Matapat na Pananaliksik
        </h4>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {steps.map((s, idx) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setStep(idx)}
            className={`rounded-lg border px-3 py-2 text-xs font-semibold cursor-pointer ${
              step === idx
                ? 'border-[#16423C] bg-[#16423C] text-white'
                : 'border-emerald-200 bg-[#EAF3F0] text-slate-800 hover:bg-emerald-100'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-emerald-200 bg-[#F1F7F5] p-4 text-sm text-slate-700">
        {steps[step].detail}
      </div>
    </div>
  );
}
