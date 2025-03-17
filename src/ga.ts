import ReactGA from 'react-ga4';

const PRODUCTION_ID = "G-BTW851KXSF";

export const initializeGA = () => {
    ReactGA.initialize(PRODUCTION_ID);
};
