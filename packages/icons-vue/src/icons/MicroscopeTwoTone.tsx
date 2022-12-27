// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicroscopeTwoToneSvg from '@ant-design/icons-svg/lib/asn/MicroscopeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicroscopeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicroscopeTwoTone: MicroscopeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeTwoToneSvg}></AntdIcon>;
};

MicroscopeTwoTone.displayName = 'MicroscopeTwoTone';
MicroscopeTwoTone.inheritAttrs = false;
export default MicroscopeTwoTone;