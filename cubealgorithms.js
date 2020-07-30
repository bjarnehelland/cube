export default {
  '2lookOLL': {
    name: '2 look OLL',
    algorithms: [
      {
        name: 'Line',
        moves: "F ( R U R' U' ) F'",
      },
      {
        name: 'L shape',
        moves: "f ( R U R' U' ) f'",
      },
      {
        name: 'Dot',
        moves: "F ( R U R' U' ) F' f ( R U R' U' ) f'",
      },
      {
        name: 'Sune',
        moves: "R U R' U R U2 R'",
      },
      {
        name: 'Antisune',
        moves: "L' U' L U' L' U2 L",
      },
      {
        name: 'H',
        moves: "F ( R U R' U') 3 F'",
      },
      {
        name: 'Pi',
        moves: "R U2 ( R2 U' R2 U' R2 ) U2 R",
      },
      {
        name: 'L',
        moves: "x ( R' U R D' ) ( R' U' R D )",
      },
      {
        name: 'T',
        moves: "x ( L U R' U' ) ( L' U R U' )",
      },
      {
        name: 'U',
        moves: "R2 D ( R' U2 R ) D' ( R' U2 R' )",
      },
    ],
  },
}
