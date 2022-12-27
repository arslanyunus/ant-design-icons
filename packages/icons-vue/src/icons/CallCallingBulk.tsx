// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallCallingBulkSvg from '@ant-design/icons-svg/lib/asn/CallCallingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallCallingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallCallingBulk: CallCallingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallCallingBulkSvg}></AntdIcon>;
};

CallCallingBulk.displayName = 'CallCallingBulk';
CallCallingBulk.inheritAttrs = false;
export default CallCallingBulk;