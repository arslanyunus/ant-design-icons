// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MiniMusicSqaureBoldSvg from '@ant-design/icons-svg/lib/asn/MiniMusicSqaureBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MiniMusicSqaureBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MiniMusicSqaureBold: MiniMusicSqaureBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniMusicSqaureBoldSvg}></AntdIcon>;
};

MiniMusicSqaureBold.displayName = 'MiniMusicSqaureBold';
MiniMusicSqaureBold.inheritAttrs = false;
export default MiniMusicSqaureBold;