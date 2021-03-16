
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { CryptoData } from "../ctypes/coinbaseResponse"
import { CryptoDataView  } from "../pages/Home/views/cryptoDataView"


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

function renderView() {
  let mockedData = 
    {
      name: "bitcoin",
      market_data: {
        price_change_percentage_24h: -1,
        current_price: { usd: 12 }
      },
      image: { small: "www.example.com" },
      market_cap_rank: 23,
      symbol: "btc",
      id: "bitcoin"
    } as CryptoData;

  return render(<CryptoDataView data={mockedData}/>, container);
}


it("renders user data", async () => {

  await act(async () => {
    renderView()
  });

  //console.log(container);

  //expect(container.querySelector("#test").textContent).toBe("Currency not Found");
  expect(container.querySelector("td").textContent).toBe("Name ");

});