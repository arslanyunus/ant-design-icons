// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowTwoTone: ProgrammingArrowTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowTwoToneSvg}></AntdIcon>;
};

ProgrammingArrowTwoTone.displayName = 'ProgrammingArrowTwoTone';
ProgrammingArrowTwoTone.inheritAttrs = false;
export default ProgrammingArrowTwoTone;