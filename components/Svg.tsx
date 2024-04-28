import { cssInterop } from 'nativewind';
import Logo from '~/appcomponents/svg/logo';
import PathLine from '~/appcomponents/svg/pathLine';

function interopIcon(icon: any) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
        width: true,
        height: true,
        transform: true,
      },
    },
  });
}

const svgs = [PathLine, Logo];
svgs.forEach((svg) => interopIcon(svg));

export { PathLine, Logo };
