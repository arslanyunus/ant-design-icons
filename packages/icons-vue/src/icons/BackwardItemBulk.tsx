// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardItemBulkSvg from '@ant-design/icons-svg/lib/asn/BackwardItemBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardItemBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardItemBulk: BackwardItemBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardItemBulkSvg}></AntdIcon>;
};

BackwardItemBulk.displayName = 'BackwardItemBulk';
BackwardItemBulk.inheritAttrs = false;
export default BackwardItemBulk;