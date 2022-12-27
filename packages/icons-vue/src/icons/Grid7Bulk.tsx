// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid7BulkSvg from '@ant-design/icons-svg/lib/asn/Grid7Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid7BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid7Bulk: Grid7BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid7BulkSvg}></AntdIcon>;
};

Grid7Bulk.displayName = 'Grid7Bulk';
Grid7Bulk.inheritAttrs = false;
export default Grid7Bulk;