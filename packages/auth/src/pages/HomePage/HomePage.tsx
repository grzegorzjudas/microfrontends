import React from 'react';
import { Button } from '@grzegorzjudas/design-system';

import Text from '../../components/Text';

type Props = {
    text: string;
    onButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function HomePage (props: Props) {
    return (
        <>
            <Text prefix={props.text} />
            <Button onClick={props.onButtonClicked} color="primary" variant="contained">Click!</Button>
        </>
    );
}

export default HomePage;
