// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallIncomingBulkSvg from '@ant-design/icons-svg/lib/asn/CallIncomingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallIncomingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallIncomingBulk: CallIncomingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallIncomingBulkSvg}></AntdIcon>;
};

CallIncomingBulk.displayName = 'CallIncomingBulk';
CallIncomingBulk.inheritAttrs = false;
export default CallIncomingBulk;