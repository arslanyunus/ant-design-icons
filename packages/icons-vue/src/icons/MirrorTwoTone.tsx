// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirrorTwoToneSvg from '@ant-design/icons-svg/lib/asn/MirrorTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirrorTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirrorTwoTone: MirrorTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirrorTwoToneSvg}></AntdIcon>;
};

MirrorTwoTone.displayName = 'MirrorTwoTone';
MirrorTwoTone.inheritAttrs = false;
export default MirrorTwoTone;