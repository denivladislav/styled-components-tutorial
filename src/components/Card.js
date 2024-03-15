import { StyledCard } from "./styles/Card.styled"

export default function Card({ item: { id, title, body, image}}) {
  const isIdEven = id % 2 === 0;

  return (
    <StyledCard layout={isIdEven && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  )
}