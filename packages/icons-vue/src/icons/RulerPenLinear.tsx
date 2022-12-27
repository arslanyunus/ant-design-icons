// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerPenLinearSvg from '@ant-design/icons-svg/lib/asn/RulerPenLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerPenLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerPenLinear: RulerPenLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerPenLinearSvg}></AntdIcon>;
};

RulerPenLinear.displayName = 'RulerPenLinear';
RulerPenLinear.inheritAttrs = false;
export default RulerPenLinear;