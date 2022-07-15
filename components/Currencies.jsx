import { Dropdown, globalCss } from "@nextui-org/react"
import useCurrencies from "../stores/currencies";
import useStore from "../stores/rates";


const popoverGlobalCss = globalCss({
  
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

export default function Currencies({ index }) {
  popoverGlobalCss();

  const { loading, fetch, hasErrors, data } = useStore((state) => state);
  const { currencies, setCurrencie } = useCurrencies((state) => state);

  const setCurrencies = () => { if (data.length === 0) return fetch() };

  const onChange = (e) => {
    setCurrencie({ currency: e.currentKey, index })
  };

  return (
    <Dropdown>
        <Dropdown.Button
          onPress={() => setCurrencies()}
          flat
          color="secondary"
          css={{ width: "50%", margin: "0 auto", marginBottom: "10px" }}
        >
          {currencies[index]}
        </Dropdown.Button>
        <Dropdown.Menu
          selectionMode="single"
          color="secondary"
          disallowEmptySelection
          onSelectionChange={onChange}
        >
          {loading && <Dropdown.Item disabled>Loading...</Dropdown.Item>}
          {hasErrors && <Dropdown.Item disabled>Error...</Dropdown.Item>}
          {!loading && !hasErrors && data.rates &&
            Object.keys(data.rates).map((item) => (
              <Dropdown.Item key={item}>{item}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
  );
}
