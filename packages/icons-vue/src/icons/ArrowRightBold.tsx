// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRightBold: ArrowRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightBoldSvg}></AntdIcon>;
};

ArrowRightBold.displayName = 'ArrowRightBold';
ArrowRightBold.inheritAttrs = false;
export default ArrowRightBold;