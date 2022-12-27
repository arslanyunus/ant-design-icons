// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketBulkSvg from '@ant-design/icons-svg/lib/asn/TicketBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketBulk: TicketBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketBulkSvg}></AntdIcon>;
};

TicketBulk.displayName = 'TicketBulk';
TicketBulk.inheritAttrs = false;
export default TicketBulk;