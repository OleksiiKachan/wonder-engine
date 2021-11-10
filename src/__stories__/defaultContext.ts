import { WonderEngineContext } from '../context/context';

const config: WonderEngineContext = {
  Link: 'a',
  analyticsHandler: (analytics) => {
    if (analytics) {
      if (analytics.gtmEvent) {
        console.log(`Analytics - GTM Event - ${analytics.gtmEvent}`);
      }
    }
  },
};

export default config;
