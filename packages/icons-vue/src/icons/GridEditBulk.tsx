// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GridEditBulkSvg from '@ant-design/icons-svg/lib/asn/GridEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GridEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GridEditBulk: GridEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GridEditBulkSvg}></AntdIcon>;
};

GridEditBulk.displayName = 'GridEditBulk';
GridEditBulk.inheritAttrs = false;
export default GridEditBulk;