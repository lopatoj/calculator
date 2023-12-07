import m from "mithril";
import styles from "~/styles.css";

export default {
  view: (vnode) => {
    if (vnode.attrs.href.startsWith("http")) {
      return (
        <a class={vnode.attrs.class} href={vnode.attrs.href} >
          {vnode.children}
        </a>
      );
    } else {
      return (
        <m.route.Link class={vnode.attrs.class} href={vnode.attrs.href}>
          {vnode.children}
        </m.route.Link>
      );
    }
  },
};
