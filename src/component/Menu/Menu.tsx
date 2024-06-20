import {ReactLink} from "./Menu.styled"
import {
  Tabs,
  HeaderTabs,
} from "./Menu.styled";

export default function Menu() {
  return (
    <>
      <HeaderTabs>
        <ReactLink to="/Men"><Tabs>Men</Tabs></ReactLink>
        <ReactLink to="/Women"><Tabs>Women</Tabs></ReactLink>
        <ReactLink to="/Kids"> <Tabs>Kids</Tabs></ReactLink>
        <ReactLink to="/Brands"><Tabs>Brands</Tabs></ReactLink>

        {/* <Tabs></Tabs>
          <Tabs></Tabs>
          <Tabs></Tabs> */}

      </HeaderTabs>
    </>
  )
}