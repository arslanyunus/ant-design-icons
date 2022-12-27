// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicFilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicFilterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicFilterTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicFilterTwoTone: MusicFilterTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicFilterTwoToneSvg}></AntdIcon>;
};

MusicFilterTwoTone.displayName = 'MusicFilterTwoTone';
MusicFilterTwoTone.inheritAttrs = false;
export default MusicFilterTwoTone;