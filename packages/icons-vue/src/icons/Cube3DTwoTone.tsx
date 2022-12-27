// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Cube3DTwoToneSvg from '@ant-design/icons-svg/lib/asn/Cube3DTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Cube3DTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Cube3DTwoTone: Cube3DTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Cube3DTwoToneSvg}></AntdIcon>;
};

Cube3DTwoTone.displayName = 'Cube3DTwoTone';
Cube3DTwoTone.inheritAttrs = false;
export default Cube3DTwoTone;