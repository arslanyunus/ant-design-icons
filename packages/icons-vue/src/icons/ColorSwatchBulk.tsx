// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorSwatchBulkSvg from '@ant-design/icons-svg/lib/asn/ColorSwatchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorSwatchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorSwatchBulk: ColorSwatchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorSwatchBulkSvg}></AntdIcon>;
};

ColorSwatchBulk.displayName = 'ColorSwatchBulk';
ColorSwatchBulk.inheritAttrs = false;
export default ColorSwatchBulk;