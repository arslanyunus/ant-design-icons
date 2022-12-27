// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid1BulkSvg from '@ant-design/icons-svg/lib/asn/Grid1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid1Bulk: Grid1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid1BulkSvg}></AntdIcon>;
};

Grid1Bulk.displayName = 'Grid1Bulk';
Grid1Bulk.inheritAttrs = false;
export default Grid1Bulk;