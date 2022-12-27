// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid9BulkSvg from '@ant-design/icons-svg/lib/asn/Grid9Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid9BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid9Bulk: Grid9BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid9BulkSvg}></AntdIcon>;
};

Grid9Bulk.displayName = 'Grid9Bulk';
Grid9Bulk.inheritAttrs = false;
export default Grid9Bulk;