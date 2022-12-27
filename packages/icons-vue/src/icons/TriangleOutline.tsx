// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TriangleOutlineSvg from '@ant-design/icons-svg/lib/asn/TriangleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TriangleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TriangleOutline: TriangleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TriangleOutlineSvg}></AntdIcon>;
};

TriangleOutline.displayName = 'TriangleOutline';
TriangleOutline.inheritAttrs = false;
export default TriangleOutline;