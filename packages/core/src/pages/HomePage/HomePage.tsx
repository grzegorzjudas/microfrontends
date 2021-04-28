import React from 'react';

import Text from '../../components/Text';

import reactLogo from '../../../assets/images/react-logo.svg';

type Props = {
    clicks?: number;
}

export function HomePage (props: Props) {
    return (
        <>
            <img src={reactLogo} width={200} height={141} alt="React logo" />
            <h4>You have clicked {props.clicks || 0} times.</h4>
            <Text />
        </>
    );
}

export default HomePage;
