// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapHorizontalBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapHorizontalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapHorizontalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapHorizontalBold: ArrowSwapHorizontalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapHorizontalBoldSvg}></AntdIcon>;
};

ArrowSwapHorizontalBold.displayName = 'ArrowSwapHorizontalBold';
ArrowSwapHorizontalBold.inheritAttrs = false;
export default ArrowSwapHorizontalBold;