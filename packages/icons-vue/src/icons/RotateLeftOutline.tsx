// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/RotateLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeftOutline: RotateLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeftOutlineSvg}></AntdIcon>;
};

RotateLeftOutline.displayName = 'RotateLeftOutline';
RotateLeftOutline.inheritAttrs = false;
export default RotateLeftOutline;