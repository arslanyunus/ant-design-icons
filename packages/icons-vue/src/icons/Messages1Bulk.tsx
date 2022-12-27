// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages1BulkSvg from '@ant-design/icons-svg/lib/asn/Messages1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages1Bulk: Messages1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages1BulkSvg}></AntdIcon>;
};

Messages1Bulk.displayName = 'Messages1Bulk';
Messages1Bulk.inheritAttrs = false;
export default Messages1Bulk;