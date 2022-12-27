// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapHorizontalBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapHorizontalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapHorizontalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapHorizontalBroken: ArrowSwapHorizontalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapHorizontalBrokenSvg}></AntdIcon>;
};

ArrowSwapHorizontalBroken.displayName = 'ArrowSwapHorizontalBroken';
ArrowSwapHorizontalBroken.inheritAttrs = false;
export default ArrowSwapHorizontalBroken;