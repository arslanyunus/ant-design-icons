// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundBulkSvg from '@ant-design/icons-svg/lib/asn/SoundBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundBulk: SoundBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundBulkSvg}></AntdIcon>;
};

SoundBulk.displayName = 'SoundBulk';
SoundBulk.inheritAttrs = false;
export default SoundBulk;