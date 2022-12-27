// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSlashOutlineSvg from '@ant-design/icons-svg/lib/asn/ShieldSlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSlashOutline: ShieldSlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSlashOutlineSvg}></AntdIcon>;
};

ShieldSlashOutline.displayName = 'ShieldSlashOutline';
ShieldSlashOutline.inheritAttrs = false;
export default ShieldSlashOutline;