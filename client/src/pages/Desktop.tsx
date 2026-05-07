import { useRef, useState } from "react";

export const Desktop = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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
            <h1 className="font-bold leading-[1.05] tracking-tight text-[80px] lg:text-[92px] pl-[26%]">
              THE
            </h1>
            <h1 className="font-bold leading-[1.05] tracking-tight text-[80px] lg:text-[92px] pl-[6%] mt-12 lg:mt-16">
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
              <strong>Try it</strong> out with <span className="underline cursor-pointer">a screenshot</span>.<br />
              <strong>Teach</strong> your agent to use <span className="underline cursor-pointer">the skill here</span>.<br />
              <strong>Nudge</strong> your favorite wallet to <span className="underline cursor-pointer">join the list of adopters</span>.
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
            Thinking ahead, one day most of the world's prices will be denominated in quantities of bitcoin, as it becomes every day money.
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
            <span className="underline cursor-pointer">bitcoin-units skill</span>.
          </p>
          <img
            src="/figmaAssets/chatgpt-image-may-6--2026--02-58-58-pm-1.png"
            alt="Teach your agent illustration"
            className="w-1/2 md:w-[150px] h-auto object-contain justify-self-center md:justify-self-start md:ml-10"
          />
        </div>
      </section>

      {/* ===== TRY IT OUT ===== */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
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
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="font-bold text-[clamp(24px,3.8vw,37px)] leading-none mb-4">JOIN THE ₿-LIST</h2>
        <p className="text-base md:text-[15px] leading-7 mb-8">
          These forward-thinking wallets and bitcoin products have already adopted this convention:
        </p>
        <div className="flex flex-col max-w-lg mx-auto">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="flex items-stretch border border-[#ececec] -mt-px bg-white h-[96px]"
            >
              <div className="w-32 md:w-36 flex-shrink-0 flex items-center justify-center border-r border-[#ececec] p-5">
                <img
                  src={wallet.logo}
                  alt={wallet.name}
                  className="max-w-full max-h-12 object-contain"
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
      <section className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
        <p className="text-base md:text-[15px] leading-7 max-w-md">
          Have you spotted a bitcoin wallet or product that uses the ₿ symbol convention?{" "}
          <span className="underline cursor-pointer">Drop us a line</span> and we'll add them here.
        </p>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#939393] w-full py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
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
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold mb-2 text-gray-600">Original</p>
                {originalUrl && (
                  <img src={originalUrl} alt="Original" className="w-full h-auto rounded-lg border border-[#ececec]" data-testid="img-original" />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold mb-2 text-gray-600">Using ₿:</p>
                <div className="w-full min-h-[200px] rounded-lg border border-[#ececec] flex items-center justify-center bg-gray-50">
                  {isLoading && (
                    <div className="flex flex-col items-center gap-3 py-12" data-testid="status-loading">
                      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                      <p className="text-sm text-gray-600">Editing your screenshot…</p>
                    </div>
                  )}
                  {!isLoading && resultUrl && (
                    <img src={resultUrl} alt="Edited" className="w-full h-auto rounded-lg" data-testid="img-result" />
                  )}
                  {!isLoading && errorMsg && (
                    <p className="text-sm text-red-600 p-4 text-center" data-testid="text-error">{errorMsg}</p>
                  )}
                </div>
              </div>
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
