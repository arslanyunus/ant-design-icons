// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TreeOutlineSvg from '@ant-design/icons-svg/lib/asn/TreeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TreeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TreeOutline: TreeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TreeOutlineSvg}></AntdIcon>;
};

TreeOutline.displayName = 'TreeOutline';
TreeOutline.inheritAttrs = false;
export default TreeOutline;