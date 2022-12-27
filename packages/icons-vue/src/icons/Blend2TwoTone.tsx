// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Blend2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Blend2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Blend2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Blend2TwoTone: Blend2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Blend2TwoToneSvg}></AntdIcon>;
};

Blend2TwoTone.displayName = 'Blend2TwoTone';
Blend2TwoTone.inheritAttrs = false;
export default Blend2TwoTone;