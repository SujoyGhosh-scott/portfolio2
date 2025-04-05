import React, { useEffect, useState } from "react";
import Link from "next/link";

function SocialLinks() {
  const socialData = [
    {
      name: "SujoyGhosh-scott",
      link: "https://github.com/SujoyGhosh-scott",
      bg: "#000000",
      src: "data:image/png;base64,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",
      alt: "github--v1",
    },
    {
      name: "ghoshsujoy336",
      link: "https://leetcode.com/u/ghoshsujoy336/",
      bg: "#FFA40F",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACA0lEQVR4nK3VWYiOURgH8J9lbJMtxr5mu1B2oUSmmIS4VG7IklKkZIkLccGFIly4GBnNlSLLhQtCKVlCkmTLnq0sNSnlRqeeqbdvvs+838z3r3PxP895/89ynvO8lI8BuIbv2KrC6I/H2Idx+I3qSon3wyPsD16Hz+hcCfG+eIADwefjG+ZWQrw37uFQ8Bn4gQWVEO+F2ziS2avFS9zEiPaI98QtHEeHAlvi2/EeY9oiXh0RngixFOlpPMR5TItz6/EWo8oR74EbqA/x1I4fsAuTsRpfsTjOb8Ir1OQR746rOIWOGI13WFNwbha+YGnw+gjgv0iCF9CIThiO19hY4vz0eAd78QQrW3OwCndQhSF4gS2tfDMBx7ChSCO0wHUsi+jvFqRcE/xgjrUbg4o5+IU+8TrvF3HeiB051smoRAv8QdfI4mKB7SOmyIfUdT+LGVLNJ0Z6qQ3HZmypxk0xIlpbTaXu7nBmmK3FG4zM2Kti6BWuSdEUzbxLqdSGRW/PC745HlDaL4Y0phvix/OpIOOSqI3yzA6+Dc8xuIj4GVxGNxzFHjlRF5nMDJ7a82nGSRI8h0vRFEPjQS5SBpaEk6mZTFJmV2KCNkStU0M8C3vZWB6joLk900UuxPjgA2NEpIfVZqyIyHfG3E+1TyVZF5mk/XYjRZymZRL8G6U7izl5vv4HF2d0krm+IIwAAAAASUVORK5CYII=",
      alt: "external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo",
      text: "black",
    },
    {
      name: "Sujoy_Ghosh",
      link: "https://www.hackerrank.com/profile/Sujoy_Ghosh",
      bg: "#00B15D",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACWUlEQVR4nK3WQYvWVRQG8J+hBs6olGKlzKKsvkG4kMkinMw0s0WYgZiofYTSVWVSObapnCbNUcxAXIRaTuokCk7tRc1NTQqGNAvBQUptIwcOw+Xlvr5/ogcuvDz/c8+595xzn/PSDAvwEa7iCrbjMf8D5qAf49iBJ/EUdib3CR7+L44fxNZ08hnmVWwexa60eRfTmzpfgsv4Do83sI9bHcUl9N7PsBtf43esSG4KPsBIg5yvwh/Yja5aEePUn2NGwffjZ7yHX/FQhyDheAAXMb/88CW2tRjPxp/Yh2fxD97Ibw9ksJltAn2Y9ZnEL3imYvgKjuA1HC742HwLd7C4sm8RRksictdTMXwZ3+fJDxb8IazJ4kbuW9GTtZzEePZ8K17CMDZgb8FHsDcz+MrKvrm4XhITtcqjD6fwNgYLPuqyDj8UHVcifN0siX8xtWL4Ak5jPW7jRq74/TqOY3llX/i62yTAcziLWdiIzbk2JjecaewYYCIfWiuexxm8hbHspFi/YRN+xLLKvu7WFP3Vpsh9WYNI0VDBf5U3OZk2HYs81qZNl2caomO+Lfg9maYIvrRJm462eWgv5gz4Cd8U/FCmbaRNgHho50piIHWnJttrM99PJLcaf+PVfHDXKi3e3yoV81Nu97eIXQ2hP+dzqsXNPy6+RaADuFBT366U2rE2r7PEIziB91PSS7kebPNoJ9GbtwmRW6jZwDmWEl0Tvipi/G1JjfoiT9yKGJlRu7B5B9OaOi8RAz0GeziJQR8D/2l8mlz80+g0hBohChZDJHIcK4ZT3KAj7gEz44EC7pN3TAAAAABJRU5ErkJggg==",
      alt: "external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-light-tal-revivo",
      text: "black",
    },
    {
      name: "sujoy-ghosh2000",
      link: "https://www.linkedin.com/in/sujoy-ghosh2000/",
      bg: "#0A66C2",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2aPWsUURSGrxoFxSSmS2JhJVpoFRG0t4qYKrG1SOEPSCJYiKDYKDb6CywFtRMEV0QRgim0iqBgYVBQJCRRkoiaR87yBoZhZ3J3Zid7B+9TJee83HvevR8zmxPnIpFIIYCzQAP4Sff5oVpG2zVxnXC51s5KGOvAFDDkugwwBEyrJrxWBngm8ZQLDGBGtTV8xLYfjUEXGMCgalvxETdxgYJvff+FEeAU8Bj4CnwBHgHHqii4MiO6zf60uA7XgBFXIyNvlbJnzAFgv93pij2tqvAqjCwrtS8R6/O+RQIy8lypG0C/TFxVbLaqwqswMgKstjgj9rQ94Wp2ax0G7gGfgM+1vLVCgQ5srVdk89JHA+wGzgMPgAVtyyXdiLeAo9thJBcfDfBui/xv4DbQU7mRvLjnhzAPTAKHgD1AL3AauAv8kuYhsDNEI/b03wCuZBUo3Ungm4aZCdHIODCR+H1XzvxnNIydnb6gjChnrzV3gO+S2UvnTdtaLbRPpLkYlBF7rQHeJM7J38TPc8DelP6CcvdDM3JZqffAcbuVdB4+tjoPwBHFP4RmxD5141wqPqb461S8X/Gl0IwsKjWQig8ovpiK71B8IzQjmZOXmS+XaMTFFWlSdme4sgMk40UmLzNfLtGIiyvSpOzOcGUHSMaLTF5mvly2GiALX02RcTttxL5zZ/HCV1Nk3I4aCQXaMLIibddbbmmAg6pt2Uds3VNj2gUGcKmd1tuoxOvq2Q1vS5X5NQ3LxOZfWfza1Il2QX3b06mVaSSao/X7h4FIJOI2+Qcr3dTGXC5RnAAAAABJRU5ErkJggg==",
      alt: "linkedin",
    },
    {
      name: "sujoyghosh",
      link: "https://www.npmjs.com/~sujoyghosh",
      bg: "#CC0001",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzElEQVR4nGNgGAWjYBSMglHAwPB/gDEDiPjMwMBwHAc+C1XzFo+ay1A1z/CoQcefkR0AEsAFZKBqVuNRYwFV009CkjqOzwHeDAwMhQwMDDx4HBAOVYPPASlQDAKqUPVGxDhgFVRcBo8D4AbgccATKAaBUKiaolEHMFApClqQxAYkCpABxQ54xsDA0IeEb0LFZ0ExNgfkQy0E4eVQNWfRzPkMxSD2ZqiaA1D+M2QHEINx5QKKS0JiALaSEF6S0QP8p9QHo2AUjIJRMGgBAI11zwNyRl6fAAAAAElFTkSuQmCC",
      alt: "npm",
      text: "black",
    },
  ];
  return (
    <div className="row-span-6 md:row-span-2 bg-secondary flex flex-wrap">
      <div
        className={`w-1/2 h-1/3 text-xl md:text-2xl font-semibold blowbrush text-neutral flex items-center pl-3 md:pl-6`}
      >
        Get Connected
      </div>
      {socialData.map((el, i) => (
        <div
          key={i}
          className={`w-1/2 h-1/3 flex items-center pl-3 md:pl-6 md:text-lg font-semibold`}
          style={{ background: el.bg, color: el.text }}
        >
          <Link href={el.link} target="_blank">
            <img
              src={el.src}
              alt={el.alt}
              className="h-6 md:h-8 mr-3 object-contain"
            />
          </Link>
          <Link href={el.link} target="_blank">
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

function HackerRankBadges() {
  return (
    <div className="row-span-6 md:row-span-2 border-b border-neutral md:border-none w-full overflow-auto flex flex-col">
      <div
        className={`text-xl md:text-2xl font-semibold blowbrush text-neutral flex items-center pl-3 md:pl-6 bg-secondary py-3 md:py-5`}
      >
        HackerRank Badges
      </div>
      <div className="flex justify-evenly items-center flex-1 bg-neutral-focus">
        <div className="h-20 md:h-24 w-20 md:w-24 bg-yellow-400 mask mask-hexagon flex flex-col justify-center items-center">
          <div className="w-6 h-6">
            <img
              src="https://hrcdn.net/fcore/assets/badges/problem-solving-ecaf59a612.svg"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-extrabold text-gray-700 mt-1">
            Problem Solving
          </span>
          <span className="text-gray-700 text-[8px] md:text-sm">★★★★★</span>
        </div>
        <div className="h-20 md:h-24 w-20 md:w-24 bg-gray-400 mask mask-hexagon flex flex-col justify-center items-center">
          <div className="w-6 h-6">
            <img
              src="https://hrcdn.net/fcore/assets/badges/java-9d05b1f559.svg"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-extrabold text-gray-700 mt-1">
            Java
          </span>
          <span className="text-gray-700 text-[8px] md:text-sm">★★★★</span>
        </div>
        <div className="h-20 md:h-24 w-20 md:w-24 bg-yellow-400 mask mask-hexagon flex flex-col justify-center items-center">
          <div className="w-6 h-6">
            <img
              src="https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-extrabold text-gray-700 mt-1">
            Python
          </span>
          <span className="text-gray-700 text-[8px] md:text-sm">★★★★★</span>
        </div>
        <div className="h-20 md:h-24 w-20 md:w-24 bg-yellow-400 mask mask-hexagon flex flex-col justify-center items-center">
          <div className="w-6 h-6">
            <img
              src="https://hrcdn.net/fcore/assets/badges/10-days-of-javascript-94ff22d1c9.svg"
              alt=""
              className="h-full object-contain"
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-extrabold text-gray-700 mt-1">
            Days of JS
          </span>
          <span className="text-gray-700 text-[8px] md:text-sm">★★★★★</span>
        </div>
      </div>
    </div>
  );
}

function GithubActivity() {
  return (
    <div className="row-span-6 md:row-span-2 border-b border-neutral md:border-none bg-neutral-focus">
      <div
        className={`text-xl md:text-2xl font-semibold blowbrush text-neutral flex items-center pl-3 md:pl-6 bg-secondary py-3 md:py-5`}
      >
        GitHub Activities
      </div>
      <div className="flex justify-center items-center">
        <a href="https://git.io/streak-stats">
          <img
            src="https://streak-stats.demolab.com?user=SujoyGhosh-scott&theme=transparent&hide_border=true&border_radius=0&card_width=450&card_height="
            alt="GitHub Streak"
          />
        </a>
      </div>
    </div>
  );
}

const SocialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [SocialLinks, HackerRankBadges, GithubActivity];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const ActiveComponent = components[currentIndex];
  return <ActiveComponent />;
};

export default SocialCarousel;
