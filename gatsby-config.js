module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {

        // Website configuration
        website: {
          title: "My Blog", // Homepage title
          titleShort: "tsundere space", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
          name: "My blog", // Website name used for homescreen (PWA) and SEO
          description: "A GatsbyJS starter equipped with advanced features.", // Website description used for RSS feeds/meta description tag
          language: "en", // Sets the global HTML lang attribute
          themeColor: "#D83850", // Used for setting manifest and progress theme colors.
          backgroundColor: "#F7F7F7", // Used for setting manifest background color.
        },

        // User configuration
        user: {
          id: "AdvancedUser", // Unique identifier of the user on the website. Used for OpenGraph SEO tags
          firstName: "Advanced", // Used for SEO
          lastName: "User", // Used for SEO
          twitterName: "Vagr9K", // Twitter username used for SEO
          linkedIn: "your-linkedin", // Used for contact information
          github: "vagr9k", // Used for contact information
          email: "AdvancedUser@example.com", // Used for contact information and displayed in the RSS feed
          location: "User Location", // User location used for SEO
          about: "A full-stack web developer looking for a challenge!", // User information used for the author section
          avatar: "https://i.pravatar.cc/300", // User avatar used for the author section
        },

        // Organization information used for SEO
        organization: {
          name: "Organization Name",
          description: "Organization description",
          logoUrl: "/logos/logo-512.png",
          url: "https://gatsby-advanced-starter-demo.netlify.com", // URL of the organization website
        },

        // Gatsby Configuration
        contentDir: "/content/", // Directory for MDX posts. Defaults to "content".
      },
    },
  ],
};
