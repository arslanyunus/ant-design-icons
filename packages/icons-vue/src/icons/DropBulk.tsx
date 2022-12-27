// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropBulkSvg from '@ant-design/icons-svg/lib/asn/DropBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropBulk: DropBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropBulkSvg}></AntdIcon>;
};

DropBulk.displayName = 'DropBulk';
DropBulk.inheritAttrs = false;
export default DropBulk;