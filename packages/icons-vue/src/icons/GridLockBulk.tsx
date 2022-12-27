// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridLockBulkSvg from '@ant-design/icons-svg/lib/asn/GridLockBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridLockBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridLockBulk: GridLockBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridLockBulkSvg}></AntdIcon>;
};

GridLockBulk.displayName = 'GridLockBulk';
GridLockBulk.inheritAttrs = false;
export default GridLockBulk;