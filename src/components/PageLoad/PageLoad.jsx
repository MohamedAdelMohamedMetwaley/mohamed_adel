import "./pageload.css";

function PageLoad() {
  return (
    <div className="pageload">
      <div className="cursor-container">
        <svg
          className="cursor-click"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1594 5.4903L16 3.65882"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 9.62524H3.79196"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9.66827 3.77808V0.999976"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5.39831 5.38721L3.4241 3.42279"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3.59725 16L5.57146 14.0356"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="cursor"></span>
      </div>
      <div className="npm">
        <h1>
          <span>{">"}</span> npm run awesomeness
        </h1>
        <p>http://localhost:awesome-portfolio</p>
      </div>
    </div>
  );
}

export default PageLoad;
