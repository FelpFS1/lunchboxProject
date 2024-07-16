import * as Styles from "./styles";

interface CardProps {
  title: string;
  content: string;
}
export default function Card({ title, content }: CardProps) {
  return (
    <Styles.Container>
      <header>
        <h3>{title}</h3>
      </header>
      <span>{content}</span>
    </Styles.Container>
  );
}
