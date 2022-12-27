// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComputingLinearSvg from '@ant-design/icons-svg/lib/asn/ComputingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComputingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComputingLinear: ComputingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputingLinearSvg}></AntdIcon>;
};

ComputingLinear.displayName = 'ComputingLinear';
ComputingLinear.inheritAttrs = false;
export default ComputingLinear;