import React, {MutableRefObject} from "react";

export const SimpleComponent = React.memo(
    (
        props: {
            number: number,
            componentRerenderedTimes: MutableRefObject<number>
        }
    ) => {
        props.componentRerenderedTimes.current++;
        const onPress = React.useCallback(() => alert(props.number),[]);

        return <div onClick={onPress}>Number: {props.number}</div>;
    }
);