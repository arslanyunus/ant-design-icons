// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapHorizontalOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapHorizontalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapHorizontalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapHorizontalOutline: ArrowSwapHorizontalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapHorizontalOutlineSvg}></AntdIcon>;
};

ArrowSwapHorizontalOutline.displayName = 'ArrowSwapHorizontalOutline';
ArrowSwapHorizontalOutline.inheritAttrs = false;
export default ArrowSwapHorizontalOutline;