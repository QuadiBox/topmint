// TradingViewWidget.jsx
import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "symbols": [
          [
            "Apple",
            "AAPL|1D"
          ],
          [
            "Google",
            "GOOGL|1D"
          ],
          [
            "Microsoft",
            "MSFT|1D"
          ],
          [
            "NASDAQ:TSLA|1D"
          ],
          [
            "COINBASE:BTCUSD|1D"
          ],
          [
            "TVC:USOIL|1D"
          ],
          [
            "TVC:US03MY|1D"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "dark",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div class="tradingview-widget-container" ref={container}>
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default TradingViewWidget;

