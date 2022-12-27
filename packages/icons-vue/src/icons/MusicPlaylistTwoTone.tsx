// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlaylistTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicPlaylistTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlaylistTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlaylistTwoTone: MusicPlaylistTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlaylistTwoToneSvg}></AntdIcon>;
};

MusicPlaylistTwoTone.displayName = 'MusicPlaylistTwoTone';
MusicPlaylistTwoTone.inheritAttrs = false;
export default MusicPlaylistTwoTone;