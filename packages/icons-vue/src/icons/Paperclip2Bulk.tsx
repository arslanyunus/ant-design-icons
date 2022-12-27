// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Paperclip2BulkSvg from '@ant-design/icons-svg/lib/asn/Paperclip2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Paperclip2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Paperclip2Bulk: Paperclip2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Paperclip2BulkSvg}></AntdIcon>;
};

Paperclip2Bulk.displayName = 'Paperclip2Bulk';
Paperclip2Bulk.inheritAttrs = false;
export default Paperclip2Bulk;