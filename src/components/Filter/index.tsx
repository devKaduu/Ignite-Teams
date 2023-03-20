import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter() {
  return (
    <Container>
      <Title></Title>
    </Container>
  );
}
