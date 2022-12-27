// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowBrokenSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowBroken: ProgrammingArrowBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowBrokenSvg}></AntdIcon>;
};

ProgrammingArrowBroken.displayName = 'ProgrammingArrowBroken';
ProgrammingArrowBroken.inheritAttrs = false;
export default ProgrammingArrowBroken;