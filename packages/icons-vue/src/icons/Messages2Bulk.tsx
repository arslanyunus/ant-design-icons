// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages2BulkSvg from '@ant-design/icons-svg/lib/asn/Messages2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages2Bulk: Messages2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages2BulkSvg}></AntdIcon>;
};

Messages2Bulk.displayName = 'Messages2Bulk';
Messages2Bulk.inheritAttrs = false;
export default Messages2Bulk;