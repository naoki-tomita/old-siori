import { Loader } from "@googlemaps/loader";
import * as React from "react";
import { render } from "react-dom";
import { App } from "./src/components/App";
import { initServices } from "./src/Map";

async function main() {
  const loader = new Loader({
    apiKey: process.env.API_KEY!,
    libraries: ["places"]
  });
  await loader.load();
  initServices();
  render(<App map={{} as any}/>, document.getElementById("app"))
}

main();
