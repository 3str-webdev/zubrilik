import { FC } from "react";
import { IGHLinkProps } from "./GitHubLink.props";
import { Link, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubLink: FC<IGHLinkProps> = ({ url }) => {
  return (
    <Link href={url} underline="none" rel="noreferrer" target={"_blank"}>
      <Button startIcon={<GitHubIcon />} size="large">
        Проект на GitHub
      </Button>
    </Link>
  );
};

export default GitHubLink;
