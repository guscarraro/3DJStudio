import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <p>LOGO</p>
      <nav>
        <a>Sobre nós</a>
        <a>Projetos</a>
        <a>Contato</a>
        <a>Orcamento</a>
      </nav>
    </HeaderStyled>
  );
};
