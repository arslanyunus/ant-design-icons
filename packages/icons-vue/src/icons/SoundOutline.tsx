// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundOutlineSvg from '@ant-design/icons-svg/lib/asn/SoundOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundOutline: SoundOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundOutlineSvg}></AntdIcon>;
};

SoundOutline.displayName = 'SoundOutline';
SoundOutline.inheritAttrs = false;
export default SoundOutline;