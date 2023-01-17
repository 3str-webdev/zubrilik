import ChevronRight from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const IndexPage: FC = () => {
  return (
    <>
      <NavLink to={"/questions"}>
        <Button endIcon={<ChevronRight />} size="large" variant="outlined">
          К вопросам
        </Button>
      </NavLink>
    </>
  );
};

export default IndexPage;
