import { getNobelPrizes } from "./service";
import { displayNobelPrizes } from "./view";

getNobelPrizes()
  .then(displayNobelPrizes)
  .catch((e: unknown) => {
    console.error(e);
  });
