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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questionsList } from "../../data/questions";
import Typography from "@mui/material/Typography";

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
  const [show, setShow] = useState(false);
  console.log(numOfQuestion);

  const { id, title, country, city, architect, century } =
    questionsList[numOfQuestion];

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    setShow(false);
  }, [numOfQuestion]);

  return (
    <>
      <Card>
        <CardMedia component={"img"} image={`./imgs/${id}.png`} height={300} />
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
              <ListItem>
                <ListItemText
                  primary={title}
                  secondary={questionsList[0].title}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={country}
                  secondary={questionsList[0].country}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={city}
                  secondary={questionsList[0].city}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={architect}
                  secondary={questionsList[0].architect}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={century}
                  secondary={questionsList[0].century}
                />
              </ListItem>
              {questionsList[numOfQuestion].other && (
                <ListItem>
                  <Typography>{questionsList[numOfQuestion].other}</Typography>
                </ListItem>
              )}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default QuestionCard;
