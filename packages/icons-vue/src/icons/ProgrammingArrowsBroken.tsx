// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowsBrokenSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowsBroken: ProgrammingArrowsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowsBrokenSvg}></AntdIcon>;
};

ProgrammingArrowsBroken.displayName = 'ProgrammingArrowsBroken';
ProgrammingArrowsBroken.inheritAttrs = false;
export default ProgrammingArrowsBroken;