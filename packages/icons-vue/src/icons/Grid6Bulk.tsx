// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid6BulkSvg from '@ant-design/icons-svg/lib/asn/Grid6Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid6BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid6Bulk: Grid6BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid6BulkSvg}></AntdIcon>;
};

Grid6Bulk.displayName = 'Grid6Bulk';
Grid6Bulk.inheritAttrs = false;
export default Grid6Bulk;