// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Rotate3DTwoToneSvg from '@ant-design/icons-svg/lib/asn/Rotate3DTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Rotate3DTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Rotate3DTwoTone: Rotate3DTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Rotate3DTwoToneSvg}></AntdIcon>;
};

Rotate3DTwoTone.displayName = 'Rotate3DTwoTone';
Rotate3DTwoTone.inheritAttrs = false;
export default Rotate3DTwoTone;