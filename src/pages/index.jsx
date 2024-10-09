import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import LinkButton from "../components/link-button/LinkButton";
import { mobileNavigation } from "./home.module.css";

export const Component = () => {
  return (
    <main>
      <title>PCCS Tools</title>
      <h1>In Development</h1>
      <p>
        A site for tools and data to assist in using the Phoenix Command Combat
        System
      </p>
      <div className={mobileNavigation}>
        <LinkButton>
          <Link to="/shooting">Shooting</Link>
        </LinkButton>
        <LinkButton>
          <Link to="/shotguns">Shotguns</Link>
        </LinkButton>
        <LinkButton>
          <Link to="/hand-to-hand">Hand To Hand</Link>
        </LinkButton>
      </div>
      <p>Also visit</p>
      <a href="https://pccs.herokuapp.com/">PCCS Helper</a>
      <p>
        An app for creating and using characters for Phoenix Command Combat
        System
      </p>
    </main>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default IndexPage;
