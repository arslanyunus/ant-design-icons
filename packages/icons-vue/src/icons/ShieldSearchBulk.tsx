// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSearchBulkSvg from '@ant-design/icons-svg/lib/asn/ShieldSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSearchBulk: ShieldSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSearchBulkSvg}></AntdIcon>;
};

ShieldSearchBulk.displayName = 'ShieldSearchBulk';
ShieldSearchBulk.inheritAttrs = false;
export default ShieldSearchBulk;