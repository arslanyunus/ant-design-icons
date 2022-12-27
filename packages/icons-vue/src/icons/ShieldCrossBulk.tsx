// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldCrossBulkSvg from '@ant-design/icons-svg/lib/asn/ShieldCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldCrossBulk: ShieldCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCrossBulkSvg}></AntdIcon>;
};

ShieldCrossBulk.displayName = 'ShieldCrossBulk';
ShieldCrossBulk.inheritAttrs = false;
export default ShieldCrossBulk;