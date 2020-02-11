import React, { FC } from "react";

export const P2: FC = () => (
  <form>
    <label htmlFor="name">名k前</label>
    <input id="name" placeholder="~name~" type="text" />

    <label htmlFor="email">email</label>
    <input id="email" placeholder="~email~" type="email" />

    <label htmlFor="ra">A</label>
    <input id="ra" name="r" type="radio" />

    <label htmlFor="rb">B</label>
    <input id="rb" name="r" type="radio" />

    <label htmlFor="cx">X</label>
    <input id="cx" name="c" type="checkbox" value="x" />

    <label htmlFor="cy">Y</label>
    <input id="cy" name="c" type="checkbox" value="y" />

    <select>
      <option>-</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button type="submit">submit</button>
  </form>
);
