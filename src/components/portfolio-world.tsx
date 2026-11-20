export function PortfolioWorld() {
  return (
    <div className="world-art" aria-hidden="true">
      <div className="world-sky" />
      <div className="world-sun" data-parallax="0.08" />
      <div className="world-cloud cloud-one" data-parallax="0.16"><i /><i /><i /></div>
      <div className="world-cloud cloud-two" data-parallax="0.11"><i /><i /><i /></div>
      <svg className="bird-flock birds-one" viewBox="0 0 220 90" data-parallax="0.13" aria-hidden="true">
        <g className="bird bird-a"><path d="M8 19c8-10 17-10 26 0 8-8 16-8 24 0"/><path d="M91 44c6-8 13-8 20 0 7-6 13-6 20 0"/></g>
        <g className="bird bird-b"><path d="M151 16c5-7 11-7 17 0 6-5 12-5 18 0"/><path d="M42 70c5-6 10-6 15 0 5-5 10-5 15 0"/></g>
        <path className="bird bird-c" d="M176 64c4-5 8-5 12 0 4-4 8-4 12 0"/>
      </svg>
      <svg className="world-landscape mountain-back" data-parallax="0.23" viewBox="0 0 1600 760" preserveAspectRatio="xMidYMax slice">
        <path d="M0 495c112-39 168-141 262-160 55-11 92 1 127-14l111-178 107 178c18 22 40 45 72 68 62 46 114 22 177-32 62-54 121-147 174-142l8 1 111-184 111 184c16 21 34 41 57 58 48 51 102 70 164 36 60-33 93-127 151-129 49-2 75 77 143 100v476H0Z" fill="#bc9978" />
        <path d="M0 500c112-39 168-141 262-160 55-11 92 1 127-14l111-178 107 178c18 22 40 45 72 68 62 46 114 22 177-32 62-54 121-147 174-142l8 1 111-184 111 184c16 21 34 41 57 58 48 51 102 70 164 36 60-33 93-127 151-129 49-2 75 77 143 100" fill="none" stroke="#eed8b8" strokeWidth="3" opacity=".68" />
        <path d="M0 549c122-28 184-104 271-99 80 4 126 72 211 27 75-40 106-128 181-126 75 2 92 98 170 109 83 12 139-102 223-93 76 8 89 96 176 106 86 11 143-70 238-73 55-2 89 29 130 42v327H0Z" fill="#7c8d72" />
      </svg>
      <svg className="world-landscape mountain-front" data-parallax="0.42" viewBox="0 0 1600 760" preserveAspectRatio="xMidYMax slice">
        <path d="M0 537c103-60 175-102 276-95 101 7 136 66 225 51 96-16 135-107 239-91 87 14 133 109 222 108 100-2 147-109 244-97 95 11 119 91 221 82 75-7 117-49 173-70v335H0Z" fill="#56745d" />
        <path d="M0 594c123-58 198-57 282-25 73 28 116 70 197 57 88-14 138-80 221-78 77 2 115 69 197 77 92 9 157-61 243-56 82 5 123 53 206 49 96-4 157-55 254-91v233H0Z" fill="#345b48" />
      </svg>
      <div className="river-shape" data-parallax="0.5"><svg viewBox="0 0 1200 300" preserveAspectRatio="none"><path d="M0 0c220 44 321 17 450 47s202 124 374 90 221-7 376 25v138H0Z" fill="url(#river)"/><defs><linearGradient id="river" x1="0" x2="0.8" y1="0" y2="1"><stop stopColor="#8bc3c0" stopOpacity=".8"/><stop offset="1" stopColor="#286d72" stopOpacity=".94"/></linearGradient></defs></svg></div>
      <svg className="world-landscape forest-back" data-parallax="0.54" viewBox="0 0 1600 480" preserveAspectRatio="xMidYMax slice">
        <defs>
          <g id="distant-fir"><path d="M42 0c-3 18-13 28-20 42 8-2 13-1 17 2-12 4-22 13-27 24 11-4 20-3 26 2C22 79 12 91 8 104c12-5 23-4 31 3-10 8-17 19-21 31 14-5 25-3 33 5 7-8 19-12 35-7-5-14-13-24-25-31 9-6 21-7 36-1-7-15-19-24-34-28 7-8 18-10 32-7-8-15-20-23-37-25C56 27 47 16 42 0Z" />
            <path d="M38 137h9v52h-9z" />
          </g>
        </defs>
        <g fill="#47634c" opacity=".8">
          <use href="#distant-fir" x="8" y="205" transform="scale(.7)"/><use href="#distant-fir" x="180" y="157" transform="scale(.9)"/><use href="#distant-fir" x="375" y="196" transform="scale(.7)"/>
          <use href="#distant-fir" x="555" y="147" transform="scale(1.05)"/><use href="#distant-fir" x="782" y="184" transform="scale(.78)"/><use href="#distant-fir" x="952" y="137" transform="scale(1.1)"/>
          <use href="#distant-fir" x="1190" y="184" transform="scale(.82)"/><use href="#distant-fir" x="1380" y="139" transform="scale(1.05)"/><use href="#distant-fir" x="1534" y="187" transform="scale(.75)"/>
        </g>
        <path d="M0 395c178-43 299-12 433 3 158 18 289-40 435-14 195 35 281 16 424-10 129-24 220-15 308 10v96H0Z" fill="#45624a" />
      </svg>
      <svg className="world-landscape forest-mid" data-parallax="0.68" viewBox="0 0 1600 520" preserveAspectRatio="xMidYMax slice">
        <defs>
          <g id="near-fir"><path d="M55 0c-4 25-18 42-28 58 11-4 20-4 28 1C37 69 23 82 16 100c15-7 27-7 37 0-18 12-31 27-37 47 17-7 32-6 45 2-16 13-27 29-32 48 22-7 39-5 51 7 12-12 30-16 54-10-8-21-21-36-41-47 14-8 32-8 54 1-10-23-28-36-52-41 11-12 27-15 49-10-12-22-31-34-56-37C74 42 63 23 55 0Z" />
            <path d="M49 199h12v81H49z" />
            <path d="M55 70 27 112m30-8 42 52m-44-12-30 40m39-8 46 39" fill="none" stroke="#b4b08a" strokeOpacity=".22" strokeWidth="3" />
          </g>
          <g id="round-tree"><path d="M49 166c-22 0-37-13-35-32-14-3-20-14-14-27-3-14 8-26 23-27 1-17 15-28 32-26 10-20 39-22 52-6 17-2 31 11 30 28 17 5 24 23 14 36 8 16-5 33-22 34-7 16-23 23-41 18-12 11-30 12-41 2Z" />
            <path d="M67 165c-2 33-7 66-3 102h15c-4-39-1-69 4-102Z" />
            <path d="M70 197 43 225m37-21 29 25" fill="none" stroke="#b5a579" strokeOpacity=".28" strokeWidth="4" />
          </g>
        </defs>
        <g fill="#2e5543">
          <use href="#near-fir" x="-15" y="180"/><use href="#round-tree" x="104" y="220" transform="scale(.9)"/><use href="#near-fir" x="278" y="236" transform="scale(.82)"/>
          <use href="#round-tree" x="432" y="186" transform="scale(1.12)"/><use href="#near-fir" x="665" y="236" transform="scale(.84)"/><use href="#round-tree" x="841" y="205" transform="scale(1.02)"/>
          <use href="#near-fir" x="1055" y="204" transform="scale(1.02)"/><use href="#round-tree" x="1240" y="230" transform="scale(.88)"/><use href="#near-fir" x="1432" y="188" transform="scale(1.12)"/>
        </g>
        <path d="M0 425c158-32 268-9 410 1 177 13 323-33 461-17 182 22 320 16 452-9 123-23 207-10 277 7v113H0Z" fill="#244b3a" />
      </svg>
      <svg className="world-landscape forest-front" data-parallax="0.82" viewBox="0 0 1600 420" preserveAspectRatio="xMidYMax slice">
        <g fill="#183d32">
          <path d="M0 420V238c14-6 21-22 18-42 17-2 27-17 24-34 22-8 30-25 24-44 21-7 32-26 25-48 29-8 47-31 47-58 8 37 25 58 51 67-13 24-7 44 17 56-12 20-7 40 12 53-13 21-4 39 20 47-9 25-2 40 18 49v136Z"/>
          <path d="M1600 420V219c-18-8-26-22-21-43-19-2-28-15-25-33-21-8-29-24-22-43-20-8-29-24-21-44-27-9-42-31-41-56-9 35-25 56-49 64 13 24 7 43-16 55 11 19 6 39-12 52 13 20 4 39-19 46 9 24 2 40-17 48v155Z"/>
          <path d="M0 374c179-31 284 11 421 5 141-7 248-42 387-26 163 19 239 11 391-12 157-24 279-2 401 19v60H0Z"/>
        </g>
        <g fill="none" stroke="#9aab82" strokeOpacity=".28" strokeWidth="2">
          <path d="M119 118v168m-8-121-22-22m30 40 21-25M1490 120v168m-8-121-22-22m30 40 20-24"/>
          <path d="M61 233c17 5 28 17 30 36m1510-36c-17 5-28 17-30 36"/>
        </g>
      </svg>
      <div className="world-grain" />
    </div>
  );
}
