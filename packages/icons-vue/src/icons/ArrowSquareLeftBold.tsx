// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareLeftBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareLeftBold: ArrowSquareLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareLeftBoldSvg}></AntdIcon>;
};

ArrowSquareLeftBold.displayName = 'ArrowSquareLeftBold';
ArrowSquareLeftBold.inheritAttrs = false;
export default ArrowSquareLeftBold;