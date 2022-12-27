// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapBold: ArrowSwapBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapBoldSvg}></AntdIcon>;
};

ArrowSwapBold.displayName = 'ArrowSwapBold';
ArrowSwapBold.inheritAttrs = false;
export default ArrowSwapBold;