// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link2BulkSvg from '@ant-design/icons-svg/lib/asn/Link2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link2Bulk: Link2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link2BulkSvg}></AntdIcon>;
};

Link2Bulk.displayName = 'Link2Bulk';
Link2Bulk.inheritAttrs = false;
export default Link2Bulk;