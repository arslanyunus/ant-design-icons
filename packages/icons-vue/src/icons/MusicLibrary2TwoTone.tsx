// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicLibrary2TwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicLibrary2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicLibrary2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicLibrary2TwoTone: MusicLibrary2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLibrary2TwoToneSvg}></AntdIcon>;
};

MusicLibrary2TwoTone.displayName = 'MusicLibrary2TwoTone';
MusicLibrary2TwoTone.inheritAttrs = false;
export default MusicLibrary2TwoTone;