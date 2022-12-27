// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShapesTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShapesTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShapesTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShapesTwoTone: ShapesTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapesTwoToneSvg}></AntdIcon>;
};

ShapesTwoTone.displayName = 'ShapesTwoTone';
ShapesTwoTone.inheritAttrs = false;
export default ShapesTwoTone;