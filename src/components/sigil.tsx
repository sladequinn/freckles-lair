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
]

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
          <path d="M500 45 L500 390 M500 948 L500 1240" pathLength="1" />
          <path d={heavyLines[1]} pathLength="1" />
          <path d={heavyLines[3]} pathLength="1" />
          <g transform="translate(1000 0) scale(-1 1)">
            <path d={heavyLines[1]} pathLength="1" />
            <path d={heavyLines[3]} pathLength="1" />
          </g>
        </g>
      </svg>
    </div>
  )
}
