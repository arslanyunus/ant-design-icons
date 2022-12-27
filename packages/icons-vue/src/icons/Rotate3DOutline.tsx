// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Rotate3DOutlineSvg from '@ant-design/icons-svg/lib/asn/Rotate3DOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Rotate3DOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Rotate3DOutline: Rotate3DOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Rotate3DOutlineSvg}></AntdIcon>;
};

Rotate3DOutline.displayName = 'Rotate3DOutline';
Rotate3DOutline.inheritAttrs = false;
export default Rotate3DOutline;