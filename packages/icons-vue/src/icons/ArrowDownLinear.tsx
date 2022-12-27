// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownLinearSvg from '@ant-design/icons-svg/lib/asn/ArrowDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDownLinear: ArrowDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownLinearSvg}></AntdIcon>;
};

ArrowDownLinear.displayName = 'ArrowDownLinear';
ArrowDownLinear.inheritAttrs = false;
export default ArrowDownLinear;