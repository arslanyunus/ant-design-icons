// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorfilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/ColorfilterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorfilterTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorfilterTwoTone: ColorfilterTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorfilterTwoToneSvg}></AntdIcon>;
};

ColorfilterTwoTone.displayName = 'ColorfilterTwoTone';
ColorfilterTwoTone.inheritAttrs = false;
export default ColorfilterTwoTone;