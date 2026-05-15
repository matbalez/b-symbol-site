import { useEffect, useRef, useState } from "react";
import keyboardKeyImg from "@assets/ChatGPT_Image_May_13,_2026,_05_05_46_PM_1778717313073.png";

export const Desktop = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    if (!modalOpen || !carouselRef.current) return;
    const el = carouselRef.current;
    el.scrollTo({ left: el.clientWidth, behavior: "auto" });
    setActiveSlide(1);
  }, [modalOpen]);

  const onCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== activeSlide) setActiveSlide(idx);
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const localUrl = URL.createObjectURL(file);
    setOriginalUrl(localUrl);
    setResultUrl(null);
    setErrorMsg(null);
    setModalOpen(true);
    setIsLoading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);
      const res = await fetch("/api/edit-image", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Upload failed");
      setResultUrl(data.image);
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    setOriginalUrl(null);
    setResultUrl(null);
    setErrorMsg(null);
  };

  const downloadResult = () => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = "bitcoin-units-edited.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const wallets = [
    { name: "CASH APP", logo: "/figmaAssets/cashapp-2.png", url: "https://cash.app/" },
    { name: "SQUARE", logo: "/figmaAssets/image-11.png", url: "https://squareup.com/ca/en/point-of-sale" },
    { name: "BITKIT", logo: "/figmaAssets/image-9.png", url: "https://bitkit.to/" },
    { name: "ALBY", logo: "/figmaAssets/image-14.png", url: "https://getalby.com/" },
    { name: "WALLET OF SATOSHI", logo: "/figmaAssets/image-15.png", url: "https://www.walletofsatoshi.com/" },
    { name: "LEXE WALLET", logo: "/figmaAssets/image-12.png", url: "https://www.lexe.app/" },
    { name: "BLITZ", logo: "/figmaAssets/image-10-1.png", url: "https://blitzwalletapp.com/" },
    { name: "CASHU", logo: "/figmaAssets/image-13.png", url: "https://wallet.cashu.me/welcome" },
    { name: "AGICASH", logo: "/figmaAssets/oabxam9h-400x400-2.png", url: "https://agi.cash/" },
    { name: "STASH PAY", logo: "/figmaAssets/image-16.png", url: "https://stashpay.me/" },
    { name: "MANNA WALLET", logo: "/figmaAssets/manna-wallet.png", url: "https://mannabitcoin.com/" },
  ];

  return (
    <div className="bg-white w-full overflow-x-hidden font-['Inter',Helvetica] text-black pt-14 md:pt-16">

      {/* ===== Fixed header ===== */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-b border-[#ececec] h-14 md:h-16">
        <div className="max-w-3xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#top" className="flex items-center" data-testid="link-header-logo">
            <img
              src="/apple-touch-icon.png"
              alt="₿ logo"
              className="h-8 w-8 md:h-9 md:w-9 object-contain"
            />
          </a>
          <nav className="flex items-center gap-6">
            <a
              href="#join-the-list"
              className="text-sm underline hover:text-gray-600"
              data-testid="link-header-see-list"
            >
              see the ₿-list
            </a>
            <a
              href="#typing-the-b"
              className="text-sm underline hover:text-gray-600"
              data-testid="link-header-typing"
            >
              typing the ₿
            </a>
            <a
              href="/skill.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block text-sm underline hover:text-gray-600"
              data-testid="link-header-get-skill"
            >
              get the agent skill
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO: scattered USE / THE / SYMBOL with big ₿ ===== */}
      <section className="max-w-3xl mx-auto px-6 pt-12 md:pt-16">
        {/* Desktop scattered layout */}
        <div className="hidden md:block relative">
          {/* Big colorful ₿ — moved further left, spans full 3-row height */}
          <img
            src="/figmaAssets/image-10.png"
            alt="₿ symbol"
            className="absolute right-[12%] top-0 h-[280px] lg:h-[320px] w-auto object-contain z-0"
          />
          <div className="relative z-10">
            <h1 className="font-bold leading-[1.05] tracking-tight text-[80px] lg:text-[92px]">
              USE
            </h1>
            <h1 className="font-bold leading-[1.05] tracking-tight text-[80px] lg:text-[92px] pl-[22%]">
              THE
            </h1>
            <h1 className="font-bold leading-[1.05] tracking-tight text-[80px] lg:text-[92px] mt-12 lg:mt-16">
              SYMBOL
            </h1>
          </div>
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
      <section className="max-w-3xl mx-auto px-6 pt-10 md:pt-16 pb-10">
        <div className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-10">
          {/* Phone */}
          <div className="w-full md:w-[45%] flex-shrink-0 flex flex-col items-center md:items-start md:mt-8 md:-ml-16">
            <div className="w-full max-w-[360px]">
              <img
                src="/figmaAssets/iphone--5--1.png"
                alt="iPhone showing ₿ symbol"
                className="block w-full h-auto object-contain"
              />
              {/* Short light-gray divider exactly under the iPhone width */}
              <hr className="border-t border-[#ececec] w-5/6 mx-auto m-0" />
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
              <strong>Try it</strong> out with <a href="#try-it-out" className="underline cursor-pointer hover:text-gray-600" data-testid="link-try-screenshot">a screenshot</a>.<br />
              <strong>Teach</strong> your agent to use <a href="/skill.md" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-gray-600" data-testid="link-skill-here">the skill here</a>.<br />
              <strong>Nudge</strong> your favorite wallet to <a href="#join-the-list" className="underline cursor-pointer hover:text-gray-600" data-testid="link-join-adopters">join the list of adopters</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ₿ IS BETTER ===== */}
      <section className="max-w-3xl mx-auto px-6 pt-2 md:pt-4 pb-12 md:pb-16">
        <h2 className="font-bold text-[clamp(24px,3.8vw,37px)] leading-none mb-6">₿ IS BETTER</h2>
        <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-10 items-start">
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
            className="w-3/4 md:w-[200px] h-auto object-contain justify-self-center md:justify-self-start"
          />
        </div>
      </section>

      {/* ===== ₿ IS ON-BRAND ===== */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(24px,3.8vw,37px)] leading-none mb-6">₿ IS ON-BRAND</h2>
        <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-10 items-start">
          <p className="text-base md:text-[15px] leading-7">
            Thinking ahead, one day most of the world's prices will be denominated in quantities of bitcoin, as it becomes everyday money.
            <br /><br />
            Continuing on a path of using "sats" to denote amounts of bitcoin would mean losing the bitcoin brand from this pricing surface area altogether.
            <br /><br />
            Adopting the ₿ symbol = automatically inheriting the bitcoin brand for prices, forevermore.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--01-22-33-pm-1.png"
            alt="₿ is on-brand illustration"
            className="w-3/4 md:w-[200px] h-auto object-contain justify-self-center md:justify-self-start"
          />
        </div>
      </section>

      {/* ===== TEACH YOUR AGENT ===== */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(24px,3.8vw,37px)] leading-none mb-6">TEACH YOUR AGENT</h2>
        <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-10 items-start">
          <p className="text-base md:text-[15px] leading-7">
            With this convention being relatively new, AI agents may not yet be up to speed, given their training on legacy data.
            <br /><br />
            Get your agent caught-up and using the ₿ symbol instead of sats for good, by having them learn this{" "}
            <a href="/skill.md" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-gray-600" data-testid="link-bitcoin-units-skill">bitcoin-units skill</a>.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--02-58-58-pm-1.png"
            alt="Teach your agent illustration"
            className="w-1/2 md:w-[150px] h-auto object-contain justify-self-center md:justify-self-start md:ml-10"
          />
        </div>
      </section>

      {/* ===== TRY IT OUT ===== */}
      <section id="try-it-out" className="max-w-3xl mx-auto px-6 py-12 md:py-16 scroll-mt-8">
        <h2 className="font-bold text-[clamp(24px,3.8vw,37px)] leading-none mb-6">TRY IT OUT</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-base md:text-[15px] leading-7">
            Wonder what it might look like to have your favorite wallet or app that hasn't yet upgraded to this new convention, adopt it?
            <br /><br />
            Upload a screenshot and see if AI can auto-magically bring the ₿ to life for you.
            <br /><br />
            Warning: experimental, YMMV!
          </p>
          <div
            className="flex items-center justify-center border-[3px] border-dashed border-[#c6c4c4] rounded-2xl p-8 min-h-[160px] cursor-pointer hover:bg-gray-50"
            onClick={() => fileInputRef.current?.click()}
            data-testid="dropzone-upload"
          >
            <span className="text-sm md:text-base underline text-center">Upload screenshot</span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
              data-testid="input-screenshot"
            />
          </div>
        </div>
      </section>

      {/* ===== JOIN THE ₿-LIST ===== */}
      <section id="join-the-list" className="max-w-3xl mx-auto px-6 py-12 md:py-16 scroll-mt-8">
        <h2 className="font-bold text-[clamp(24px,3.8vw,37px)] leading-none mb-4">JOIN THE ₿-LIST</h2>
        <p className="text-base md:text-[15px] leading-7 mb-8">
          These forward-thinking wallets and bitcoin products have already adopted this convention:
        </p>
        <div className="flex flex-col max-w-lg mx-auto">
          {wallets.map((wallet) => (
            <a
              key={wallet.name}
              href={wallet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-stretch border border-[#ececec] -mt-px bg-white h-[96px] transition-colors hover:bg-gray-50 hover:border-gray-300"
              data-testid={`link-wallet-${wallet.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-32 md:w-36 flex-shrink-0 flex items-center justify-center border-r border-[#ececec] p-5 group-hover:border-gray-300">
                <img
                  src={wallet.logo}
                  alt={wallet.name}
                  className="max-w-full max-h-12 object-contain"
                />
              </div>
              <div className="flex-1 flex items-center pl-10 pr-6 py-4">
                <span className="font-bold text-black text-lg md:text-2xl tracking-tight leading-none group-hover:underline">
                  {wallet.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== Drop us a line (placed between wallet list and typing section) ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-4 md:pb-8">
        <p className="text-base md:text-[15px] leading-7 max-w-md">
          Have you spotted a bitcoin wallet or product that uses the ₿ symbol convention?{" "}
          <a href="mailto:bsymbol@spiral.xyz" className="underline cursor-pointer hover:text-gray-600" data-testid="link-drop-us-a-line">Drop us a line</a> and we'll add them here.
        </p>
      </section>

      {/* ===== TYPING THE ₿ ===== */}
      <section id="typing-the-b" className="max-w-3xl mx-auto px-6 py-12 md:py-16 scroll-mt-8">
        {/* Mobile-only: keyboard image above heading */}
        <div className="md:hidden flex justify-center mb-8">
          <img
            src={keyboardKeyImg}
            alt="Bitcoin symbol on a keyboard key"
            className="w-3/4 h-auto object-contain"
            data-testid="img-keyboard-key-mobile"
          />
        </div>
        <h2 className="font-bold text-[clamp(24px,3.8vw,37px)] leading-none mb-6">TYPING THE ₿</h2>
        <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-10 items-start">
          <div className="text-base md:text-[15px] leading-7 space-y-5">
            <p>
              Once you're using ₿ for bitcoin amounts, you'll naturally be typing it a lot more. Unfortunately, ₿ is not (yet) on physical keyboards so it's hard to type.
            </p>
            <p>
              So we need some workarounds. The obvious-yet-annoying thing to do is to Google search for "bitcoin symbol" and copy &amp; paste it. Better is to adopt the following shortcuts:
            </p>
            <div>
              <p className="font-bold">On MacOS</p>
              <p>Go to System Settings &gt; Keyboard &gt; Text Replacements</p>
              <p>Click the + button</p>
              <p>Under "Replace", enter a short trigger phrase, such as "bb"</p>
              <p>Under "With" paste the bitcoin symbol: ₿</p>
            </div>
            <div>
              <p className="font-bold">On iOS</p>
              <p>Go to Settings &gt; General &gt; Keyboard &gt; Text Replacement</p>
              <p>Tap the +</p>
              <p>Paste ₿ into the Phrase field.</p>
              <p>Enter a shortcut like "bb" in the Shortcut field</p>
            </div>
            <div>
              <p className="font-bold">On Android</p>
              <p>Go to Settings &gt; System &gt; Languages &amp; input &gt; Personal dictionary</p>
              <p>Choose your language</p>
              <p>Tap the + button</p>
              <p>Paste ₿ into the main text field</p>
              <p>Add a shortcut like "bb"</p>
              <p>Save</p>
            </div>
            <p>Now typing "bb" will now automatically suggest ₿.</p>
            <div>
              <p className="font-bold">On Windows</p>
              <p>Click where you want the symbol to appear.</p>
              <p>Turn Num Lock on.</p>
              <p>Hold down the Alt key.</p>
              <p>While holding Alt, type 8383 on the numeric keypad.</p>
            </div>
          </div>
          <img
            src={keyboardKeyImg}
            alt="Bitcoin symbol on a keyboard key"
            className="hidden md:block md:w-[220px] h-auto object-contain md:justify-self-start md:ml-10"
            data-testid="img-keyboard-key"
          />
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#939393] w-full py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-white text-sm md:text-[15px] leading-7 max-w-md">
            This ₿ symbol convention originated with <a href="https://bips.dev/177/" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-gray-200" data-testid="link-bip-177">BIP-177</a> by John Carvhallo in late 2024.
            <br /><br />
            It is documented in the <a href="https://bitcoin.design/guide/designing-products/units-and-symbols/#-only-format" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-gray-200" data-testid="link-bitcoin-design-guide">Bitcoin Design Guide</a>.
            <br /><br />
            A fuller write-up is available in <a href="https://spiralbtc.substack.com/p/bringing-to-the-world" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-gray-200" data-testid="link-spiral-post">this post from Spiral</a>.
            <br /><br />
            A one-page PDF is available <a href="/bitcoin-units.pdf" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-gray-200" data-testid="link-pdf">here</a>.
            <br /><br />
            This site created &amp; maintained by <a href="https://x.com/matbalez" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-gray-200" data-testid="link-mat-balez">Mat Balez</a>.
          </p>
        </div>
      </footer>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={closeModal}
          data-testid="modal-result"
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl leading-none text-gray-500 hover:text-black"
              aria-label="Close"
              data-testid="button-close-modal"
            >
              ×
            </button>
            <h3 className="font-bold text-xl mb-4">Using the ₿ Convention</h3>
            <div
              ref={carouselRef}
              onScroll={onCarouselScroll}
              className="flex md:grid md:grid-cols-2 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth -mx-6 md:mx-0 px-6 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="snap-center shrink-0 basis-full md:basis-auto md:shrink min-w-0 pr-3 md:pr-0">
                <p className="text-sm font-semibold mb-2 text-gray-600">Original</p>
                {originalUrl && (
                  <img src={originalUrl} alt="Original" className="max-h-[55vh] w-auto mx-auto md:max-h-[60vh] object-contain rounded-lg border border-[#ececec]" data-testid="img-original" />
                )}
              </div>
              <div className="snap-center shrink-0 basis-full md:basis-auto md:shrink min-w-0 pl-3 md:pl-0">
                <p className="text-sm font-semibold mb-2 text-gray-600">Using ₿:</p>
                <div className="w-full min-h-[200px] rounded-lg border border-[#ececec] flex items-center justify-center bg-gray-50">
                  {isLoading && (
                    <div className="flex flex-col items-center gap-3 py-12" data-testid="status-loading">
                      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                      <p className="text-sm text-gray-600">Editing your screenshot…</p>
                    </div>
                  )}
                  {!isLoading && resultUrl && (
                    <img src={resultUrl} alt="Edited" className="max-h-[55vh] w-auto mx-auto md:max-h-[60vh] object-contain rounded-lg" data-testid="img-result" />
                  )}
                  {!isLoading && errorMsg && (
                    <p className="text-sm text-red-600 p-4 text-center" data-testid="text-error">{errorMsg}</p>
                  )}
                </div>
              </div>
            </div>
            {/* Mobile pagination dots — sticky to bottom of modal so always visible */}
            <div className="md:hidden sticky bottom-0 -mx-6 px-6 py-3 bg-white/95 backdrop-blur flex justify-center gap-2 mt-2" data-testid="carousel-dots">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    const el = carouselRef.current;
                    if (!el) return;
                    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
                  }}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeSlide === i ? "bg-black" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  data-testid={`dot-slide-${i}`}
                />
              ))}
            </div>
            {resultUrl && !isLoading && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={downloadResult}
                  className="bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800"
                  data-testid="button-download"
                >
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
