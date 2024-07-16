import Card from "./Card";
import * as Styles from "./styles";

export default function Summary() {
  return (
    <Styles.SummaryContainer>
      <Card title="Quantidade Mensal" content="42" />
      <Card title="Quantidade semanal" content="42" />
      <Card title="Obras ativas" content="7" />
    </Styles.SummaryContainer>
  );
}
