// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProgrammingArrowsBulkSvg from '@ant-design/icons-svg/lib/asn/ProgrammingArrowsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProgrammingArrowsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProgrammingArrowsBulk: ProgrammingArrowsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProgrammingArrowsBulkSvg}></AntdIcon>;
};

ProgrammingArrowsBulk.displayName = 'ProgrammingArrowsBulk';
ProgrammingArrowsBulk.inheritAttrs = false;
export default ProgrammingArrowsBulk;