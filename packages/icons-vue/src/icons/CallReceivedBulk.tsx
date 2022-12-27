// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallReceivedBulkSvg from '@ant-design/icons-svg/lib/asn/CallReceivedBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallReceivedBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallReceivedBulk: CallReceivedBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallReceivedBulkSvg}></AntdIcon>;
};

CallReceivedBulk.displayName = 'CallReceivedBulk';
CallReceivedBulk.inheritAttrs = false;
export default CallReceivedBulk;