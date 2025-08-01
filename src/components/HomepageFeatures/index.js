import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Grid from "@mui/material/Grid";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "My Education",
    link: "docs/about_me/education", 
    Svg: require("@site/static/img/education.svg").default,
    description: (
      <>
       I have a strong academic foundation in computer science. I am pursuing a Diploma in ICT, Software Engineering from Metropolia University of Applied Sciences, Finland, with a focus on modern web development and automation technologies.
      </>
    ),
  },
  {
    title: "Skills",
    link: "docs/about_me/skills",
    Svg: require("@site/static/img/skills.svg").default,
    description: (
      <>
       I bring a mix of technical skills and soft skills that enable me to learn quickly, collaborate well, and deliver quality results. My focus is on web development, automation, and data analysis.
      </>
    ),
  },
  {
    title: "Github",
    link: "https://github.com/priya-sharma160/Priya_Sharma.git",
    Svg: require("@site/static/img/g.svg")
      .default,
    description: (
      <>
        I use GitHub to share my learning journey, personal projects, and ongoing experiments in web development and data science. It’s where I document everything from simple JavaScript apps to full React projects, including testing and deployment.
      </>
    ),
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/login",
    Svg: require("@site/static/img/link.svg").default,
    description: (
      <>
       On LinkedIn, I share my professional background, learning progress, and tech interests. It’s a platform where I connect with peers, mentors, and future collaborators in the tech industry.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <Grid key={idx} xs={12} sm={10} md={6}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </>
  );
}
