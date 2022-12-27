// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MiniMusicSqaureBrokenSvg from '@ant-design/icons-svg/lib/asn/MiniMusicSqaureBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MiniMusicSqaureBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MiniMusicSqaureBroken: MiniMusicSqaureBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniMusicSqaureBrokenSvg}></AntdIcon>;
};

MiniMusicSqaureBroken.displayName = 'MiniMusicSqaureBroken';
MiniMusicSqaureBroken.inheritAttrs = false;
export default MiniMusicSqaureBroken;