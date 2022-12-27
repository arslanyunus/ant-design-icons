// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicCircleTwoTone: MusicCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicCircleTwoToneSvg}></AntdIcon>;
};

MusicCircleTwoTone.displayName = 'MusicCircleTwoTone';
MusicCircleTwoTone.inheritAttrs = false;
export default MusicCircleTwoTone;