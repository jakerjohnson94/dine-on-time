import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { CircularProgress, Typography, Hidden } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { appBlue, fontGreyPrimary } from '../../resources/colors';
import fetchRecipeById from '../../redux/recipeAction';

class SearchDialog extends Component {
  state = {
    open: false,
    recipeId: '',
    doesIdMatch: true
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.checkForIdMatch() ?  this.props.fetchRecipe(Number(this.state.recipeId)) : this.setState({doesIdMatch: false})

  };

  handleChange = e => {
      this.setState({ recipeId: e.target.value });
  };

  checkForIdMatch = () => {
    if (
      this.props.allRecipes.find(
        recipe => recipe.blueApronId === Number(this.state.recipeId)
      )
    ) {
   return true;
    }else return false
  };

  render() {
    return (
      <React.Fragment>
        <Button
          style={{
            textTransform: 'none',
            marginTop: '1rem'
          }}
          onClick={this.handleClickOpen}
        >
          <Typography
            style={{ color: fontGreyPrimary, fontSize: '1.2em' }}
            component="p"
          >
            <Hidden lgUp> No QR Reader?</Hidden>{' '}
            <span style={{ color: appBlue }}>Search By Recipe Number</span>
          </Typography>
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="search-recipe"
        >
          {this.props.fetching ? (
            <DialogContent>
              <CircularProgress />
            </DialogContent>
          ) : (
            <React.Fragment>
              <DialogTitle id="search-recipe">Search Recipe By ID</DialogTitle>
              <DialogContent>
                <DialogContentText>{this.props.text}</DialogContentText>
                <TextField
                  value={this.state.recipeId}
                  onChange={this.handleChange}
                  autoFocus
                  margin="dense"
                  id="recipeId"
                  type="text"
                  placeholder="Recipe ID"
                  fullWidth
                />
                {!this.state.doesIdMatch ? (
                  <DialogContentText style={{color: '#F1948A'}}>
                    Invalid ID, please try again
                  </DialogContentText>
                ) : null}
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Search
                </Button>
              </DialogActions>
            </React.Fragment>
          )}
        </Dialog>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: recipeId => dispatch(fetchRecipeById(recipeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDialog);
