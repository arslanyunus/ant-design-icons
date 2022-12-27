// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MusicSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareTwoTone: MusicSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareTwoToneSvg}></AntdIcon>;
};

MusicSquareTwoTone.displayName = 'MusicSquareTwoTone';
MusicSquareTwoTone.inheritAttrs = false;
export default MusicSquareTwoTone;