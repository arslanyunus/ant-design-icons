// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicrophoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/MicrophoneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicrophoneTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicrophoneTwoTone: MicrophoneTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrophoneTwoToneSvg}></AntdIcon>;
};

MicrophoneTwoTone.displayName = 'MicrophoneTwoTone';
MicrophoneTwoTone.inheritAttrs = false;
export default MicrophoneTwoTone;