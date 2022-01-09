import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile, smobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
  ${smobile({ width: "50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
  ${smobile({
    width: "10px 0px",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
  })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ paddingBottom: "12px" })};
  ${smobile({ paddingBottom: "12px", marginRight: "30px" })};
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
  ${smobile({ width: "50px" })};
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
  ${smobile({ display: "none" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ paddingBottom: "12px" })};
  ${smobile({ marginRight: "15%" })};
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
    paddingLeft: "4px",
    display: "flex",
    flexDirection: "row",
  })};
  ${smobile({
    fontSize: "24px",
    paddingLeft: "4px",
    display: "flex",
    flexDirection: "row",
  })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
  ${smobile({ flex: 2, justifyContent: "center", marginRight: "30px" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  ${smobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>STEVE</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
