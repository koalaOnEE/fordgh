import { forwardRef, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Album.css";
const Page = forwardRef(({ className, children }, ref) => (
  <div ref={ref} className={className}>
    {children}
  </div>
));


function Polaroid({ img, caption, side, frameBg }) {
  return (
    <div className={`polaroid ${side}`}>
      <div className="polaroidFrame" style={{ backgroundImage: `url(${frameBg})` }}>
        <div className="polaroidWindow">
          {img && <img src={img} alt={caption} className="polaroidPhoto" />}
        </div>
      </div>
      <div className="polaroidCaption">{caption}</div>
    </div>
  );
}

const coverBg = "/images/cover.png";
const leftBg = "/images/page_left.png";
const rightBg = "/images/page_right.png";
const polaroidBg = "/images/polaroid.jpg";
const polaroidBg2 = "/images/polaroid2.jpg";

export default function Album() {
  const bookRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);

  const onFlip = (e) => {
    setPageIndex(e.data); 
  };
  const spreads = [
    {
      left: [
        { img: "/images/4s.jpg", caption: "PUMPKINN\nOct 12, 2025", frameBg: polaroidBg },
        { img: "/images/5s.jpg", caption: "Howl'O Scream\nOct15, 2025", frameBg: polaroidBg },
      ],
      right: [
        { img: "/images/3s.jpg", caption: "You turned legal\nNov 9, 2025", frameBg: polaroidBg },
        { img: "/images/2s.jpg", caption: "Botanical Garden lights\nDec 9, 2025", frameBg: polaroidBg },
      ],
    },
    {
      left: [{ img: "/images/1s.jpg", caption: "Bethlehem Trip\nDec 18, 2025", frameBg: polaroidBg }],
      right: [{ img: "", caption: "", frameBg: polaroidBg }], 
    },
  ];

  const openAlbum = () => {
   
    setTimeout(() => bookRef.current?.pageFlip()?.flip(1), 50);
  };

  
  const insidePages = spreads.flatMap((spread, idx) => [
    <Page key={`L-${idx}`} className="page paper leftPaper">
      <div className="pageGrid" style={{ backgroundImage: `url(${leftBg})` }}>
        {spread.left.map((p, i) => (
          <Polaroid key={i} img={p.img} caption={p.caption} side="left" frameBg={p.frameBg} />
        ))}
      </div>
    </Page>,

    <Page key={`R-${idx}`} className="page paper rightPaper">
      <div className="pageGrid" style={{ backgroundImage: `url(${rightBg})` }}>
        {spread.right.map((p, i) => (
          <Polaroid key={i} img={p.img} caption={p.caption} side="right" frameBg={p.frameBg} />
        ))}
      </div>
    </Page>,
  ]);

  return (
    <div className="albumScene">
      <div className="albumShell">
        <HTMLFlipBook
          className={`flipBook ${pageIndex === 0 ? "coverCentered" : ""}`}
          ref={bookRef}
          width={520}
          height={650}
          size="fixed"
          showCover
          usePortrait={false}
          onFlip={onFlip}
        >
       {/* Cover */}
<Page className="page coverPage">
  <div
    className="coverHit"
    style={{ backgroundImage: `url(${coverBg})` }}
    onClick={openAlbum}
  >
    <div className="coverTitle">
      <span className="gLetter">G</span>
      <span className="heart"> ♡⁠ </span>
      <span className="cLetter">C</span>
    </div>
  </div>
</Page>



          {/* Inside pages */}
          {insidePages}

          {/* Back cover */}
          <Page className="page coverPage">
            <div className="coverHit" style={{ backgroundImage: `url(${coverBg})` }} />
          </Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
