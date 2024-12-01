import logo from "./assets/Logo.svg";
import twitter from "./assets/twitter.svg";
import telegram from "./assets/telegram.svg";
import dexs from "./assets/dexs.svg";
import animateBg from "./assets/animate_bg.png";

function App() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="fixed right-0 top-0 animate-pulse-1 w-[60%] md:w-[60%] lg:w-[40%]">
          <img src={animateBg} alt="animateBg" />
        </div>
        <div className="absolute left-0 bottom-[20%] animate-pulse-2 w-[60%] md:w-[70%] lg:w-[40%] lg:bottom-0">
          <img src={animateBg} alt="animateBg" />
        </div>
      </div>

      <div className="relative z-10">
        <header className="flex justify-center items-center p-8 lg:justify-start">
          <img
            src={logo}
            alt="logo"
            className="w-[60px] md:w-[70px] lg:w-[80px] xl:w-[100px]"
          />
        </header>
        <main>
          <div className="flex flex-col items-center justify-center px-4 lg:mb-14 mb-4 md:mb-8">
            <h1 className="text-center text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-white flex flex-col items-center justify-center xl:flex-row">
              Welcome to $longevity{" "}
              <span className="hidden xl:block">&nbsp;</span>
              <div className="relative lg:min-w-56 ">
                <div className="xl:absolute -top-[30px] left-0 flex md:-top-[16px] xl:-top-[30px]">
                  <span className="letter">w</span>
                  <span className="letter">o</span>
                  <span className="letter">r</span>
                  <span className="letter">l</span>
                  <span className="letter">d</span>
                </div>
              </div>
            </h1>
          </div>
          <h2 className="text-center text-[#cdcdcd] lg:mb-14 mb-4 md:mb-8 lg:text-2xl">
            Make death optional <br />
            /ri:. ...:..:.:::.::ii7/ (noun) <br />a Merging Crypto and Longevity
            Innovation b The Enigmatic Utopia of Longevity
          </h2>
          <div className="px-4 flex justify-center text-white gap-4 xl:flex-row flex-col items-center xl:gap-16 xl:items-stretch mb-8 lg:mb-24">
            <div className="border-2 border-transparent rounded-xl p-6 w-full md:w-[600px] flex flex-col gap-8 bg-white/20 backdrop-blur-sm relative border-[#C7C7C7] md:hover:[filter:drop-shadow(4px_4px_8px_#ffffff)] transition-all duration-300">
              <h2 className="text-lg md:text-xl lg:text-2xl">
                What is $longevity?{" "}
              </h2>
              <p className="text-sm md:text-base lg:text-xl">
                $longevity the Desci DAO is a decentralized autonomous
                organization focused on health and longevity.
              </p>
            </div>
            <div className="border-2 border-transparent rounded-xl p-6 w-full md:w-[600px]  flex flex-col gap-8 bg-white/20 backdrop-blur-sm relative border-[#C7C7C7] hover:[filter:drop-shadow(4px_4px_8px_#ffffff)] transition-all duration-300">
              <h2 className="text-lg md:text-2xl lg:text-2xl">Our Goal</h2>
              <p className="text-sm md:text-base lg:text-xl">
                It leverages blockchain technology to create a unique digital
                asset that fosters community engagement around themes of health
                consciousness.
              </p>
            </div>
          </div>
          <footer className="flex flex-col gap-8 items-center bg-[#2C2C2C] p-10 w-full rounded-t-3xl md:bottom-0 z-999">
            <div className="flex gap-4 xl:flex-row flex-col items-center">
              <a
                href="https://x.com/longevitybnb?s=21"
                target="_blank"
                className="flex items-center gap-4 text-white text-xl px-4 py-2 md:text-2xl lg:text-4xl hover:bg-[#454545] rounded-xl transition-all duration-300"
              >
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-[32px] md:w-[24px] lg:w-[40px]"
                />
                <p>X/ Twitter</p>
              </a>
              <a
                href="https://dexscreener.com/bsc/0x7a448a2df03187382ffCa47D216805c02e033AeF"
                target="_blank"
                className="flex items-center gap-4 text-white text-xl px-4 py-2 md:text-2xl lg:text-4xl hover:bg-[#454545] rounded-xl transition-all duration-300"
              >
                <img
                  src={dexs}
                  alt="dexs"
                  className="w-[32px] md:w-[24px] lg:w-[40px]"
                />
                <p>DEXSCREENER</p>
              </a>
              <a
                href="https://t.me/longevityBNB/1"
                target="_blank"
                className="flex items-center gap-4 text-white text-xl px-4 py-2 md:text-2xl lg:text-4xl hover:bg-[#454545] rounded-xl transition-all duration-300"
              >
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-[32px] md:w-[24px] lg:w-[40px]"
                />
                <p>Telegram</p>
              </a>
            </div>
            <div className="text-[#B3B3B3] text-sm md:text-xl lg:text-2xl text-center">
              2024 Longevity All Copy Right
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
