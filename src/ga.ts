import ReactGA from 'react-ga4';

const TRACKING_ID = "G-8EHPQDX2MX";
const PRODUCTION_ID = "G-BTW851KXSF";

export const initializeGA = () => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.initialize(PRODUCTION_ID);
};
