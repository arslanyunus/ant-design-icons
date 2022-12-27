// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RamBulkSvg from '@ant-design/icons-svg/lib/asn/RamBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RamBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RamBulk: RamBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RamBulkSvg}></AntdIcon>;
};

RamBulk.displayName = 'RamBulk';
RamBulk.inheritAttrs = false;
export default RamBulk;