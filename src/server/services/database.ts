import mongoose from 'mongoose'

export const connect = async () => {
  mongoose.connect('mongodb://localhost:27017/todo', {}, () => {
    // tslint:disable-next-line:no-console
    console.log('connected to database')
  })
}
