import React, { useState } from 'react';
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddBook(props) {
  const [open, setOpen] = useState(false);
  const [bookList, setBookList] = useState({author: '', isbn: '', price: '', title: '', year: ''})

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    props.addBook(bookList);
    handleClose();
  }

  const inputChanged = (event) => {
    setBookList({...bookList, [event.target.name]: event.target.value});
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add Book
      </Button>
      <Dialog open={open}>
        <DialogTitle>New book</DialogTitle>
        <DialogContent>
          <TextField
            name="author"
            value={bookList.author}
            onChange={inputChanged}
            margin="dense"
            label="Author"
            fullWidth 
          />
                  <TextField
            name="title"
            value={bookList.title}
            onChange={inputChanged}
            margin="dense"
            label="Title"
            fullWidth 
          />
                  <TextField
            name="year"
            value={bookList.year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            fullWidth 
          />
                  <TextField
            name="isbn"
            value={bookList.isbn}
            onChange={inputChanged}
            margin="dense"
            label="Isbn"
            fullWidth 
          />
                  <TextField
            name="price"
            value={bookList.price}
            onChange={inputChanged}
            margin="dense"
            label="Price"
            fullWidth 
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddBook;