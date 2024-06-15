import React from "react";
import styles from "./Content.module.css";
import { Route, Routes } from "react-router-dom";
import Safety from "../pages/safety/Safety";
import MainPage from "../pages/mainPage/MainPage";
import Technique from "../pages/technique/Technique";
import Equipment from "../pages/equipment/Equipment";
import Tool from "../pages/tool/Tool";
import Work from "../pages/work/Work";
import Violation from "../pages/violation/Violation";
import Pass from "../pages/pass/Pass";
import Normative from "../pages/normative/Normative";
import Notes from "../pages/notes/Notes"

function Content() {
  return (
    <div id="content" className={styles.content}>
      <h3>Sticky Navigation Example</h3>

      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/safety" element={<Safety/>}/>
        <Route path="/technique" element={<Technique/>}/>
        <Route path="/equipment" element={<Equipment/>}/>
        <Route path="/tool" element={<Tool/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/violation" element={<Violation/>}/>
        <Route path="/pass" element={<Pass/>}/>
        <Route path="/normative" element={<Normative/>}/>
        <Route path="/notes" element={<Notes/>}/>
      </Routes>

      <p>
        The navbar will stick to the top when you reach its scroll position.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
    </div>
  );
}

export default Content;
