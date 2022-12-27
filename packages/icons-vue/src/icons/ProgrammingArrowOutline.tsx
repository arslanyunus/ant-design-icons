// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowOutlineSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowOutline: ProgrammingArrowOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowOutlineSvg}></AntdIcon>;
};

ProgrammingArrowOutline.displayName = 'ProgrammingArrowOutline';
ProgrammingArrowOutline.inheritAttrs = false;
export default ProgrammingArrowOutline;