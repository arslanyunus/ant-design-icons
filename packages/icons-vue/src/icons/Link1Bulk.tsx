// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link1BulkSvg from '@ant-design/icons-svg/lib/asn/Link1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link1Bulk: Link1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link1BulkSvg}></AntdIcon>;
};

Link1Bulk.displayName = 'Link1Bulk';
Link1Bulk.inheritAttrs = false;
export default Link1Bulk;