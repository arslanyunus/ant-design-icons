// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLinear: ArrowLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLinearSvg}></AntdIcon>;
};

ArrowLinear.displayName = 'ArrowLinear';
ArrowLinear.inheritAttrs = false;
export default ArrowLinear;