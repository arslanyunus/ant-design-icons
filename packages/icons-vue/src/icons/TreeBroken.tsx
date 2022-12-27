// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TreeBrokenSvg from '@ant-design/icons-svg/lib/asn/TreeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TreeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TreeBroken: TreeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TreeBrokenSvg}></AntdIcon>;
};

TreeBroken.displayName = 'TreeBroken';
TreeBroken.inheritAttrs = false;
export default TreeBroken;