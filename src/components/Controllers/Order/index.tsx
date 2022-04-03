import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  OrderStyleProps
} from './styles';


export type OrderProps = OrderStyleProps & {
  id: string;
  patrimony: string;
  equipment: string;
  description: string;
  lacre: string;
  responsavelEstoque: string;
  responsavelOperacao: string;
  status: string;
  created_at: string;
}

type Props = {
  data: OrderProps;
};

export function Order({ data }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title> {data.patrimony} </Title>
          <MaterialIcons
            name={data.status === "open" ? "lock-open" : "check-circle"}
            size={24}
            color={data.status === "open" ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="lock-open" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
            {data.status}
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="person" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
            {data.responsavelEstoque}
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="my-location" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
            {data.lacre}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}