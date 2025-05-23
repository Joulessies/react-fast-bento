import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <motion.header
      className={clsx("hero hero--primary", styles.heroBanner)}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/examples"
          >
            View Examples
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

function Feature({ title, description, delay = 0 }) {
  return (
    <motion.div
      className={clsx("col col--4", styles.feature)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

function Example({ title, description, code, delay = 0 }) {
  return (
    <motion.div
      className={clsx("col col--6", styles.example)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
          <pre className={styles.codeBlock}>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Create beautiful Bento Grid layouts with React"
    >
      <HomepageHeader />
      <main>
        <motion.section
          className={styles.features}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <div className="container">
            <div className="row">
              <Feature
                title="Easy to Use"
                description="Simple API for creating complex Bento Grid layouts with minimal code"
                delay={0.1}
              />
              <Feature
                title="Beautiful by Default"
                description="Comes with beautiful default styling that you can customize to match your design"
                delay={0.25}
              />
              <Feature
                title="Responsive"
                description="Works seamlessly across all device sizes with built-in responsive design"
                delay={0.4}
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.examples}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <div className="container">
            <Heading as="h2" className="text--center">
              Quick Examples
            </Heading>
            <div className="row">
              <Example
                title="Basic Grid"
                description="Create a simple Bento Grid layout"
                code={`<BentoGrid>\n  <BentoGridItem\n    title=\"Welcome\"\n    className=\"col-span-2\"\n  >\n    <div>Content here</div>\n  </BentoGridItem>\n</BentoGrid>`}
                delay={0.1}
              />
              <Example
                title="Responsive Grid"
                description="Create a responsive grid that adapts to screen size"
                code={`<BentoGrid className=\"grid-cols-1 md:grid-cols-2\">\n  <BentoGridItem\n    title=\"Responsive Item\"\n    className=\"col-span-1 md:col-span-2\"\n  >\n    <div>Adapts to screen size</div>\n  </BentoGridItem>\n</BentoGrid>`}
                delay={0.25}
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="container">
            <div className="row">
              <div className="col col--12 text--center">
                <Heading as="h2">Ready to Get Started?</Heading>
                <p>Start building beautiful Bento Grid layouts today</p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/intro"
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}
