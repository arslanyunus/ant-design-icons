// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatCircleLinearSvg from '@ant-design/icons-svg/lib/asn/RepeatCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatCircleLinear: RepeatCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatCircleLinearSvg}></AntdIcon>;
};

RepeatCircleLinear.displayName = 'RepeatCircleLinear';
RepeatCircleLinear.inheritAttrs = false;
export default RepeatCircleLinear;