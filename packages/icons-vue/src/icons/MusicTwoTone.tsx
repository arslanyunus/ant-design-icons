// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicTwoTone: MusicTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicTwoToneSvg}></AntdIcon>;
};

MusicTwoTone.displayName = 'MusicTwoTone';
MusicTwoTone.inheritAttrs = false;
export default MusicTwoTone;