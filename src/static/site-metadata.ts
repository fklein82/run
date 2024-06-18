interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.fklein.me',
  logo: 'https://www.fklein.me/assets/images/profile.jpg',
  description: 'Personal running stat',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.fklein.me',
    },
    {
      name: 'About',
      url: 'https://www.fklein.me/about/',
    },
  ],
};

export default data;
