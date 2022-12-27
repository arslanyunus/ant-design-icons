// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid2BulkSvg from '@ant-design/icons-svg/lib/asn/Grid2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid2Bulk: Grid2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid2BulkSvg}></AntdIcon>;
};

Grid2Bulk.displayName = 'Grid2Bulk';
Grid2Bulk.inheritAttrs = false;
export default Grid2Bulk;