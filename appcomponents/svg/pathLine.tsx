import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function PathLine(props: SvgProps) {
  return (
    <Svg viewBox="0 0 80 10" fill="none" {...props}>
      <Path
        d="M2 10.631s35.898-12.04 65.988-7.64"
        stroke="currentColor"
        strokeWidth={3.62698}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default PathLine;
