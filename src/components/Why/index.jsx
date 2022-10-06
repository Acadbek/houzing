import { Container, Content, Icon, Section, Wrapper } from "./style";
const Why = () => {
  return (
    <Wrapper>
      <Container>
        <Content top>
          <h2 className="title">Why choose Us</h2>
          <Section.Desc top>
            Located in a small village in Surrey in the United Kingdom, Updown
            Court is the most beautiful house.
          </Section.Desc>
        </Content>
        <Content bottom>
          <Section>
            <Icon.House />
            <Section.Title>Trusted By Thousand</Section.Title>
            <Section.Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              quibusdam ipsam quo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure quibusdam ipsam quo.
            </Section.Desc>
          </Section>
          <Section>
            <Icon.Map />
            <Section.Title>Trusted By Thousand</Section.Title>
            <Section.Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              quibusdam ipsam quo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure quibusdam ipsam quo.
            </Section.Desc>
          </Section>
          <Section>
            <Icon.Calc />
            <Section.Title>Trusted By Thousand</Section.Title>
            <Section.Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              quibusdam ipsam quo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure quibusdam ipsam quo.
            </Section.Desc>
          </Section>
          <Section>
            <Icon.Message />
            <Section.Title>Trusted By Thousand</Section.Title>
            <Section.Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              quibusdam ipsam quo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iure quibusdam ipsam quo.
            </Section.Desc>
          </Section>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Why;
