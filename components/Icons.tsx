import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail, mdiFileAccount } from "@mdi/js";

const config = {
  iconSize: 1.5,
  iconColor: "#333333",
};

const { iconSize, iconColor } = config;
export const LinkedinIcon = () => (
  <Icon
    path={mdiLinkedin}
    title={"Deyby Rodriguez on LinkedIn"}
    size={iconSize}
    color={iconColor}
  />
);

export const GithubIcon = () => (
  <Icon
    path={mdiGithub}
    title={"Deyby Rodriguez on GitHub"}
    size={iconSize}
    color={iconColor}
  />
);

export const EmailIcon = () => (
  <Icon path={mdiEmail} title={"Email Me!"} size={iconSize} color={iconColor} />
);

export const ResumeIcon = () => (
  <Icon
    path={mdiFileAccount}
    title={"My Resume"}
    size={iconSize}
    color={iconColor}
  />
);
