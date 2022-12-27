// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlaylistLinearSvg from '@ant-design/icons-svg/lib/asn/MusicPlaylistLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlaylistLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlaylistLinear: MusicPlaylistLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlaylistLinearSvg}></AntdIcon>;
};

MusicPlaylistLinear.displayName = 'MusicPlaylistLinear';
MusicPlaylistLinear.inheritAttrs = false;
export default MusicPlaylistLinear;