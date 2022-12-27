// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MilkBulkSvg from '@ant-design/icons-svg/lib/asn/MilkBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MilkBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MilkBulk: MilkBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MilkBulkSvg}></AntdIcon>;
};

MilkBulk.displayName = 'MilkBulk';
MilkBulk.inheritAttrs = false;
export default MilkBulk;