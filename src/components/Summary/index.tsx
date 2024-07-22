import Card from "./Card";
import * as Styles from "./styles";

type CardSummaryProps = {
  title: string;
  content: string;
};
interface SummaryProps {
  firstCard: CardSummaryProps;
  secondCard: CardSummaryProps;
  thirdCard: CardSummaryProps;
}
export default function Summary({
  firstCard,
  secondCard,
  thirdCard,
}: SummaryProps) {
  return (
    <Styles.SummaryContainer>
      <Card title={firstCard.title} content={firstCard.content} />
      <Card title={secondCard.title} content={secondCard.content} />
      <Card title={thirdCard.title} content={thirdCard.content} />
    </Styles.SummaryContainer>
  );
}
