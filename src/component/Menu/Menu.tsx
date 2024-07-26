import {
  Tabs,
  HeaderTabs,
} from "./Menu.styled";

export default function Menu() {
  return (
    <>
      <HeaderTabs>
        <Tabs>Men</Tabs>
        <Tabs>Women</Tabs>
        <Tabs>Kids</Tabs>
        <Tabs>Brands</Tabs>
      </HeaderTabs>
    </>
  )
}