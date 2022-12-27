// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowsLinearSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowsLinear: ProgrammingArrowsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowsLinearSvg}></AntdIcon>;
};

ProgrammingArrowsLinear.displayName = 'ProgrammingArrowsLinear';
ProgrammingArrowsLinear.inheritAttrs = false;
export default ProgrammingArrowsLinear;