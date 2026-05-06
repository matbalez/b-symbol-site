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
    <div className="bg-white w-full overflow-x-hidden font-['Inter',Helvetica]">

      {/* Hero row: big text left, colorful ₿ right */}
      <div className="max-w-5xl mx-auto px-6 pt-12">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-bold text-black text-[clamp(72px,13vw,160px)] leading-[0.9] tracking-tight">
            USE<br />THE<br />SYMBOL
          </h1>
          <div className="w-[38%] flex-shrink-0 flex items-start justify-end pt-2">
            <img
              src="/figmaAssets/image-10.png"
              alt="₿ symbol"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Phone left, intro text right */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Phone image – left */}
          <div className="w-full md:w-[45%] flex-shrink-0">
            <img
              src="/figmaAssets/iphone--5--1.png"
              alt="iPhone showing ₿ symbol"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Intro text – right, with yellow highlight on first bold sentence */}
          <div className="flex-1 text-black text-lg md:text-xl leading-8">
            <p>
              <span className="relative inline">
                <span className="relative z-10 font-bold">
                  Showing bitcoin quantities using the standard ₿ symbol is becoming the new normal.
                </span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 bottom-0 w-full h-[55%] bg-[#f6ff00] -z-0"
                />
              </span>
            </p>
            <p className="mt-6">
              It's a clean, on-brand and future-proof way of representing any amount of bitcoin.
            </p>
            <p className="mt-6">
              <strong>Try it</strong> out with <span className="underline cursor-pointer">a screenshot</span>.<br />
              <strong>Teach</strong> your agent to use <span className="underline cursor-pointer">the skill here</span>.<br />
              <strong>Nudge</strong> your favorite wallet to <span className="underline cursor-pointer">join the list of adopters</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-black" />
      </div>

      {/* ₿ IS BETTER */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-bold text-black text-[clamp(40px,7vw,80px)] leading-none mb-10">₿ IS BETTER</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <p className="text-black text-lg md:text-xl leading-8">
            Historically, bitcoin wallets have shown bitcoin quantities as long decimal quantities, which are effectively illegible to the human eye.
            <br /><br />
            In recent years, the bitcoin industry has adopted "sats" to denote base units of bitcoin. But new users shouldn't need to learn a new concept to use bitcoin.
            <br /><br />
            Labeling quantities with ₿ is clean, simple and requires no new learning.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--12-44-13-pm-1.png"
            alt="₿ is better illustration"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* ₿ IS ON-BRAND */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-bold text-black text-[clamp(40px,7vw,80px)] leading-none mb-10">₿ IS ON-BRAND</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <p className="text-black text-lg md:text-xl leading-8">
            Thinking ahead, one day most of the world's prices will be denominated in quantities of bitcoin, as it becomes every day money.
            <br /><br />
            Continuing on a path of using "sats" to denote amounts of bitcoin would mean losing the bitcoin brand from this pricing surface area altogether.
            <br /><br />
            Adopting the ₿ symbol = automatically inheriting the bitcoin brand for prices, forevermore.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--01-22-33-pm-1.png"
            alt="₿ is on-brand illustration"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* TEACH YOUR AGENT */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-bold text-black text-[clamp(40px,7vw,80px)] leading-none mb-10">TEACH YOUR AGENT</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <p className="text-black text-lg md:text-xl leading-8">
            With this convention being relatively new, AI agents may not yet be up to speed, given their training on legacy data.
            <br /><br />
            Get your agent caught-up and using the ₿ symbol instead of sats for good, by having them learn this{" "}
            <span className="underline cursor-pointer">bitcoin-units skill</span>.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--02-58-58-pm-1.png"
            alt="Teach your agent illustration"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* TRY IT OUT */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-bold text-black text-[clamp(40px,7vw,80px)] leading-none mb-10">TRY IT OUT</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <p className="text-black text-lg md:text-xl leading-8">
            Wonder what it might look like to have your favorite wallet or app that hasn't yet upgraded to this new convention, adopt it?
            <br /><br />
            Upload a screenshot and see if AI can auto-magically bring the ₿ to life for you.
            <br /><br />
            Warning: experimental, YMMV!
          </p>
          <div className="flex items-center justify-center border-4 border-dashed border-[#939393] rounded-3xl p-12 min-h-[220px]">
            <span className="text-black text-xl underline cursor-pointer text-center">Upload screenshot</span>
          </div>
        </div>
      </div>

      {/* JOIN THE ₿-LIST */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-bold text-black text-[clamp(40px,7vw,80px)] leading-none mb-6">JOIN THE ₿-LIST</h2>
        <p className="text-black text-lg md:text-xl leading-8 mb-12">
          These forward-thinking wallets and bitcoin products have already adopted this convention:
        </p>
        <div className="flex flex-col">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="flex items-center gap-6 border border-[#939393] px-6 py-4 -mt-px"
            >
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <img
                  src={wallet.logo}
                  alt={wallet.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-[#c6c4c4] text-2xl md:text-4xl tracking-tight leading-none">
                {wallet.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Drop us a line */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <p className="text-black text-lg md:text-xl leading-8">
          Have you spotted a bitcoin wallet or product that uses the ₿ symbol convention?{" "}
          <span className="underline cursor-pointer">Drop us a line</span> and we'll add them here.
        </p>
      </div>

      {/* Footer */}
      <div className="bg-[#939393] w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-white text-lg md:text-xl leading-8">
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
      </div>

    </div>
  );
};
