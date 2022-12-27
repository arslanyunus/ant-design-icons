// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlashSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashSlashTwoTone: FlashSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashSlashTwoToneSvg}></AntdIcon>;
};

FlashSlashTwoTone.displayName = 'FlashSlashTwoTone';
FlashSlashTwoTone.inheritAttrs = false;
export default FlashSlashTwoTone;