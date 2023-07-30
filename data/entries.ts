import { DiaryEntry } from "../src/types";
import toNewDiaryEntry from "../src/utils";

const data: DiaryEntry[] = [
    {
      "id": 1,
      "date": "2017-01-01",
      "weather": "rainy",
      "visibility": "poor",
      "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
      "id": 2,
      "date": "2017-04-01",
      "weather": "sunny",
      "visibility": "good",
      "comment": "Everything went better than expected, I'm learning much"
    }
]

const dairyEntries: DiaryEntry[] = data.map(obj => {
  const object = toNewDiaryEntry(obj) as DiaryEntry;
  return object;
})

export default dairyEntries;