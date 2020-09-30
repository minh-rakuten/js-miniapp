import React, { useReducer } from 'react';
import MiniApp from 'js-miniapp-sdk';

import {
  Button,
  CardActions,
  CircularProgress,
  Typography,
  makeStyles,
} from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import GreyCard from '../components/GreyCard';

const useStyles = makeStyles((theme) => ({
  content: {
    height: '50%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 18,
    color: theme.color.primary,
    fontWeight: 'bold',
  },
  actions: {
    justifyContent: 'center',
  },
  error: {
    color: red[500],
    marginTop: 10,
  },
}));

type State = {
  isLoading: ?boolean,
  isError: ?boolean,
};

export const initialState = {
  isLoading: false,
  isError: false
};

export const dataFetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'SHOW_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case 'SHOW_FAILURE':
      return {
        ...initialState,
        isLoading: false,
        isError: true,
      };
    default:
      throw Error('Unknown action type');
  }
};

function Ads() {
  const [interstitialState, interstitialDispatch] = useReducer(dataFetchReducer, initialState);
  const [rewardState, rewardDispatch] = useReducer(dataFetchReducer, initialState);
  const classes = useStyles();

  const displayInterstitialAd = () => {
    interstitialDispatch({ type: 'LOADING' })

    const adUnitId = "ca-app-pub-3940256099942544/1033173712"// public test adId from Google.
    MiniApp.loadInterstitialAd(adUnitId)
      .then((loadSuccess) => {
        console.log(loadSuccess);

        MiniApp.showInterstitialAd(adUnitId)
          .then((closedSuccess) => {
            interstitialDispatch({ type: 'SHOW_SUCCESS' })
            console.log(closedSuccess);
          })
          .catch((error) => {
            interstitialDispatch({ type: 'SHOW_FAILURE' })
            console.error(error);
          });

      })
      .catch((error) => {
        interstitialDispatch({ type: 'SHOW_FAILURE' })
        console.error(error);
      });
  };

  const displayRewardAd = () => {
    rewardDispatch({ type: 'LOADING' })

    const adUnitId = "ca-app-pub-3940256099942544/5224354917"// public test adId from Google.
    MiniApp.loadRewardedAd(adUnitId)
      .then((loadSuccess) => {
        console.log(loadSuccess);

        MiniApp.showRewardedAd(adUnitId)
          .then((reward) => {
            rewardDispatch({ type: 'SHOW_SUCCESS' })
            console.log("type: " + reward.type + "amount: " + reward.amount);
          })
          .catch((error) => {
            rewardDispatch({ type: 'SHOW_FAILURE' })
            console.error(error);
          });

      })
      .catch((error) => {
        rewardDispatch({ type: 'SHOW_FAILURE' })
        console.error(error);
      });
  };

  return (
    <GreyCard className={classes.content}>
      {(interstitialState.isLoading || rewardState.isLoading) && (
        <CircularProgress size={20} className={classes.buttonProgress} />
      )}
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          className={classes.button}
          onClick={displayInterstitialAd}
          disabled={interstitialState.isLoading}
          variant="contained"
        >
          Show Interstitial
        </Button>
      </CardActions>
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          className={classes.button}
          onClick={displayRewardAd}
          disabled={rewardState.isLoading}
          variant="contained"
        >
          Show Reward
        </Button>
      </CardActions>
      {(interstitialState.isLoading || rewardState.isLoading) && (
        <Typography variant="body1" className={classes.error}>
          Error display ads
        </Typography>
      )}
    </GreyCard>
  );
}

export default Ads;
