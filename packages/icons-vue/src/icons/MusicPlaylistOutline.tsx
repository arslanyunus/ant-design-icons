// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlaylistOutlineSvg from '@ant-design/icons-svg/lib/asn/MusicPlaylistOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlaylistOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlaylistOutline: MusicPlaylistOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlaylistOutlineSvg}></AntdIcon>;
};

MusicPlaylistOutline.displayName = 'MusicPlaylistOutline';
MusicPlaylistOutline.inheritAttrs = false;
export default MusicPlaylistOutline;