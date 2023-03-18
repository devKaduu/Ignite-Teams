import {
  ButtonIconTypeStyleProps,
  ContainerButtonOpacity,
  Icon,
} from "./stlyes";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap; //retorna os icones disponiveis no MaterialIcons
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <ContainerButtonOpacity {...rest}>
      <Icon name={icon} type={type} />
    </ContainerButtonOpacity>
  );
}
