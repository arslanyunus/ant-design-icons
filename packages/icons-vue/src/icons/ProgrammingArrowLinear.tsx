// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowLinearSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowLinear: ProgrammingArrowLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowLinearSvg}></AntdIcon>;
};

ProgrammingArrowLinear.displayName = 'ProgrammingArrowLinear';
ProgrammingArrowLinear.inheritAttrs = false;
export default ProgrammingArrowLinear;