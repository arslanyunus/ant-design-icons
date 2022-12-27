// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlaylistBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicPlaylistBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlaylistBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlaylistBroken: MusicPlaylistBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlaylistBrokenSvg}></AntdIcon>;
};

MusicPlaylistBroken.displayName = 'MusicPlaylistBroken';
MusicPlaylistBroken.inheritAttrs = false;
export default MusicPlaylistBroken;