// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TreeBulkSvg from '@ant-design/icons-svg/lib/asn/TreeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TreeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TreeBulk: TreeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TreeBulkSvg}></AntdIcon>;
};

TreeBulk.displayName = 'TreeBulk';
TreeBulk.inheritAttrs = false;
export default TreeBulk;