// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ticket2BulkSvg from '@ant-design/icons-svg/lib/asn/Ticket2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ticket2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ticket2Bulk: Ticket2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ticket2BulkSvg}></AntdIcon>;
};

Ticket2Bulk.displayName = 'Ticket2Bulk';
Ticket2Bulk.inheritAttrs = false;
export default Ticket2Bulk;