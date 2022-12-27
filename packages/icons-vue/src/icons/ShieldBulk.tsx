// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldBulkSvg from '@ant-design/icons-svg/lib/asn/ShieldBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldBulk: ShieldBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldBulkSvg}></AntdIcon>;
};

ShieldBulk.displayName = 'ShieldBulk';
ShieldBulk.inheritAttrs = false;
export default ShieldBulk;