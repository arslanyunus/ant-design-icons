// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Mask2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask2TwoTone: Mask2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask2TwoToneSvg}></AntdIcon>;
};

Mask2TwoTone.displayName = 'Mask2TwoTone';
Mask2TwoTone.inheritAttrs = false;
export default Mask2TwoTone;