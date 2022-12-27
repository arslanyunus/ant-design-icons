// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRightBroken: ArrowRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightBrokenSvg}></AntdIcon>;
};

ArrowRightBroken.displayName = 'ArrowRightBroken';
ArrowRightBroken.inheritAttrs = false;
export default ArrowRightBroken;