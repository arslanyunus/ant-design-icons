// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowsBoldSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowsBold: ProgrammingArrowsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowsBoldSvg}></AntdIcon>;
};

ProgrammingArrowsBold.displayName = 'ProgrammingArrowsBold';
ProgrammingArrowsBold.inheritAttrs = false;
export default ProgrammingArrowsBold;