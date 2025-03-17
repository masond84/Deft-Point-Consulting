import ReactGA from 'react-ga4';

const TRACKING_ID = "G-8EHPQDX2MX";

export const initializeGA = () => {
    ReactGA.initialize(TRACKING_ID);
};
