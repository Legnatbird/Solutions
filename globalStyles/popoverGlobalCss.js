import { globalCss } from "@nextui-org/react";

export const popoverGlobalCss = globalCss({
  
  "::-webkit-scrollbar": {
    width: "10px",
    backgroundColor: "$purple500"
  },

  "::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    backgroundColor: "$purple600",
    borderRadius: "10px"
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    boxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
    backgroundColor: "$purple800"
  },

  ".nextui-popover-content-container": {
    textAlign: "center",
    maxHeight: "200px !important",
    marginTop: "-1.7% !important",
  },
  ".nextui-popover-content": {
    $$popoverBackground: "$colors$purple600",
    backgroundColor: "$purple600"
  }
});