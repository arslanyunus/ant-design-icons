// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowsOutlineSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowsOutline: ProgrammingArrowsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowsOutlineSvg}></AntdIcon>;
};

ProgrammingArrowsOutline.displayName = 'ProgrammingArrowsOutline';
ProgrammingArrowsOutline.inheritAttrs = false;
export default ProgrammingArrowsOutline;