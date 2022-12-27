// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlayTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicPlayTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlayTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlayTwoTone: MusicPlayTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlayTwoToneSvg}></AntdIcon>;
};

MusicPlayTwoTone.displayName = 'MusicPlayTwoTone';
MusicPlayTwoTone.inheritAttrs = false;
export default MusicPlayTwoTone;