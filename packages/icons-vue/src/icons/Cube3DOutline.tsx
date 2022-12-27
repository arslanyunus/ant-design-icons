// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Cube3DOutlineSvg from '@ant-design/icons-svg/lib/asn/Cube3DOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Cube3DOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Cube3DOutline: Cube3DOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Cube3DOutlineSvg}></AntdIcon>;
};

Cube3DOutline.displayName = 'Cube3DOutline';
Cube3DOutline.inheritAttrs = false;
export default Cube3DOutline;