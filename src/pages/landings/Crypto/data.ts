// types
import { Coin, Feature } from './types';

// images
import btc from 'assets/images/icons/coins/btc.svg';
import eth from 'assets/images/icons/coins/eth.svg';
import usdt from 'assets/images/icons/coins/usdt.svg';
import link from 'assets/images/icons/coins/link.svg';
import bat from 'assets/images/icons/coins/bat.svg';
import dash from 'assets/images/icons/coins/dash.svg';
import bnb from 'assets/images/icons/coins/bnb.svg';
import xtz from 'assets/images/icons/coins/xtz.svg';

const coins: Coin[] = [
    {
        icon: btc,
        name: 'Bitcoin',
    },
    {
        icon: eth,
        name: 'Ethereum',
    },
    {
        icon: usdt,
        name: 'Tether',
    },
    {
        icon: link,
        name: 'Chainlink',
    },
    {
        icon: bat,
        name: 'Basic Attention Token',
    },
    {
        icon: dash,
        name: 'Dash',
    },
    {
        icon: bnb,
        name: 'Binance Coin',
    },
    {
        icon: xtz,
        name: 'Tezos',
    },
];

const features: Feature[] = [
    {
        icon: 'shield',
        title: 'Secure & Encrypted Transactions',
        description: 'Advanced payment and processing technologies, fine-tuned from more than 3 years development',
    },
    {
        icon: 'credit-card',
        title: 'Transparent Fees',
        description: 'Barbelless catfish pelican gulper candlefish thornfishGulf menhaden ribbonbearer riffle.',
    },
    {
        icon: 'smile',
        title: 'Easy to Use',
        description: 'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!',
    },
    {
        icon: 'phone-call',
        title: 'Quality Support',
        description: 'Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.',
    },
];

export { coins, features };
