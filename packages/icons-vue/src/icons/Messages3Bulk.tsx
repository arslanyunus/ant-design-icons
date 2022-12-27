// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages3BulkSvg from '@ant-design/icons-svg/lib/asn/Messages3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages3Bulk: Messages3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages3BulkSvg}></AntdIcon>;
};

Messages3Bulk.displayName = 'Messages3Bulk';
Messages3Bulk.inheritAttrs = false;
export default Messages3Bulk;