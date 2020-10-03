import React, { Component } from "react";

import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import { auth } from "../../firebase";

import authentication from "../../services/authentication";

import EmptyState from "../../components/EmptyState";

// import { ReactComponent as CabinIllustration } from "../../assets/illustrations/cabin.svg";
import { ReactComponent as InsertBlockIllustration } from "../../assets/illustrations/insert-block.svg";
import ToDoListCard from "../../components/ToDoListCard/ToDoListCard";

class HomePage extends Component {
  signInWithEmailLink = () => {
    const { user } = this.props;

    if (user) {
      return;
    }

    const emailLink = window.location.href;

    if (!emailLink) {
      return;
    }

    if (auth.isSignInWithEmailLink(emailLink)) {
      let emailAddress = localStorage.getItem("emailAddress");

      if (!emailAddress) {
        this.props.history.push("/");

        return;
      }

      authentication
        .signInWithEmailLink(emailAddress, emailLink)
        .then((value) => {
          const { displayName, email } = value.user;

          this.props.openSnackbar(`Autenticado como ${displayName || email}`);
        })
        .catch((reason) => {
          this.props.openSnackbar(authentication.getErrorFirebase(reason));
        })
        .finally(() => {
          this.props.history.push("/");
        });
    }
  };

  render() {
    const { user } = this.props;

    if (user) {
      return <></>;
    }

    return (
      <EmptyState
        image={<InsertBlockIllustration />}
        title={process.env.REACT_APP_TITLE}
        description={process.env.REACT_APP_DESCRIPTION}
      />
    );
  }

  componentDidMount() {
    this.signInWithEmailLink();
  }
}

HomePage.propTypes = {
  user: PropTypes.object,
};

export default withRouter(HomePage);
