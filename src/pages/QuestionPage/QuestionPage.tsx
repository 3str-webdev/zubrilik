import { FC, useState, memo, useCallback, useEffect } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { questionsList } from "../../data/questions";
import { range, shuffle } from "../../utils";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import styles from "./QuestionsPage.module.scss";
import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";

const QuestionPage: FC = () => {
  console.log("QP render");

  const [questionsOrder, setQuestionsOrder] = useState(
    shuffle<number>(range(questionsList.length, 1))
  );

  const [orderIndex, setOrderIndex] = useState<number>(0);

  const showNextQuestion = () => {
    if (orderIndex === questionsList.length - 2) {
      setQuestionsOrder(shuffle<number>(range(questionsList.length, 1)));
      setOrderIndex(0);
    } else {
      setOrderIndex((prev) => prev + 1);
    }
  };

  const showPrevQuestion = () => {
    if (!orderIndex) return;

    setOrderIndex((prev) => prev - 1);
  };

  useEffect(() => {
    console.log(questionsOrder, orderIndex);
  }, [questionsOrder, orderIndex]);

  return (
    <>
      <section className={styles.page}>
        <section className={styles.controlls}>
          <Button
            startIcon={<ChevronLeftIcon />}
            disabled={!orderIndex}
            onClick={showPrevQuestion}
          >
            Назад
          </Button>
          <Badge
            color="primary"
            badgeContent={questionsList.length - orderIndex - 2}
            max={99}
          >
            <Button endIcon={<ChevronRightIcon />} onClick={showNextQuestion}>
              Вперёд
            </Button>
          </Badge>
        </section>
        <QuestionCard numOfQuestion={questionsOrder[orderIndex]} />
      </section>
    </>
  );
};

export default memo(QuestionPage);
