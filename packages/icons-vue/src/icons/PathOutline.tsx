// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathOutlineSvg from '@ant-design/icons-svg/lib/asn/PathOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathOutline: PathOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathOutlineSvg}></AntdIcon>;
};

PathOutline.displayName = 'PathOutline';
PathOutline.inheritAttrs = false;
export default PathOutline;