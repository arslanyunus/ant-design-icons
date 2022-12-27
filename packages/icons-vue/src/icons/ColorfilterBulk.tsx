// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorfilterBulkSvg from '@ant-design/icons-svg/lib/asn/ColorfilterBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorfilterBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorfilterBulk: ColorfilterBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorfilterBulkSvg}></AntdIcon>;
};

ColorfilterBulk.displayName = 'ColorfilterBulk';
ColorfilterBulk.inheritAttrs = false;
export default ColorfilterBulk;