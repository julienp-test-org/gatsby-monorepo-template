module.exports = {
  siteMetadata: {
    title: "Site Name 222222222",
    description: "GatsbyJS is a blazing fast modern site generator for React.",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Subjects",
        link: "#",
        subLinks: [
          {
            name: "Mathematics",
            link: "/mathematics/",
            subLinks: [
              {
                name: "NCERT",
                link: "/mathematics/ncert-math",
              },
            ],
          },
          {
            name: "Computer",
            link: "/computer/",
          },
        ],
      },
      {
        name: "Exams",
        link: "#",
        subLinks: [
          {
            name: "SSC-CGL",
            link: "/exams/ssc-cgl",
          },
        ],
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],

    socialLinks: [
      {
        name: "Linkedin",
        link: "@linkedin",
      },
      {
        name: "Twitter",
        link: "@twitter",
      },
    ],
  },

  plugins: ["gatsby-theme-shared-styles"],
};
