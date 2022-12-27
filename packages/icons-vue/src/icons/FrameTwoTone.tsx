// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrameTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrameTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrameTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrameTwoTone: FrameTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrameTwoToneSvg}></AntdIcon>;
};

FrameTwoTone.displayName = 'FrameTwoTone';
FrameTwoTone.inheritAttrs = false;
export default FrameTwoTone;