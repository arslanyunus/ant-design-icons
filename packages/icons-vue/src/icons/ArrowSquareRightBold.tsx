// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareRightBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareRightBold: ArrowSquareRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareRightBoldSvg}></AntdIcon>;
};

ArrowSquareRightBold.displayName = 'ArrowSquareRightBold';
ArrowSquareRightBold.inheritAttrs = false;
export default ArrowSquareRightBold;