// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowBulkSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowBulk: ProgrammingArrowBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowBulkSvg}></AntdIcon>;
};

ProgrammingArrowBulk.displayName = 'ProgrammingArrowBulk';
ProgrammingArrowBulk.inheritAttrs = false;
export default ProgrammingArrowBulk;