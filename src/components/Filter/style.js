import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as filter } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { Select } from "antd";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const Wrapper = styled.div`
  width: fit-content;
  position: absolute;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
`;
const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const SelectAnt = styled(Select)`
  min-width: 200px;
  max-width: 200px;
  width: 100%;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;

export { Container, Icons, Wrapper, MenuWrapper, Section, SelectAnt };
