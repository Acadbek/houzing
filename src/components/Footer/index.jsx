import { Container, Content, Icon, Section, Wrapper } from "./style";
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content bottom>
          <Section>
            <Content.Title>Contact us</Content.Title>
            <Content.Item>
              Bunyodkor ko'chasi, Chilonzor 64dom 2-qavat, Webbrain Academy
            </Content.Item>
            <Content.Item>+998 33 576 20 20</Content.Item>
            <Content.Item>webbrainacademy@gmail.com</Content.Item>
          </Section>
          <Section>
            <Content.Title>Wide Renge Of Properties</Content.Title>
            <Content.Item>Uzbekistan</Content.Item>
            <Content.Item>Korea</Content.Item>
            <Content.Item>India</Content.Item>
            <Content.Item>UAE</Content.Item>
          </Section>
          <Section>
            <Content.Title>Financing Made Easy</Content.Title>
            <Content.Item>Frontend</Content.Item>
            <Content.Item>Backend</Content.Item>
            <Content.Item>Mobile</Content.Item>
            <Content.Item>Flutter</Content.Item>
            <Content.Item>Android</Content.Item>
          </Section>
          <Section>
            <Content.Title>See Neighborhoods</Content.Title>
            <Content.Item>t.me/webbrain_admin</Content.Item>
            <Content.Item>t.me/webbrain_ceo</Content.Item>
            <Content.Item>instagram.com/webbrain_admin</Content.Item>
            <Content.Item>instagram.com/smd_94</Content.Item>
          </Section>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;
