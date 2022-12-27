// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3DTwoToneSvg from '@ant-design/icons-svg/lib/asn/Square3DTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3DTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3DTwoTone: Square3DTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3DTwoToneSvg}></AntdIcon>;
};

Square3DTwoTone.displayName = 'Square3DTwoTone';
Square3DTwoTone.inheritAttrs = false;
export default Square3DTwoTone;