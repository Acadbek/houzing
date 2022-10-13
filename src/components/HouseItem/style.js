import styled from "styled-components";

import { ReactComponent as share } from "../../assets/icons/bath.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/love.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: var(--padding);
  max-width: var(--width);
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  justify-content: ${({ flex }) => !flex && "center"};
  align-items: ${({ flex }) => flex && "center"};
  align-items: center;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  margin: 32px 0;
`;

Details.Title = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

Content.Title = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: ${({ desc }) => (desc ? "24px" : "18px")};
  text-align: start;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Icon = styled.div``;

Icon.Share = styled(share)`
  display: flex;
  padding: 2px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 25px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icon.Love = styled(love)`
  display: flex;
  padding: 2px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 25px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icon.Bed = styled(bed)``;
Icon.Bath = styled(bath)``;
Icon.Garage = styled(garage)``;
Icon.Ruler = styled(ruler)``;
Icon.Resize = styled(resize)`
  cursor: pointer;
`;
Icon.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icon.Title = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #696969;
`;

const Description = styled.div`
  margin-top: 17px;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgb(255, 255, 255, 0) 0%, #ffffff 100%);
`;

export { Container, Content, Description, Section, Icon, Details };
