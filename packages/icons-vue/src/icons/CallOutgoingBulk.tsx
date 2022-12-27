// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallOutgoingBulkSvg from '@ant-design/icons-svg/lib/asn/CallOutgoingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallOutgoingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallOutgoingBulk: CallOutgoingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallOutgoingBulkSvg}></AntdIcon>;
};

CallOutgoingBulk.displayName = 'CallOutgoingBulk';
CallOutgoingBulk.inheritAttrs = false;
export default CallOutgoingBulk;