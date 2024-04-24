import { cssInterop } from 'nativewind';
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

interopIcon(PathLine);

export { PathLine };
