// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareRightBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareRightBroken: ArrowSquareRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareRightBrokenSvg}></AntdIcon>;
};

ArrowSquareRightBroken.displayName = 'ArrowSquareRightBroken';
ArrowSquareRightBroken.inheritAttrs = false;
export default ArrowSquareRightBroken;