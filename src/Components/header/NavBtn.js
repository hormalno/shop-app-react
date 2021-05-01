import styled from "styled-components"

const NavBtn = styled.li`
  display: inline-block;
  padding: 0.5px 10px 0.5px 10px;
  background: transparent;
  color: white;
  border: 2px solid white;
  .menuitem-link {
    color:#abbda5;
    font-weight:600;
    text-transform:uppercase;
    font-size: 14px;
    :hover {
      color: #8a756b;
      background:transparent;
      text-decoration: none;
    }
  }
`

export default NavBtn;