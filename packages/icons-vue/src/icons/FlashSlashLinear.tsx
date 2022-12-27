// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashSlashLinearSvg from '@ant-design/icons-svg/lib/asn/FlashSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashSlashLinear: FlashSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashSlashLinearSvg}></AntdIcon>;
};

FlashSlashLinear.displayName = 'FlashSlashLinear';
FlashSlashLinear.inheritAttrs = false;
export default FlashSlashLinear;