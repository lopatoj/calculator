import m from "mithril";
import styles from "~/styles.css";

import Button from "~/components/Button";
import Backend from "~/models/Backend";

export default {
  oninit: (vnode) => {
    document.title = "Calculator";
  },

  view: (vnode) => {
    return (
      <div class="container w-1/2 flex flex-col text-2xl">
        <div class="col-span-4 row-span-2 p-5 flex flex-row-reverse">
          {Backend.display}
        </div>
        <div>
          <div class="grid grid-cols-4 grid-rows-4 bg-slate-300 rounded">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>+</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>*</Button>
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>/</Button>
          </div>
        </div>
      </div>
    );
  },
};
