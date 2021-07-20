import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";
import "./footer.css";

export function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>몰입캠프</Footer.Title>
              <Footer.Link href="/realhistory">Story</Footer.Link>
              <Footer.Link href="/application">Guide</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>후원사</Footer.Title>
              <Footer.Link href="https://www.bonangels.net/" target="_blank">
                Bon Angels
              </Footer.Link>
              <Footer.Link
                href="https://www.joinstartup.co.kr/"
                target="_blank"
              >
                조인스타트업
              </Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <Footer.Link
                href="https://www.facebook.com/themadcamp/"
                target="_blank"
              >
                <Icon className="fab fa-facebook-f" />
                Facebook
              </Footer.Link>
              {/*<Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>*/}
              <Footer.Link
                href="https://www.youtube.com/channel/UCOJkBzrgLfzFlHHGTLjJ5mw"
                target="_blank"
              >
                <Icon className="fab fa-youtube" />
                Youtube
              </Footer.Link>
              {/*<Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>*/}
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Contact Us</Footer.Title>
              <Footer.Body>cs496.ipc@gmail.com</Footer.Body>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
        <div style={{ textAlign: "center" }}>
          <small style={{ color: "#7d7d7d" }}>Since 2010</small>
        </div>
      </Footer>
    </>
  );
}
