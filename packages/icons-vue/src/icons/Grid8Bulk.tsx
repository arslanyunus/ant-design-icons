// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid8BulkSvg from '@ant-design/icons-svg/lib/asn/Grid8Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid8BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid8Bulk: Grid8BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid8BulkSvg}></AntdIcon>;
};

Grid8Bulk.displayName = 'Grid8Bulk';
Grid8Bulk.inheritAttrs = false;
export default Grid8Bulk;