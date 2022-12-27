// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketExpiredBulkSvg from '@ant-design/icons-svg/lib/asn/TicketExpiredBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketExpiredBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketExpiredBulk: TicketExpiredBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketExpiredBulkSvg}></AntdIcon>;
};

TicketExpiredBulk.displayName = 'TicketExpiredBulk';
TicketExpiredBulk.inheritAttrs = false;
export default TicketExpiredBulk;