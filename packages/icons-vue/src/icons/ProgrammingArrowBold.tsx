// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowBoldSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowBold: ProgrammingArrowBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowBoldSvg}></AntdIcon>;
};

ProgrammingArrowBold.displayName = 'ProgrammingArrowBold';
ProgrammingArrowBold.inheritAttrs = false;
export default ProgrammingArrowBold;