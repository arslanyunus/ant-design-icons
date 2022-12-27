// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link21BulkSvg from '@ant-design/icons-svg/lib/asn/Link21Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link21BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link21Bulk: Link21BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link21BulkSvg}></AntdIcon>;
};

Link21Bulk.displayName = 'Link21Bulk';
Link21Bulk.inheritAttrs = false;
export default Link21Bulk;