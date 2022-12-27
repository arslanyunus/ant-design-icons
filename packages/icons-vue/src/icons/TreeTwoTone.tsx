// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TreeTwoToneSvg from '@ant-design/icons-svg/lib/asn/TreeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TreeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TreeTwoTone: TreeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TreeTwoToneSvg}></AntdIcon>;
};

TreeTwoTone.displayName = 'TreeTwoTone';
TreeTwoTone.inheritAttrs = false;
export default TreeTwoTone;