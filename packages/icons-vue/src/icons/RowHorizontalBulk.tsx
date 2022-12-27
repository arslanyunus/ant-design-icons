// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RowHorizontalBulkSvg from '@ant-design/icons-svg/lib/asn/RowHorizontalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RowHorizontalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RowHorizontalBulk: RowHorizontalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RowHorizontalBulkSvg}></AntdIcon>;
};

RowHorizontalBulk.displayName = 'RowHorizontalBulk';
RowHorizontalBulk.inheritAttrs = false;
export default RowHorizontalBulk;