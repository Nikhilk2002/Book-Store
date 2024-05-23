const mongoose =require('mongoose')
const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true,
        }
    },
    {
        timestamps: true,
      }
);


// export const Book = mongoose.model('Book', bookSchema);


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;