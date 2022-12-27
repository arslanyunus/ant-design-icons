// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapOutline: ArrowSwapOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapOutlineSvg}></AntdIcon>;
};

ArrowSwapOutline.displayName = 'ArrowSwapOutline';
ArrowSwapOutline.inheritAttrs = false;
export default ArrowSwapOutline;