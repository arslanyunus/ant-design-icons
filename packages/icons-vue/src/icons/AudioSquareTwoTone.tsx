// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioSquareTwoTone: AudioSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioSquareTwoToneSvg}></AntdIcon>;
};

AudioSquareTwoTone.displayName = 'AudioSquareTwoTone';
AudioSquareTwoTone.inheritAttrs = false;
export default AudioSquareTwoTone;