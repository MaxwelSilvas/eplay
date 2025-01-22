import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.co/222x250" alt="Imagem de exemplo" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
      saepe placeat aperiam consequatur, similique ut facere quasi iste eligendi
      ea exercitationem expedita eveniet? Impedit accusamus quis excepturi
      repellendus, et iste?
    </Descricao>
  </Card>
)

export default Product
