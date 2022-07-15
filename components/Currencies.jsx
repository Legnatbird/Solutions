import { popoverGlobalCss } from "../globalStyles/popoverGlobalCss";
import useCurrencies from "../stores/currencies";
import { Dropdown } from "@nextui-org/react"
import useStore from "../stores/rates";


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
