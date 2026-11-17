export function IntroSection() {
  return (
    <section
      id="panimula"
      className="border-b border-slate-200 bg-[#F8FAFC] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Label Column */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium text-slate-500">
              Ikalawang Bahagi · Panimula
            </p>
            <h2 className="font-display text-balance mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Layunin at Kahalagahan ng mga Aralin sa Filipino 1
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Isang pagsasama ng kasanayan sa wika at makabagong teknolohiya para sa mga mag-aaral ng BSIT 1C.
            </p>
          </div>

          {/* Right Prose Column */}
          <div className="space-y-5 text-[15.5px] leading-[1.7] text-slate-700 lg:col-span-8">
            <p>
              <strong className="font-semibold text-slate-900">Layunin ng Website:</strong>{' '}
              Binuo ang website na ito bilang pangwakas na pagsusulit sa asignaturang Filipino 1 upang
              maitipon sa iisang maayos, interaktibo, at madaling maunawaang plataporma ang lahat ng
              mahahalagang araling tinalakay mula <span className="font-medium text-slate-900">Prelim hanggang Finals</span>.
              Sa bawat aralin ay makikita ang malinaw na talakayan sa sariling pananalita, hindi bababa sa apat na
              kongkretong halimbawa, mga biswal na dayagram at talahanayan, at mga maikling pagsasanay.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">Kahalagahan ng mga Aralin:</strong>{' '}
              Mula sa pag-unawa sa katangian at antas ng wika sa Prelim, pagsusuri ng tunog at salita sa Midterm,
              pagbubuo ng mga sugnay at pangungusap sa Semi-Finals, hanggang sa mabisang diskurso at etikal na
              pananaliksik sa Finals—bawat paksa ay nagbubuo ng matibay na pundasyon sa mapanuring pag-iisip at
              epektibong pagpapahayag.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">Tulong sa Paglinang ng Kaalaman sa Wikang Filipino:</strong>{' '}
              Para sa mga mag-aaral ng Information Technology, ang kasanayan sa wikang Filipino ay hindi hiwalay sa
              teknolohiya. Nakatutulong ito sa pagbuo ng malinaw na dokumentasyon, makataong disenyo ng mga sistemang
              nakauunawa sa lokal na gumagamit, at matapat na komunikasyon sa akademya at sa magiging propesyon sa hinaharap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
