// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BroomBulkSvg from '@ant-design/icons-svg/lib/asn/BroomBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BroomBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BroomBulk: BroomBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BroomBulkSvg}></AntdIcon>;
};

BroomBulk.displayName = 'BroomBulk';
BroomBulk.inheritAttrs = false;
export default BroomBulk;