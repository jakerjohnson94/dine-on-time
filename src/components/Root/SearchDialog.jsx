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
    recipeIdInput: '',
    doesIdMatch: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleSubmit = () => {
    this.checkForIdMatch()
      ? this.props.fetchRecipe(Number(this.state.recipeIdInput))
      : this.setState({ doesIdMatch: false });
  };
  handleClose = () => {
    this.setState({ open: false, doesIdMatch: true, recipeIdInput: '' });
  };

  handleChange = e => {
    this.setState({ recipeIdInput: e.target.value });
  };

  checkForIdMatch = () => {
    if (
      this.props.allRecipes.find(recipe => recipe.blueApronId === Number(this.state.recipeIdInput))
    ) {
      return true;
    } else return false;
  };

  render() {
    return (
      <React.Fragment>
        <Button
          style={{
            textTransform: 'none',
            marginTop: '0',
          }}
          onClick={this.handleClickOpen}
        >
          <Typography style={{ color: fontGreyPrimary, fontSize: '1.2em' }} component="p">
            <Hidden lgUp> No QR Reader?</Hidden>{' '}
            <span style={{ color: appBlue }}>Search By Recipe Number</span>
          </Typography>
        </Button>

        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="search-recipe">
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
                  value={this.state.recipeIdInput}
                  onChange={this.handleChange}
                  autoFocus
                  margin="dense"
                  id="recipeIdInput"
                  type="text"
                  placeholder="Recipe ID"
                  fullWidth
                />
                {!this.state.doesIdMatch ? (
                  <DialogContentText style={{ color: '#F1948A' }}>
                    Invalid ID, please try again
                  </DialogContentText>
                ) : null}
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleSubmit} style={{ color: appBlue }}>
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
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: recipeIdInput => dispatch(fetchRecipeById(recipeIdInput)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDialog);
