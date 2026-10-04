const fineLines = [
  "M504 336 C568 274 552 174 651 102 C709 60 760 27 807 0",
  "M509 377 C585 310 571 231 648 172 C705 128 742 86 770 38",
  "M512 470 C594 445 624 350 706 365 C775 378 766 470 837 501 C895 526 934 484 958 426",
  "M516 526 C587 507 619 430 683 439 C743 447 745 517 805 546 C855 570 906 549 935 515",
  "M516 642 C586 610 648 577 714 622 C769 659 807 715 883 701 C923 694 951 667 973 632",
  "M516 724 C598 676 663 709 717 768 C770 827 822 840 892 816 C928 804 953 781 974 754",
  "M515 834 C592 820 625 908 693 971 C771 1043 818 1136 883 1243 C912 1291 933 1320 961 1344",
  "M511 912 C567 917 596 988 648 1043 C712 1111 759 1197 810 1296 C832 1340 856 1376 889 1411",
  "M508 1024 C550 1047 568 1120 600 1184 C641 1266 683 1336 744 1392 C773 1419 796 1442 813 1472",
  "M505 1140 C536 1182 541 1257 568 1326 C593 1390 626 1441 675 1489",
  "M502 1250 C522 1306 517 1371 540 1430 C557 1473 577 1511 608 1545",
  "M506 282 C560 236 548 160 612 118 C652 92 688 60 714 20",
  "M514 418 C590 392 606 310 672 300 C724 292 748 342 790 372",
  "M517 586 C604 566 650 520 724 540 C786 557 822 610 896 596",
  "M516 684 C600 650 666 672 728 710 C788 747 836 766 902 752",
  "M513 880 C590 866 616 946 672 1004 C736 1070 780 1150 836 1240",
  "M509 968 C560 982 588 1052 626 1112 C672 1186 712 1250 768 1310",
  "M506 1086 C545 1118 556 1192 586 1256 C618 1326 654 1380 706 1434",
]

const hooks = [
  "M651 102 C690 118 702 160 684 196",
  "M706 365 C746 346 790 352 818 384",
  "M837 501 C870 540 866 584 840 612",
  "M714 622 C750 646 790 640 822 616",
  "M717 768 C760 752 806 760 838 790",
  "M693 971 C736 988 760 1030 752 1072",
  "M648 1043 C690 1052 716 1092 712 1136",
  "M600 1184 C638 1200 656 1242 648 1286",
]

const heavyLines = [
  "M505 332 C574 261 559 164 660 90 C714 51 758 24 800 4",
  "M512 464 C599 430 626 344 708 365 C777 383 772 467 842 500 C895 525 929 489 953 438",
  "M515 638 C592 598 651 580 716 623 C780 666 812 721 891 699",
  "M514 832 C594 808 631 901 697 969 C776 1051 820 1140 879 1241",
  "M508 1020 C555 1043 574 1118 604 1185 C644 1274 686 1339 746 1390",
]

const circuitLines = [
  "M625 214 L665 214 L665 174 L705 174 L705 129",
  "M706 365 L744 365 L744 328 L784 328",
  "M837 501 L871 501 L871 463 L908 463",
  "M714 622 L756 622 L756 584 L795 584",
  "M717 768 L758 768 L758 806 L799 806",
  "M693 971 L733 971 L733 1012 L773 1012",
  "M648 1043 L686 1043 L686 1083 L723 1083",
  "M600 1184 L638 1184 L638 1224 L675 1224",
]

const barbs = [
  "M651 102 L614 86 L638 124 Z",
  "M648 172 L615 147 L631 191 Z",
  "M706 365 L676 331 L690 381 Z",
  "M837 501 L881 478 L852 522 Z",
  "M714 622 L690 580 L731 615 Z",
  "M883 701 L927 673 L900 719 Z",
  "M717 768 L750 728 L739 786 Z",
  "M693 971 L655 940 L678 990 Z",
  "M648 1043 L613 1008 L633 1060 Z",
  "M810 1296 L850 1272 L826 1318 Z",
  "M568 1326 L536 1287 L552 1343 Z",
  "M684 196 L672 236 L706 212 Z",
  "M818 384 L858 402 L832 362 Z",
  "M840 612 L826 656 L862 632 Z",
  "M822 616 L862 598 L838 638 Z",
  "M838 790 L878 806 L852 768 Z",
  "M752 1072 L744 1116 L776 1090 Z",
  "M712 1136 L704 1180 L736 1156 Z",
  "M648 1286 L640 1330 L672 1306 Z",
  "M714 20 L740 0 L690 0 Z",
  "M790 372 L834 384 L802 346 Z",
  "M896 596 L940 606 L912 568 Z",
  "M902 752 L946 760 L920 722 Z",
  "M836 1240 L866 1282 L862 1226 Z",
  "M768 1310 L794 1354 L794 1298 Z",
  "M706 1434 L728 1478 L732 1422 Z",
]

const vertebrae = Array.from({ length: 22 }, (_, i) => 90 + i * 68)

const outerHeavy = [
  "M-30 110 C170 150 320 290 440 430",
  "M-30 890 C170 850 320 710 440 570",
  "M-20 500 C140 468 270 528 400 500",
  "M10 20 C250 70 370 300 300 520 C250 680 370 850 580 1010",
  "M200 -20 C230 120 330 230 470 300",
  "M200 1020 C230 880 330 770 470 700",
]

const outerFine = [
  "M-20 200 C180 220 300 330 400 470",
  "M-20 800 C180 780 300 670 400 530",
  "M-20 340 C120 330 240 400 350 440",
  "M-20 660 C120 670 240 600 350 560",
  "M60 -20 C120 160 220 260 340 330",
  "M60 1020 C120 840 220 740 340 670",
  "M330 -20 C350 100 420 180 520 230",
  "M330 1020 C350 900 420 820 520 770",
  "M-20 60 C100 90 180 180 220 300",
  "M-20 940 C100 910 180 820 220 700",
]

const outerCircuit = [
  "M0 300 L60 300 L60 258 L124 258 L124 220",
  "M0 700 L60 700 L60 742 L124 742 L124 780",
  "M160 0 L160 56 L206 56 L206 110",
  "M160 1000 L160 944 L206 944 L206 890",
  "M440 0 L440 60 L486 60 L486 118",
  "M440 1000 L440 940 L486 940 L486 882",
  "M0 500 L48 500 L48 470 L96 470",
  "M560 40 L560 96 L620 96",
  "M560 960 L560 904 L620 904",
]

const outerBarbs = [
  "M440 430 L486 448 L452 396 Z",
  "M440 570 L486 552 L452 604 Z",
  "M400 500 L452 486 L452 514 Z",
  "M580 1010 L628 1030 L602 976 Z",
  "M470 300 L518 310 L492 264 Z",
  "M470 700 L518 690 L492 736 Z",
  "M400 470 L446 480 L420 436 Z",
  "M400 530 L446 520 L420 564 Z",
  "M340 330 L384 346 L362 292 Z",
  "M340 670 L384 654 L362 708 Z",
  "M520 230 L566 244 L544 192 Z",
  "M520 770 L566 756 L544 808 Z",
  "M220 300 L252 338 L256 280 Z",
  "M220 700 L252 662 L256 720 Z",
]

const edgeSpikes = [
  "M0 80 L84 100 L0 120 Z",
  "M0 240 L64 256 L0 272 Z",
  "M0 420 L104 440 L0 460 Z",
  "M0 540 L104 560 L0 580 Z",
  "M0 728 L64 744 L0 760 Z",
  "M0 880 L84 900 L0 920 Z",
  "M100 0 L120 74 L140 0 Z",
  "M260 0 L280 110 L300 0 Z",
  "M380 0 L396 60 L412 0 Z",
  "M520 0 L540 90 L560 0 Z",
  "M660 0 L676 56 L692 0 Z",
  "M100 1000 L120 926 L140 1000 Z",
  "M260 1000 L280 890 L300 1000 Z",
  "M380 1000 L396 940 L412 1000 Z",
  "M520 1000 L540 910 L560 1000 Z",
  "M660 1000 L676 944 L692 1000 Z",
]

const outerGlints = [
  [120, 160, 14],
  [120, 840, 14],
  [300, 440, 10],
  [300, 560, 10],
  [560, 150, 12],
  [560, 850, 12],
  [60, 500, 8],
  [400, 60, 8],
  [400, 940, 8],
] as const

function glint(cx: number, cy: number, r: number) {
  const s = r * 0.32
  return `M${cx} ${cy - r} L${cx + s} ${cy - s} L${cx + r} ${cy} L${cx + s} ${cy + s} L${cx} ${cy + r} L${cx - s} ${cy + s} L${cx - r} ${cy} L${cx - s} ${cy - s} Z`
}

function HalfSigil() {
  return (
    <g id="sigil-half">
      <g className="sigil-heavy" fill="none" stroke="currentColor" strokeLinecap="round">
        {heavyLines.map((d) => (
          <path key={d} d={d} pathLength="1" />
        ))}
      </g>
      <g className="sigil-fine" fill="none" stroke="currentColor">
        {fineLines.map((d) => (
          <path key={d} d={d} pathLength="1" />
        ))}
      </g>
      <g className="sigil-circuit" fill="none" stroke="currentColor">
        {circuitLines.map((d) => (
          <path key={d} d={d} pathLength="1" />
        ))}
      </g>
      <g className="sigil-hooks" fill="none" stroke="currentColor">
        {hooks.map((d) => (
          <path key={d} d={d} pathLength="1" />
        ))}
      </g>
      <g className="sigil-barbs" fill="currentColor">
        {barbs.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g className="sigil-nodes" fill="currentColor">
        <circle cx="705" cy="129" r="4" />
        <circle cx="784" cy="328" r="3.5" />
        <circle cx="908" cy="463" r="4" />
        <circle cx="795" cy="584" r="3.5" />
        <circle cx="799" cy="806" r="4" />
        <circle cx="773" cy="1012" r="3.5" />
        <circle cx="723" cy="1083" r="4" />
        <circle cx="675" cy="1224" r="3.5" />
      </g>
    </g>
  )
}

function Spine() {
  return (
    <g className="sigil-spine">
      <path d="M500 45 L500 155 M500 189 L500 390 M500 434 L500 650 M500 700 L500 948 M500 996 L500 1240 M500 1288 L500 1555" />
      <path d="M500 38 L516 68 L500 98 L484 68 Z" />
      <path d="M500 144 L523 172 L500 202 L477 172 Z" />
      <path d="M500 374 L528 412 L500 451 L472 412 Z" />
      <path d="M500 632 L535 676 L500 721 L465 676 Z" />
      <path d="M500 930 L529 973 L500 1017 L471 973 Z" />
      <path d="M500 1220 L524 1264 L500 1307 L476 1264 Z" />
      <path d="M500 1510 L514 1545 L500 1582 L486 1545 Z" />
      <path d="M480 300 L500 266 L520 300 L500 334 Z" />
      <path d="M478 1083 L500 1047 L522 1083 L500 1120 Z" />
      <g className="sigil-vertebrae">
        {vertebrae.map((y, i) => (
          <path key={y} d={i % 3 === 0 ? `M470 ${y} L530 ${y}` : `M484 ${y} L516 ${y}`} />
        ))}
      </g>
    </g>
  )
}

function OuterHalf() {
  return (
    <g>
      <g className="sigil-outer-heavy" fill="none" stroke="currentColor" strokeLinecap="round">
        {outerHeavy.map((d) => (
          <path key={d} d={d} pathLength="1" />
        ))}
      </g>
      <g className="sigil-outer-fine" fill="none" stroke="currentColor" strokeLinecap="round">
        {outerFine.map((d) => (
          <path key={d} d={d} pathLength="1" />
        ))}
      </g>
      <g className="sigil-circuit" fill="none" stroke="currentColor">
        {outerCircuit.map((d) => (
          <path key={d} d={d} pathLength="1" />
        ))}
      </g>
      <g className="sigil-barbs" fill="currentColor">
        {outerBarbs.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g className="sigil-spikes" fill="currentColor">
        {edgeSpikes.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g className="sigil-glints" fill="currentColor">
        {outerGlints.map(([cx, cy, r]) => (
          <path key={`${cx}-${cy}`} d={glint(cx, cy, r)} />
        ))}
      </g>
      <g className="sigil-nodes" fill="currentColor">
        <circle cx="124" cy="220" r="4.5" />
        <circle cx="124" cy="780" r="4.5" />
        <circle cx="206" cy="110" r="4" />
        <circle cx="206" cy="890" r="4" />
        <circle cx="486" cy="118" r="4" />
        <circle cx="486" cy="882" r="4" />
        <circle cx="96" cy="470" r="4" />
        <circle cx="620" cy="96" r="4" />
        <circle cx="620" cy="904" r="4" />
      </g>
    </g>
  )
}

function Glints() {
  return (
    <g className="sigil-glints" fill="currentColor">
      <path d="M500 10 L508 35 L533 43 L508 51 L500 76 L492 51 L467 43 L492 35 Z" />
      <path d="M334 344 L340 363 L359 369 L340 375 L334 394 L328 375 L309 369 L328 363 Z" />
      <path d="M666 344 L672 363 L691 369 L672 375 L666 394 L660 375 L641 369 L660 363 Z" />
      <path d="M272 748 L279 771 L302 778 L279 785 L272 808 L265 785 L242 778 L265 771 Z" />
      <path d="M728 748 L735 771 L758 778 L735 785 L728 808 L721 785 L698 778 L721 771 Z" />
      <path d="M350 1194 L356 1212 L374 1218 L356 1224 L350 1242 L344 1224 L326 1218 L344 1212 Z" />
      <path d="M650 1194 L656 1212 L674 1218 L656 1224 L650 1242 L644 1224 L626 1218 L644 1212 Z" />
    </g>
  )
}

export function Field() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="sigil-ambient absolute inset-0" />
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        className="sigil-outer absolute inset-0 h-full w-full text-bone"
      >
        <g className="sigil-drift">
          <OuterHalf />
          <g transform="translate(1600 0) scale(-1 1)">
            <OuterHalf />
          </g>
        </g>
        <g className="sigil-red sigil-red-outer" color="#e11d48">
          <path d={outerHeavy[3]} pathLength="1" />
          <path d={outerHeavy[0]} pathLength="1" />
          <path d={outerHeavy[1]} pathLength="1" />
          <g transform="translate(1600 0) scale(-1 1)">
            <path d={outerHeavy[3]} pathLength="1" />
            <path d={outerHeavy[0]} pathLength="1" />
            <path d={outerHeavy[1]} pathLength="1" />
          </g>
        </g>
      </svg>
      <svg
        viewBox="0 0 1000 1600"
        preserveAspectRatio="xMidYMid meet"
        className="sigil-stage absolute top-1/2 left-1/2 h-[118svh] min-h-[780px] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 text-bone md:h-[142vh]"
      >
        <defs>
          <filter id="soft-glow" x="-30%" y="-20%" width="160%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="sigil-breathe">
          <HalfSigil />
          <g transform="translate(1000 0) scale(-1 1)">
            <HalfSigil />
          </g>
          <Spine />
          <Glints />
        </g>
        <g className="sigil-red" color="#e11d48" filter="url(#soft-glow)">
          <path d="M500 45 L500 1555" pathLength="1" />
          <path d={heavyLines[0]} pathLength="1" />
          <path d={heavyLines[1]} pathLength="1" />
          <path d={heavyLines[2]} pathLength="1" />
          <path d={heavyLines[3]} pathLength="1" />
          <path d={heavyLines[4]} pathLength="1" />
          <g transform="translate(1000 0) scale(-1 1)">
            <path d={heavyLines[0]} pathLength="1" />
            <path d={heavyLines[1]} pathLength="1" />
            <path d={heavyLines[2]} pathLength="1" />
            <path d={heavyLines[3]} pathLength="1" />
            <path d={heavyLines[4]} pathLength="1" />
          </g>
        </g>
      </svg>
    </div>
  )
}
