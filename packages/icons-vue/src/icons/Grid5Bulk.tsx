// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid5BulkSvg from '@ant-design/icons-svg/lib/asn/Grid5Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid5BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid5Bulk: Grid5BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid5BulkSvg}></AntdIcon>;
};

Grid5Bulk.displayName = 'Grid5Bulk';
Grid5Bulk.inheritAttrs = false;
export default Grid5Bulk;