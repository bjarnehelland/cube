export default function Algorithm({ algorithm }) {
  return (
    <div>
      <h3>{algorithm.name}</h3>
      <div className="moves">
        {algorithm.moves.split(' ').map((move, i) => (
          <Move key={i} move={move} />
        ))}
      </div>
      <style jsx>{`
        .moves {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}

function isHelper(move) {
  return move.startsWith('(') || move.startsWith(')')
}

function Move({ move }) {
  return (
    <div className={isHelper(move) ? null : 'border'}>
      {move}
      <style jsx>{`
        div {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          margin-right: 8px;
          margin-bottom: 8px;
        }
        .border {
          border: 1px solid #9a9a9a;
          width: 40px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  )
}
