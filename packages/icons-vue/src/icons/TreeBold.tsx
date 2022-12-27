// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TreeBoldSvg from '@ant-design/icons-svg/lib/asn/TreeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TreeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TreeBold: TreeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TreeBoldSvg}></AntdIcon>;
};

TreeBold.displayName = 'TreeBold';
TreeBold.inheritAttrs = false;
export default TreeBold;