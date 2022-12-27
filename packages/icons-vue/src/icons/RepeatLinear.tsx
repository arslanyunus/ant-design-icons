// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatLinearSvg from '@ant-design/icons-svg/lib/asn/RepeatLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatLinear: RepeatLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatLinearSvg}></AntdIcon>;
};

RepeatLinear.displayName = 'RepeatLinear';
RepeatLinear.inheritAttrs = false;
export default RepeatLinear;