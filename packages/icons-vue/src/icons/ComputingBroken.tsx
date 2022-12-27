// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComputingBrokenSvg from '@ant-design/icons-svg/lib/asn/ComputingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComputingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComputingBroken: ComputingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComputingBrokenSvg}></AntdIcon>;
};

ComputingBroken.displayName = 'ComputingBroken';
ComputingBroken.inheritAttrs = false;
export default ComputingBroken;