// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "introduction/intro",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "introduction/features",
      label: "Features",
    },
    {
      type: "doc",
      id: "Getting Started",
      label: "Getting Started",
    },
    {
      type: "doc",
      id: "api",
      label: "API Reference",
    },
    {
      type: "doc",
      id: "customization",
      label: "Customization",
    },
    {
      type: "doc",
      id: "advanced-usage",
      label: "Advanced Usage",
    },
    {
      type: "doc",
      id: "faq",
      label: "FAQ",
    },
    {
      type: "doc",
      id: "contributing",
      label: "Contributing",
    },
  ],
};

export default sidebars;
