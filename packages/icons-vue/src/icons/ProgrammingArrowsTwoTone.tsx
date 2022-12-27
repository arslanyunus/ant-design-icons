// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowsTwoTone: ProgrammingArrowsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowsTwoToneSvg}></AntdIcon>;
};

ProgrammingArrowsTwoTone.displayName = 'ProgrammingArrowsTwoTone';
ProgrammingArrowsTwoTone.inheritAttrs = false;
export default ProgrammingArrowsTwoTone;