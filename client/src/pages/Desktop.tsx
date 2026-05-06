export const Desktop = (): JSX.Element => {
  const wallets = [
    { name: "CASH APP", logo: "/figmaAssets/cashapp-2.png" },
    { name: "SQUARE", logo: "/figmaAssets/image-11.png" },
    { name: "BITKIT", logo: "/figmaAssets/image-9.png" },
    { name: "ALBY", logo: "/figmaAssets/image-14.png" },
    { name: "WALLET OF SATOSHI", logo: "/figmaAssets/image-15.png" },
    { name: "LEXE WALLET", logo: "/figmaAssets/image-12.png" },
    { name: "BLITZ", logo: "/figmaAssets/image-10-1.png" },
    { name: "CASHU", logo: "/figmaAssets/image-13.png" },
    { name: "AGICASH", logo: "/figmaAssets/oabxam9h-400x400-2.png" },
    { name: "STASH PAY", logo: "/figmaAssets/image-16.png" },
  ];

  return (
    <div className="bg-white w-full overflow-x-hidden font-['Inter',Helvetica] text-black">

      {/* ===== HERO: scattered USE / THE / SYMBOL with big ₿ ===== */}
      <section className="max-w-2xl mx-auto px-6 pt-12 md:pt-16">
        {/* Desktop scattered layout */}
        <div className="hidden md:grid grid-cols-12 gap-x-2 items-start">
          {/* USE — top-left */}
          <h1 className="col-span-6 font-bold leading-none tracking-tight text-[clamp(48px,7vw,80px)]">
            USE
          </h1>
          {/* Big colorful ₿ — right side, taller */}
          <div className="col-span-6 row-span-3 flex justify-end items-start -mt-6">
            <img
              src="/figmaAssets/image-10.png"
              alt="₿ symbol"
              className="w-auto h-[340px] lg:h-[400px] object-contain"
            />
          </div>
          {/* THE — pushed far right under USE row */}
          <h1 className="col-span-6 col-start-1 font-bold leading-none tracking-tight text-[clamp(48px,7vw,80px)] text-right pr-2 mt-6">
            THE
          </h1>
          {/* SYMBOL — left-indented */}
          <h1 className="col-span-7 col-start-1 font-bold leading-none tracking-tight text-[clamp(48px,7vw,80px)] pl-8 mt-6">
            SYMBOL
          </h1>
        </div>

        {/* Mobile stacked layout */}
        <div className="md:hidden">
          <h1 className="font-bold leading-none tracking-tight text-[18vw]">
            USE
          </h1>
          <h1 className="font-bold leading-none tracking-tight text-[18vw] mt-12 text-center">
            THE
          </h1>
          <div className="flex justify-center my-8">
            <img
              src="/figmaAssets/image-10.png"
              alt="₿ symbol"
              className="w-[60%] h-auto object-contain"
            />
          </div>
          <h1 className="font-bold leading-none tracking-tight text-[18vw] mt-4">
            SYMBOL
          </h1>
        </div>
      </section>

      {/* ===== Phone + intro text ===== */}
      <section className="max-w-2xl mx-auto px-6 pt-10 md:pt-16 pb-10">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
          {/* Phone */}
          <div className="w-full md:w-[48%] flex-shrink-0 flex flex-col items-center">
            <div className="w-full max-w-[320px]">
              <img
                src="/figmaAssets/iphone--5--1.png"
                alt="iPhone showing ₿ symbol"
                className="block w-full h-auto object-contain"
              />
              {/* Short light-gray divider exactly under the iPhone width */}
              <hr className="border-t border-[#d8d8d8] w-full m-0" />
            </div>
          </div>

          {/* Intro text – both bold lines highlighted yellow */}
          <div className="flex-1 text-base md:text-[15px] leading-7">
            <p className="font-bold">
              <span className="bg-[#f6ff00] box-decoration-clone px-1">
                Showing bitcoin quantities using the standard ₿ symbol is becoming the new normal.
              </span>
            </p>
            <p className="mt-5">
              It's a clean, on-brand and future-proof way of representing any amount of bitcoin.
            </p>
            <p className="mt-5">
              <strong>Try it</strong> out with <span className="underline cursor-pointer">a screenshot</span>.<br />
              <strong>Teach</strong> your agent to use <span className="underline cursor-pointer">the skill here</span>.<br />
              <strong>Nudge</strong> your favorite wallet to <span className="underline cursor-pointer">join the list of adopters</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ₿ IS BETTER ===== */}
      <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(28px,4.5vw,44px)] leading-none mb-6">₿ IS BETTER</h2>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <p className="text-base md:text-[15px] leading-7">
            Historically, bitcoin wallets have shown bitcoin quantities as long decimal quantities, which are effectively illegible to the human eye.
            <br /><br />
            In recent years, the bitcoin industry has adopted "sats" to denote base units of bitcoin. But new users shouldn't need to learn a new concept to use bitcoin.
            <br /><br />
            Labeling quantities with ₿ is clean, simple and requires no new learning.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--12-44-13-pm-1.png"
            alt="₿ is better illustration"
            className="w-full md:w-[220px] h-auto object-contain justify-self-end"
          />
        </div>
      </section>

      {/* ===== ₿ IS ON-BRAND ===== */}
      <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(28px,4.5vw,44px)] leading-none mb-6">₿ IS ON-BRAND</h2>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <p className="text-base md:text-[15px] leading-7">
            Thinking ahead, one day most of the world's prices will be denominated in quantities of bitcoin, as it becomes every day money.
            <br /><br />
            Continuing on a path of using "sats" to denote amounts of bitcoin would mean losing the bitcoin brand from this pricing surface area altogether.
            <br /><br />
            Adopting the ₿ symbol = automatically inheriting the bitcoin brand for prices, forevermore.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--01-22-33-pm-1.png"
            alt="₿ is on-brand illustration"
            className="w-full md:w-[220px] h-auto object-contain justify-self-end"
          />
        </div>
      </section>

      {/* ===== TEACH YOUR AGENT ===== */}
      <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(28px,4.5vw,44px)] leading-none mb-6">TEACH YOUR AGENT</h2>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <p className="text-base md:text-[15px] leading-7">
            With this convention being relatively new, AI agents may not yet be up to speed, given their training on legacy data.
            <br /><br />
            Get your agent caught-up and using the ₿ symbol instead of sats for good, by having them learn this{" "}
            <span className="underline cursor-pointer">bitcoin-units skill</span>.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--02-58-58-pm-1.png"
            alt="Teach your agent illustration"
            className="w-full md:w-[180px] h-auto object-contain justify-self-end"
          />
        </div>
      </section>

      {/* ===== TRY IT OUT ===== */}
      <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(28px,4.5vw,44px)] leading-none mb-6">TRY IT OUT</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-base md:text-[15px] leading-7">
            Wonder what it might look like to have your favorite wallet or app that hasn't yet upgraded to this new convention, adopt it?
            <br /><br />
            Upload a screenshot and see if AI can auto-magically bring the ₿ to life for you.
            <br /><br />
            Warning: experimental, YMMV!
          </p>
          <div className="flex items-center justify-center border-[3px] border-dashed border-[#c6c4c4] rounded-2xl p-8 min-h-[160px]">
            <span className="text-sm md:text-base underline cursor-pointer text-center">Upload screenshot</span>
          </div>
        </div>
      </section>

      {/* ===== JOIN THE ₿-LIST ===== */}
      <section className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(28px,4.5vw,44px)] leading-none mb-4">JOIN THE ₿-LIST</h2>
        <p className="text-base md:text-[15px] leading-7 mb-8">
          These forward-thinking wallets and bitcoin products have already adopted this convention:
        </p>
        <div className="flex flex-col">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="flex items-stretch border border-[#d8d8d8] -mt-px bg-white"
            >
              <div className="w-32 md:w-36 flex-shrink-0 flex items-center justify-center border-r border-[#d8d8d8] p-5">
                <img
                  src={wallet.logo}
                  alt={wallet.name}
                  className="max-w-full max-h-16 object-contain"
                />
              </div>
              <div className="flex-1 flex items-center pl-10 pr-6 py-4">
                <span className="font-bold text-black text-lg md:text-2xl tracking-tight leading-none">
                  {wallet.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Drop us a line ===== */}
      <section className="max-w-2xl mx-auto px-6 pb-12 md:pb-16">
        <p className="text-base md:text-[15px] leading-7 max-w-md">
          Have you spotted a bitcoin wallet or product that uses the ₿ symbol convention?{" "}
          <span className="underline cursor-pointer">Drop us a line</span> and we'll add them here.
        </p>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#939393] w-full py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-white text-sm md:text-[15px] leading-7 max-w-md">
            This ₿ symbol convention originated with <span className="underline cursor-pointer">BIP-177</span> by John Carvhallo in late 2024.
            <br /><br />
            It is documented in the <span className="underline cursor-pointer">Bitcoin Design Guide</span>.
            <br /><br />
            A fuller write-up is available in <span className="underline cursor-pointer">this post from Spiral</span>.
            <br /><br />
            A one-page PDF is available <span className="underline cursor-pointer">here</span>.
            <br /><br />
            This site created &amp; maintained by <span className="underline cursor-pointer">Mat Balez</span>.
          </p>
        </div>
      </footer>

    </div>
  );
};
