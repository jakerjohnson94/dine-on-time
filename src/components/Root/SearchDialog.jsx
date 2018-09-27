import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import fetchRecipeById from '../../redux/recipeAction';

class SearchDialog extends Component {
  state = {
    open: false,
    recipeId: 0
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    if ( this.state.recipeId > 0 )
      this.props.fetchRecipe( this.state.recipeId );
    else
      this.setState({open: false});
  };

  handleChange = e => {
    this.setState( { recipeId: e.target.value } );
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Search</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="search-recipe"
        >
          <DialogTitle id="search-recipe">Search</DialogTitle>
          <DialogContent>
            <DialogContentText>
              { this.props.text }
            </DialogContentText>
            <TextField
              value={ this.state.recipeId }
              onChange={ this.handleChange }
              autoFocus
              margin="dense"
              id="recipeId"
              label="Recipe Number"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Search
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: recipeId => dispatch(fetchRecipeById(recipeId))
  };
};

export default connect( undefined, mapDispatchToProps)(SearchDialog);