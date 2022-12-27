// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketStarBulkSvg from '@ant-design/icons-svg/lib/asn/TicketStarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketStarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketStarBulk: TicketStarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketStarBulkSvg}></AntdIcon>;
};

TicketStarBulk.displayName = 'TicketStarBulk';
TicketStarBulk.inheritAttrs = false;
export default TicketStarBulk;