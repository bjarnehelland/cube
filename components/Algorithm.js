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

function icon(move) {
  switch (move) {
    case 'F':
    case 'f':
      return <Rotate direction="left" />
    case "F'":
    case "f'":
      return <Rotate direction="right" />
    case 'R':
    case "L'":
    case "M'":
      return <Turn direction="up" />
    case "R'":
    case 'L':
    case 'M':
      return <Turn direction="down" />
    case 'U':
    case "D'":
      return <Turn direction="left" />
    case "U'":
    case 'D':
      return <Turn direction="right" />
    default:
      return null
  }
}

function Move({ move }) {
  return (
    <div className={isHelper(move) ? null : 'border'}>
      {icon(move)}
      <span>{move}</span>
      <style jsx>{`
        div {
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 8px;
          margin-bottom: 8px;
          position: relative;
        }
        .border {
          border: 1px solid #9a9a9a;
          width: 40px;
          border-radius: 6px;
        }
        span {
          z-index: 0;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

function Rotate({ direction = 'left' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.711 489.711">
      <path d="M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1-.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zM462.456 195.511c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z" />
      <style jsx>{`
        svg {
          position: absolute;
          width: 30px;
          fill: #cecece;
          ${direction === 'right' ? 'transform: scale(-1, 1);' : null}
        }
      `}</style>
    </svg>
  )
}

function Turn({ direction }) {
  let rotation = 0
  switch (direction) {
    case 'up':
      rotation = -90
      break
    case 'down':
      rotation = 90
      break
    case 'left':
      rotation = 180
      break
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.6 489.6">
      <path d="M0 244.8c0 9.5 7.7 17.2 17.2 17.2h414.2L322.9 370.4c-3.3 3.3-5 7.7-5 12.1s1.7 8.8 5 12.1c6.7 6.7 17.6 6.7 24.3 0l137.6-137.7c6.4-6.4 6.4-17.8 0-24.3L347.1 95c-6.7-6.7-17.6-6.7-24.3 0-6.7 6.7-6.7 17.6 0 24.3l108.4 108.4H17.1C7.6 227.6 0 235.3 0 244.8z" />
      <style jsx>{`
        svg {
          position: absolute;
          width: 30px;
          fill: #cecece;
          transform: rotate(${rotation}deg);
        }
      `}</style>
    </svg>
  )
}
