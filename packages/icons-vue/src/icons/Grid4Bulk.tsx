// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid4BulkSvg from '@ant-design/icons-svg/lib/asn/Grid4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid4Bulk: Grid4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid4BulkSvg}></AntdIcon>;
};

Grid4Bulk.displayName = 'Grid4Bulk';
Grid4Bulk.inheritAttrs = false;
export default Grid4Bulk;