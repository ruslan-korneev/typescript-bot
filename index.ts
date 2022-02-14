type Note = {
  _id : string,
  body: string,
  title: string,
  createdAt: number,
  updatedAt: number
}

const note: Note = {
    _id: 'hige',
    body: '# hello',
    title: 'example note',
    createdAt: 0
}

note.updatedAt = 10

console.log('note', note)

