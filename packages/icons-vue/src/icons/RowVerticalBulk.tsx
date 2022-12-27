// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowVerticalBulkSvg from '@ant-design/icons-svg/lib/asn/RowVerticalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowVerticalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowVerticalBulk: RowVerticalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowVerticalBulkSvg}></AntdIcon>;
};

RowVerticalBulk.displayName = 'RowVerticalBulk';
RowVerticalBulk.inheritAttrs = false;
export default RowVerticalBulk;