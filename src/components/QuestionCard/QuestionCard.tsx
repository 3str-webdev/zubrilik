import { FC, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Collapse,
  CardMedia,
  CardActions,
  List,
  ListItem,
  ListItemText,
  styled,
  IconButton,
  IconButtonProps,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questionsList } from "../../data/questions";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "0",
  transition: theme.transitions.create("transform", {
    duration: 100,
  }),
}));

interface IQuestionCardProps {
  numOfQuestion: number;
}

const QuestionCard: FC<IQuestionCardProps> = ({ numOfQuestion }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const { id } = questionsList[numOfQuestion];

  const toggleShow = () => {
    setShow(!show);
  };

  const getListItems = () => {
    return Object.keys(questionsList[numOfQuestion]).map((key) => {
      return (
        <>
          {key === "id" ? (
            <ListItem key={uuidv4()}>
              <ListItemText
                primary={questionsList[numOfQuestion][key]}
                secondary={"Номер вопроса"}
              />
            </ListItem>
          ) : (
            <ListItem key={uuidv4()}>
              <ListItemText
                primary={questionsList[numOfQuestion][key]}
                secondary={questionsList[0][key]}
              />
            </ListItem>
          )}
        </>
      );
    });
  };

  useEffect(() => {
    setShow(false);
  }, [numOfQuestion]);

  return (
    <>
      <Card>
        <CardMedia
          component={"img"}
          image={`./imgs/${id}.png`}
          height={300}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={() => {
            console.log("loaded");
            setIsLoading(false);
          }}
        />
        {isLoading && (
          <Skeleton variant="rectangular" height={400} animation="wave" />
        )}
        <CardActions style={{ justifyContent: "center" }}>
          <ExpandMore
            expand={show}
            onClick={toggleShow}
            aria-expanded={show}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={show} unmountOnExit>
          <CardContent>
            <List style={{ maxHeight: "300px", overflow: "auto" }}>
              {getListItems().map((item) => item)}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default QuestionCard;
