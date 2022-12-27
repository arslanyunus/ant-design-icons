// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardBulkSvg from '@ant-design/icons-svg/lib/asn/BackwardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardBulk: BackwardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardBulkSvg}></AntdIcon>;
};

BackwardBulk.displayName = 'BackwardBulk';
BackwardBulk.inheritAttrs = false;
export default BackwardBulk;