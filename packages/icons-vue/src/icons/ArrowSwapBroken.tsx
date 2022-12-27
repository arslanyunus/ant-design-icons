// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapBroken: ArrowSwapBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapBrokenSvg}></AntdIcon>;
};

ArrowSwapBroken.displayName = 'ArrowSwapBroken';
ArrowSwapBroken.inheritAttrs = false;
export default ArrowSwapBroken;