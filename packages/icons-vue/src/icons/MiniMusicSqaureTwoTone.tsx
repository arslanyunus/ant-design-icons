// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MiniMusicSqaureTwoToneSvg from '@ant-design/icons-svg/lib/asn/MiniMusicSqaureTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MiniMusicSqaureTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MiniMusicSqaureTwoTone: MiniMusicSqaureTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniMusicSqaureTwoToneSvg}></AntdIcon>;
};

MiniMusicSqaureTwoTone.displayName = 'MiniMusicSqaureTwoTone';
MiniMusicSqaureTwoTone.inheritAttrs = false;
export default MiniMusicSqaureTwoTone;