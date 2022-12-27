// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Path2BulkSvg from '@ant-design/icons-svg/lib/asn/Path2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Path2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Path2Bulk: Path2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Path2BulkSvg}></AntdIcon>;
};

Path2Bulk.displayName = 'Path2Bulk';
Path2Bulk.inheritAttrs = false;
export default Path2Bulk;