// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleRightBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleRightBold: ArrowCircleRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleRightBoldSvg}></AntdIcon>;
};

ArrowCircleRightBold.displayName = 'ArrowCircleRightBold';
ArrowCircleRightBold.inheritAttrs = false;
export default ArrowCircleRightBold;