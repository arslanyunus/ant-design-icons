// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/PathSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathSquareOutline: PathSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathSquareOutlineSvg}></AntdIcon>;
};

PathSquareOutline.displayName = 'PathSquareOutline';
PathSquareOutline.inheritAttrs = false;
export default PathSquareOutline;