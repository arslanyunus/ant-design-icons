// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid3BulkSvg from '@ant-design/icons-svg/lib/asn/Grid3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid3Bulk: Grid3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid3BulkSvg}></AntdIcon>;
};

Grid3Bulk.displayName = 'Grid3Bulk';
Grid3Bulk.inheritAttrs = false;
export default Grid3Bulk;