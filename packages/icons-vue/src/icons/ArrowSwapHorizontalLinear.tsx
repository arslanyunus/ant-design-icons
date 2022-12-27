// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapHorizontalLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapHorizontalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapHorizontalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapHorizontalLinear: ArrowSwapHorizontalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapHorizontalLinearSvg}></AntdIcon>;
};

ArrowSwapHorizontalLinear.displayName = 'ArrowSwapHorizontalLinear';
ArrowSwapHorizontalLinear.inheritAttrs = false;
export default ArrowSwapHorizontalLinear;