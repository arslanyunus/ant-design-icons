// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlaylistBoldSvg from '@ant-design/icons-svg/lib/asn/MusicPlaylistBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlaylistBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlaylistBold: MusicPlaylistBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlaylistBoldSvg}></AntdIcon>;
};

MusicPlaylistBold.displayName = 'MusicPlaylistBold';
MusicPlaylistBold.inheritAttrs = false;
export default MusicPlaylistBold;