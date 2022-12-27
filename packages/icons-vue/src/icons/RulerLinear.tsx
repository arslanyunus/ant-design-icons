// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerLinearSvg from '@ant-design/icons-svg/lib/asn/RulerLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerLinear: RulerLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerLinearSvg}></AntdIcon>;
};

RulerLinear.displayName = 'RulerLinear';
RulerLinear.inheritAttrs = false;
export default RulerLinear;