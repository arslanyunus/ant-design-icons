// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3DOutlineSvg from '@ant-design/icons-svg/lib/asn/Square3DOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3DOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3DOutline: Square3DOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3DOutlineSvg}></AntdIcon>;
};

Square3DOutline.displayName = 'Square3DOutline';
Square3DOutline.inheritAttrs = false;
export default Square3DOutline;