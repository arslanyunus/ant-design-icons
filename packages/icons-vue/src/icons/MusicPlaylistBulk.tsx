// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlaylistBulkSvg from '@ant-design/icons-svg/lib/asn/MusicPlaylistBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlaylistBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlaylistBulk: MusicPlaylistBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlaylistBulkSvg}></AntdIcon>;
};

MusicPlaylistBulk.displayName = 'MusicPlaylistBulk';
MusicPlaylistBulk.inheritAttrs = false;
export default MusicPlaylistBulk;