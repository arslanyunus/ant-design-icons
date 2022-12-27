// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShapesOutlineSvg from '@ant-design/icons-svg/lib/asn/ShapesOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShapesOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShapesOutline: ShapesOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapesOutlineSvg}></AntdIcon>;
};

ShapesOutline.displayName = 'ShapesOutline';
ShapesOutline.inheritAttrs = false;
export default ShapesOutline;