import m from "mithril";
import styles from "~/styles.css";

import Backend from "~/models/Backend";

export default {
  view: (vnode) => {
    let type;
    if(vnode.children == "=") {
      type = () => {
        Backend.return();
      };
    } else {
      type = () => {
        Backend.append(vnode.children);
      };
    }

    return (
      <button class="w-full h-full p-5 bg-slate-300 hover:bg-slate-400 hover:-translate-y-0.5 active:bg-slate-500 active:translate-y-0.5" onclick={type}>
        {vnode.children}
      </button>
    );
  },
};
